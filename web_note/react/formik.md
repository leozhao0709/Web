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

interface SurveyFieldProps extends FieldProps {
    label: string;
}

export const SurveyField: React.SFC<SurveyFieldProps> = ({ field, form: { touched, errors }, ...props }) => {
    return (
        <>
            <label htmlFor={props.label}>{props.label}</label>
            <input id={props.label} type="text" {...field} {...props} />
        </>
    );
};

SurveyField.defaultProps = {};
```

```tsx
import * as React from 'react';
import { FormikProps, Form, Field, withFormik } from 'formik';
import { SurveyField } from './SurverField/SurveyField';

interface SurveyFormProps extends React.HtmlHTMLAttributes<{}> {}

interface SuveryFormValue {}

const SurveyInnerForm: React.SFC<FormikProps<SuveryFormValue>> = (props: FormikProps<SuveryFormValue>) => {
    const { isSubmitting } = props;
    return (
        <Form>
            <Field name="title" label="label" type="email" component={SurveyField} />
            <button type="submit" disabled={isSubmitting}>
                Submit
            </button>
        </Form>
    );
};

export const SurveyForm = withFormik<SurveyFormProps, SuveryFormValue>({
    mapPropsToValues: props => {
        return {
            title: ''
        };
    },
    handleSubmit: (values: SuveryFormValue, { setSubmitting }) => {
        // tslint:disable-next-line:no-console
        console.log(values);
        setSubmitting(false);
    }
})(SurveyInnerForm);
```
