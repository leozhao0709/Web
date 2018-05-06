# Formik

Formik is a really good form library for react. it works with `yup` validitors.

[Formik github](https://github.com/jaredpalmer/formik)

## 1. withFormik() (from official doc)

```tsx
import React from 'react';
import Yup from 'yup';
import { withFormik, FormikProps, FormikErrors, Form, Field } from 'formik';

// Shape of form values
interface FormValues {
    email: string;
    password: string;
}

interface OtherProps {
    message: string;
}

// You may see / user InjectedFormikProps<OtherProps, FormValues> instead of what comes below. They are the same--InjectedFormikProps was artifact of when Formik only exported an HOC. It is also less flexible as it MUST wrap all props (it passes them through).
const InnerForm = (props: OtherProps & FormikProps<FormValues>) => {
    const { touched, errors, isSubmitting, message } = props;
    return (
        <Form>
            <h1>{message}</h1>
            <Field type="email" name="email" />
            {touched.email && errors.email && <div>{errors.email}</div>}

            <Field type="password" name="password" />
            {touched.password && errors.password && <div>{errors.password}</div>}

            <button type="submit" disabled={isSubmitting}>
                Submit
            </button>
        </Form>
    );
};

// The type of props MyForm receives
interface MyFormProps {
    initialEmail?: string;
    message: string; // if this passed all the way through you might do this or make a union type
}

// Wrap our form with the using withFormik HoC
const MyForm = withFormik<MyFormProps, FormValues>({
    // Transform outer props into form values
    mapPropsToValues: props => {
        return {
            email: props.initialEmail || '',
            password: ''
        };
    },

    // for yup validitors
    validationSchema: Yup.object().shape({
        email: Yup.string()
            .email('Invalid email address')
            .required('Email is required!')
    }),

    handleSubmit: (values: FormValues) => {
        // do submitting things
    }
})(InnerForm);

// Use <MyForm /> anywhere
const Basic = () => (
    <div>
        <h1>My App</h1>
        <p>This can be anywhere in your application</p>
        <MyForm message="Sign up" />
    </div>
);

export default Basic;
```

## 2. Woring with component example

Note: when using customized component, the component props should extends from `FieldProps`.

be careful with fieldArray name, note there is a dot before index here. Example: `${props.name}.${index}`

```tsx
import * as React from 'react';
import { FieldProps } from 'formik';
import * as styles from './SurveyField.css';

interface SurveyFieldProps extends FieldProps {
    label: string;
}

export const SurveyField: React.SFC<SurveyFieldProps> = ({ field, form: { touched, errors }, ...props }) => {
    let labelClasses = [styles.label];
    let inputClasses = [styles.input];
    if (field.value) {
        labelClasses = [...labelClasses, styles.labelActive];
    }
    if (touched[field.name] && errors[field.name]) {
        inputClasses = [...inputClasses, styles.inputError];
        labelClasses = [...labelClasses, styles.labelError];
    }
    return (
        <div className={styles.surveyField}>
            <input className={inputClasses.join(' ')} id={props.label} type="text" {...field} {...props} />
            <label className={labelClasses.join(' ')} htmlFor={props.label}>
                {props.label}
            </label>
            {touched[field.name] && errors[field.name] && <p className={styles.error}>{errors[field.name]}</p>}
        </div>
    );
};
```

```tsx
import * as React from 'react';
import { ArrayHelpers, FormikProps, Field } from 'formik';
import { AddButton, MinusButton } from 'my-react-story';
import * as styles from './SurveyFieldArray.css';

interface FieldArrayProps extends ArrayHelpers {
    form: FormikProps<any>;
    name: string;
}

interface SurveyFieldArrayProps extends FieldArrayProps {
    label: string;
}

export const SurveyFieldArray: React.SFC<SurveyFieldArrayProps> = props => {
    return (
        <div className={styles.surveyFieldArray}>
            <label className={styles.label}>{props.label}</label>
            <AddButton
                type="button"
                onClick={() => {
                    props.push('');
                }}
                className={styles.addButton}
            />
            <br />
            {props.form.errors[props.name] &&
                !Array.isArray(props.form.errors[props.name]) && (
                    <p className={styles.error}>{props.form.errors[props.name]}</p>
                )}
            {props.form.values[props.name].map((value, index) => {
                let inputClass = [styles.input];

                if (
                    Array.isArray(props.form.touched[props.name]) &&
                    props.form.touched[props.name]![index] &&
                    Array.isArray(props.form.errors[props.name]) &&
                    props.form.errors[props.name][index]
                ) {
                    inputClass = [...inputClass, styles.inputError];
                }

                return (
                    <div className={styles.inputField} key={`${props.name}${index}`}>
                        <Field name={`${props.name}.${index}`} className={inputClass.join(' ')} />
                        <MinusButton
                            type="button"
                            className={styles.minusButton}
                            onClick={() => {
                                props.remove(index);
                            }}
                        />
                        {Array.isArray(props.form.touched[props.name]) &&
                            props.form.touched[props.name]![index] &&
                            Array.isArray(props.form.errors[props.name]) && (
                                <p className={styles.error}>{props.form.errors[props.name][index]}</p>
                            )}
                    </div>
                );
            })}
        </div>
    );
};

SurveyFieldArray.defaultProps = {};
```

```tsx
import * as React from 'react';
import { FormikProps, Form, Field, withFormik, FieldArray } from 'formik';
import { SurveyField } from './SurveyField/SurveyField';
import * as yup from 'yup';
import { Button } from 'my-react-story';
import * as styles from './SurveyForm.css';
import { RouterButton } from 'my-react-story';
import { SurveyFieldArray } from './SurveyFieldArray/SurveyFieldArray';

const fields: { name: string; label: string; defaultValue: string | string[] }[] = [
    {
        name: 'title',
        label: 'Campaign Title',
        defaultValue: ''
    },
    {
        name: 'subject',
        label: 'Subject Line',
        defaultValue: ''
    },
    {
        name: 'emailBody',
        label: 'Email Body',
        defaultValue: ''
    },
    {
        name: 'recipients',
        label: 'Recipient List',
        defaultValue: ['']
    }
];

export interface SurveyFormValue {
    title: string;
    subject: string;
    emailBody: string;
    recipients: string[];
}

const SurveyInnerForm: React.SFC<FormikProps<SurveyFormValue>> = (props: FormikProps<SurveyFormValue>) => {
    const { isSubmitting } = props;

    const fieldsEl = fields.map(field => {
        return (
            (typeof props.values[field.name] === 'string' && (
                <Field key={field.label} name={field.name} label={field.label} component={SurveyField} />
            )) ||
            (Array.isArray(props.values[field.name]) && (
                <FieldArray
                    key={field.label}
                    name={field.name}
                    render={fieldArrayProps => {
                        return <SurveyFieldArray label={field.label} name={field.name} {...fieldArrayProps} />;
                    }}
                />
            ))
        );
    });

    return (
        <Form className={styles.surveyForm}>
            {fieldsEl}
            <RouterButton text="Cancel" className={[styles.button, styles.cancel].join(' ')} to="/dashboard" />
            <Button
                className={[styles.button, styles.submit].join(' ')}
                text="Next"
                type="submit"
                disabled={isSubmitting}
            />
        </Form>
    );
};

interface SurveyFormProps extends React.FormHTMLAttributes<{}> {
    onFormSubmit: (values) => void;
    values?: SurveyFormValue;
}

export const SurveyForm = withFormik<SurveyFormProps, SurveyFormValue>({
    mapPropsToValues: props => {
        let values = {};
        fields.forEach(field => {
            values[field.name] = (props.values && props.values[field.name]) || field.defaultValue;
        });
        return values as SurveyFormValue;
    },
    validationSchema: yup.object().shape({
        title: yup.string().required('this field is required'),
        subject: yup.string().required('this field is required'),
        emailBody: yup.string().required('this field is required'),
        recipients: yup
            .array(
                yup
                    .string()
                    .required('must be an email')
                    .email('must be an email')
            )
            .required('must have at least one recipient')
    }),
    handleSubmit: (values: SurveyFormValue, { props, setSubmitting }) => {
        setSubmitting(false);
        props.onFormSubmit(values);
    }
})(SurveyInnerForm);
```
