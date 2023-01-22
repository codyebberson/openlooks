import { Component } from 'solid-js';
import { JSX } from 'solid-js/jsx-runtime';
import styles from './AppShell.module.css';

export interface AppShellProps {
  header?: JSX.Element;
  navbar?: JSX.Element;
  children: JSX.Element;
}

export const AppShell: Component<AppShellProps> = (props: AppShellProps): JSX.Element => {
  return (
    <div>
      {props.header}
      <div>
        {props.navbar}
        <main class={styles.main}>{props.children}</main>
      </div>
    </div>
  );
};
