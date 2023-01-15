import { Component, JSX } from 'solid-js';
import { Tabs } from '../../index';
import { DocPage } from '../DocPage/DocPage';

export const TabsDocs: Component = (): JSX.Element => (
  <DocPage
    title="Tabs"
    subtitle="Center content horizontally with predefined max-width"
    usage={
      <div>
        <Tabs value="gallery">
          <Tabs.List>
            <Tabs.Tab value="gallery">Gallery</Tabs.Tab>
            <Tabs.Tab value="messages">Messages</Tabs.Tab>
            <Tabs.Tab value="settings">Settings</Tabs.Tab>
          </Tabs.List>
          <Tabs.Panel value="gallery">Gallery tab content</Tabs.Panel>
          <Tabs.Panel value="messages">Messages tab content</Tabs.Panel>
          <Tabs.Panel value="settings">Settings tab content</Tabs.Panel>
        </Tabs>
      </div>
    }
  />
);
