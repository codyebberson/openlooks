import { Component } from 'solid-js';
import { JSX } from 'solid-js/jsx-runtime';
import { cx } from '../utils';
import styles from './Header.module.css';

export interface HeaderProps {
  class?: string;
  children: JSX.Element;
}

export const Header: Component<HeaderProps> = (props: HeaderProps): JSX.Element => {
  return <header class={cx(styles.header, props.class)}>{props.children}</header>;
};
