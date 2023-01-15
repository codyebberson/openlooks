import { Component, JSX } from 'solid-js';
import { cx } from '../utils';
import styles from './TabsList.module.css';

import './TabsList.module.css';

export interface TabsListProps {
  class?: string;
  children: JSX.Element;
}

export const TabsList: Component<TabsListProps> = (props: TabsListProps): JSX.Element => {
  return (
    <div role="tablist" class={cx(styles.tablist, props.class)}>
      {props.children}
    </div>
  );
};
