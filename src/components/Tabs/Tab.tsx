import { JSX } from 'solid-js';
import { cx, killEvent } from '../utils';
import { useTabsContext } from './Tabs';

import styles from './Tab.module.css';

export interface TabProps {
  value: string;
  class?: string;
  children: JSX.Element;
}

export const Tab: Component<TabProps> = (props: TabProps): JSX.Element => {
  const { tabsValue, setTabsValue } = useTabsContext();

  function clickHandler(e: MouseEvent): void {
    killEvent(e);
    setTabsValue(props.value);
  }

  return (
    <a
      href={`#${props.value}`}
      role="tab"
      aria-selected={props.value === tabsValue()}
      class={cx(styles.tab, props.class)}
      onClick={clickHandler}
      onAuxClick={clickHandler}
    >
      {props.children}
    </a>
  );
};
