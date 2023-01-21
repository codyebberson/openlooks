import { Component, JSX } from 'solid-js';
import styles from './Container.module.css';

export interface ContainerProps {
  children: JSX.Element;
  style?: JSX.CSSProperties;
}

export const Container: Component<ContainerProps> = (props: ContainerProps): JSX.Element => {
  return (
    <div class={styles.container} style={props.style}>
      {props.children}
    </div>
  );
};
