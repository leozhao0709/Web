import React from 'react';
import classNames from 'classnames';
import {
  GrInstall,
  GrEdit,
  GrTerminal,
  GrResources,
  GrUserExpert,
  GrKey,
} from 'react-icons/gr';
import styles from './index.module.scss';
import CourseGoal from './courseGoal';

const GOALS = [
  {
    icon: <GrInstall />,
    text: 'Learn how to install & start Cypress',
  },
  {
    icon: <GrEdit />,
    text: 'Learn how to write tests with Cypress',
  },
  {
    icon: <GrTerminal />,
    text: 'Understand the core Cypress features & commands',
  },
  {
    icon: <GrResources />,
    text: 'Customize & configure Cypress for your requirements',
  },
  {
    icon: <GrUserExpert />,
    text: 'Learn how to write good tests & follow best practices',
  },
  {
    icon: <GrKey />,
    text: 'Dive into more complex problems - e.g., user authentication testing',
  },
];

interface CourseGoalsProps extends React.HTMLAttributes<HTMLUListElement> {}

const CourseGoals: React.FC<CourseGoalsProps> = (props: CourseGoalsProps) => {
  const { className, ...restProps } = props;

  return (
    <ul {...restProps} className={classNames(styles.goals, className)}>
      {GOALS.map((goal) => (
        <CourseGoal key={goal.text} {...goal} />
      ))}
    </ul>
  );
};

CourseGoals.defaultProps = {};

export default React.memo(CourseGoals);
