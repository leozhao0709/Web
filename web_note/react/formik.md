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

Note: when using customized component, the component props should extends from `FieldProps`

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

SurveyField.defaultProps = {};
```

```tsx
import * as React from 'react';
import { FormikProps, Form, Field, withFormik } from 'formik';
import { SurveyField } from './SurverField/SurveyField';
import * as yup from 'yup';
import { Button } from 'my-react-story';
import * as styles from './SurveyForm.css';
import { Link } from 'react-router-dom';

const fields: { name: string; label: string; value: string }[] = [
    {
        name: 'title',
        label: 'Campaign Title',
        value: ''
    }
];

interface SurveyFormProps extends React.HtmlHTMLAttributes<{}> {}

interface SurveyFormValue {}

const SurveyInnerForm: React.SFC<FormikProps<SurveyFormValue>> = (props: FormikProps<SurveyFormValue>) => {
    const { isSubmitting } = props;
    const fieldsEl = fields.map(field => (
        <Field key={field.label} name={field.name} label={field.label} component={SurveyField} />
    ));

    return (
        <Form className={styles.surveyForm}>
            {fieldsEl}
            <Link to="/dashboard" className={[styles.button, styles.cancel].join(' ')}>
                Cancel
            </Link>
            <Button
                className={[styles.button, styles.submit].join(' ')}
                text="Next"
                type="submit"
                disabled={isSubmitting}
            />
        </Form>
    );
};

export const SurveyForm = withFormik<SurveyFormProps, SurveyFormValue>({
    mapPropsToValues: props => {
        let values = {};
        fields.forEach(field => {
            values[field.name] = field.value;
        });
        return values;
    },
    validationSchema: yup.object().shape({
        title: yup.string().required('this field is required')
    }),
    handleSubmit: (values: SurveyFormValue, { setSubmitting }) => {
        // tslint:disable-next-line:no-console
        console.log(values);
        setSubmitting(false);
    }
})(SurveyInnerForm);
```
