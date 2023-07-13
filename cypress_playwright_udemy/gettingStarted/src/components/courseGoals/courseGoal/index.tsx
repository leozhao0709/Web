import React from 'react';
import classNames from 'classnames';
import styles from './index.module.scss';

interface CourseGoalProps extends React.HTMLAttributes<HTMLLIElement> {
  text: string;
  icon: React.ReactNode;
}

const CourseGoal: React.FC<CourseGoalProps> = (props: CourseGoalProps) => {
  const { className, text, icon, ...restProps } = props;

  return (
    <li {...restProps} className={classNames(styles.goal, className)}>
      <span className={styles.icon}>{icon}</span>
      <span>{text}</span>
    </li>
  );
};

CourseGoal.defaultProps = {};

export default React.memo(CourseGoal);
