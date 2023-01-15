import { Component } from 'solid-js';
import { JSX } from 'solid-js/jsx-runtime';
import styles from './Navbar.module.css';

export interface NavbarProps {
  children: JSX.Element;
}

export const Navbar: Component<NavbarProps> = (props: NavbarProps): JSX.Element => {
  return <nav class={styles.nav}>{props.children}</nav>;
};
