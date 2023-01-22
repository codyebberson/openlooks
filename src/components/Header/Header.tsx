import { A } from '@solidjs/router';
import { Component, JSX } from 'solid-js';
import { Burger, Group, Header as BaseHeader, TextInput } from '../../lib/index';
import { LogoWithText } from '../LogoWithText';

import styles from './Header.module.css';

export interface HeaderProps {
  opened: boolean;
  toggleOpened: () => void;
}

export const Header: Component<HeaderProps> = (props: HeaderProps): JSX.Element => {
  return (
    <BaseHeader>
      <Burger class={styles.burger} opened={props.opened} onClick={props.toggleOpened} />
      <A href="/" class={styles.logo}>
        <LogoWithText />
      </A>
      <Group>
        <TextInput placeholder="Search" />
      </Group>
    </BaseHeader>
  );
};
