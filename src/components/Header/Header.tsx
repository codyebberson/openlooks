import { Component } from 'solid-js';
import { JSX } from 'solid-js/jsx-runtime';
import styles from './Header.module.css';

export interface HeaderProps {
  children: JSX.Element;
}

export const Header: Component<HeaderProps> = (props: HeaderProps): JSX.Element => {
  return <header class={styles.header}>{props.children}</header>;
};
