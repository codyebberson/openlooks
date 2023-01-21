import { Accessor, Component, createContext, createSignal, JSX, Setter, useContext } from 'solid-js';
import { Tab, TabProps } from './Tab';
import { TabsPanel, TabsPanelProps } from './TabPanel';
import { TabsList, TabsListProps } from './TabsList';

export interface TabsProps {
  value?: string;
  onTabChange?: (name: string) => void;
  children: JSX.Element;
}

export interface TabContextValue {
  tabsValue: Accessor<string | undefined>;
  setTabsValue: Setter<string | undefined>;
}

const TabContext = createContext<TabContextValue>();

export function useTabsContext(): TabContextValue {
  return useContext(TabContext) as TabContextValue;
}

export type TabsComponent = Component<TabsProps> & {
  List: Component<TabsListProps>;
  Tab: Component<TabProps>;
  Panel: Component<TabsPanelProps>;
};

export const Tabs: TabsComponent = (props: TabsProps): JSX.Element => {
  const [tabsValue, setTabsValue] = createSignal(props.value);
  const contextValue = { tabsValue, setTabsValue };
  return <TabContext.Provider value={contextValue}>{props.children}</TabContext.Provider>;
};

Tabs.List = TabsList;
Tabs.Tab = Tab;
Tabs.Panel = TabsPanel;
