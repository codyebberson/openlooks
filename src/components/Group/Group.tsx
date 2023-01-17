import { Component } from 'solid-js';
import { JSX } from 'solid-js/jsx-runtime';
import styles from './Group.module.css';

export interface GroupProps {
  children: JSX.Element;
  style?: JSX.CSSProperties;

  // spacing="xs" grow noWrap
  spacing?: string;
  grow?: boolean;
  noWrap?: boolean;
}

export const Group: Component<GroupProps> = (props: GroupProps): JSX.Element => {
  return (
    <div class={styles.group} style={props.style}>
      {props.children}
    </div>
  );
};
