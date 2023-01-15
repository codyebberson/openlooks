import { Component, JSX } from 'solid-js';
import styles from './Stack.module.css';

export interface StackProps {
  children: JSX.Element;
}

export const Stack: Component<StackProps> = (props: StackProps): JSX.Element => {
  return <div class={styles.stack}>{props.children}</div>;
};
