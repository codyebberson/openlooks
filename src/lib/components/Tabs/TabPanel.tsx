import { Component, JSX, Show } from 'solid-js';
import { useTabsContext } from './Tabs';

export interface TabsPanelProps {
  value: string;
  children: JSX.Element;
}

export const TabsPanel: Component<TabsPanelProps> = (props: TabsPanelProps): JSX.Element => {
  const { tabsValue } = useTabsContext();
  return (
    <Show when={props.value === tabsValue()}>
      <div role="tabpanel">{props.children}</div>
    </Show>
  );
};
