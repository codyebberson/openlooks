import { Component, createSignal, JSX } from 'solid-js';
import { Burger } from '../lib/index';

export const BurgerDemo: Component = (): JSX.Element => {
  const [opened, setOpened] = createSignal(false);
  return <Burger opened={opened()} onClick={() => setOpened((o) => !o)} style={{ '--size': '28px' }} />;
};
