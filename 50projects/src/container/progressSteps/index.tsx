import React, { useId } from 'react';
import classNames from 'classnames';
import styles from './index.module.scss';
import useDarkBg from '../../hooks/useDarkBg';

interface ProgressStepsProps extends React.HTMLAttributes<HTMLDivElement> {
  stepsCount?: number;
}

const ProgressSteps: React.FC<ProgressStepsProps> = (
  props: ProgressStepsProps
) => {
  const { className, stepsCount, ...restProps } = props;
  const [currentStep, setCurrentStep] = React.useState(1);
  const progress = (currentStep - 1) / (stepsCount! - 1);

  useDarkBg();

  return (
    <div {...restProps} className={classNames(styles.ProgressSteps, className)}>
      <div className={styles.stepsGroup}>
        <div className={styles.progressBar}>
          <div
            className={styles.progress}
            style={{ width: `${progress * 100}%` }}
          />
        </div>
        <div className={styles.steps}>
          {new Array(stepsCount).fill(0).map((_, index) => {
            return (
              <div
                className={classNames(styles.step, {
                  [styles.active]: index + 1 <= currentStep,
                })}
                key={useId()}
              >
                {index + 1}
              </div>
            );
          })}
        </div>
      </div>
      <div className={classNames(styles.btnGroup)}>
        <button
          className={classNames(styles.btn)}
          disabled={currentStep === 1}
          onClick={() => setCurrentStep(currentStep - 1)}
        >
          Prev
        </button>
        <button
          onClick={() => setCurrentStep(currentStep + 1)}
          className={classNames(styles.btn)}
          disabled={currentStep === stepsCount}
        >
          Next
        </button>
      </div>
    </div>
  );
};

ProgressSteps.defaultProps = {
  stepsCount: 6,
};

export default React.memo(ProgressSteps);
