import React from 'react';
import classNames from 'classnames';
import styles from './index.module.scss';

interface FormInputWaveProps extends React.HTMLAttributes<HTMLDivElement> {}

const FormInputWave: React.FC<FormInputWaveProps> = (
  props: FormInputWaveProps
) => {
  const { className, ...restProps } = props;

  return (
    <div {...restProps} className={classNames(styles.FormInputWave, className)}>
      <div className={styles.formContainer}>
        <h1 className={styles.title}>Please Login</h1>
        <form className={styles.form} action="#">
          <div className={styles.formControl}>
            <input
              id="email"
              type="text"
              className={styles.textInput}
              required
            />
            <label htmlFor="email">
              <span>E</span>
              <span>m</span>
              <span>a</span>
              <span>i</span>
              <span>l</span>
            </label>
          </div>
          <div className={styles.formControl}>
            <input
              id="password"
              type="password"
              className={styles.textInput}
              required
            />
            <label htmlFor="password">
              <span>P</span>
              <span>a</span>
              <span>s</span>
              <span>s</span>
              <span>w</span>
              <span>o</span>
              <span>r</span>
              <span>d</span>
            </label>
          </div>
          <button className={styles.submitBtn} type="submit">
            Login
          </button>
        </form>
        <div className={styles.register}>
          Do not have an account?{' '}
          <a href="#" className={styles.registerLink}>
            Register
          </a>
        </div>
      </div>
    </div>
  );
};

FormInputWave.defaultProps = {};

export default React.memo(FormInputWave);
