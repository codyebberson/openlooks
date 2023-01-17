import { Component, JSX } from 'solid-js';
import { Tabs, Text } from '../../index';
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
          <Tabs.Panel value="gallery">
            <Text>Gallery tab content</Text>
          </Tabs.Panel>
          <Tabs.Panel value="messages">
            <Text>Messages tab content</Text>
          </Tabs.Panel>
          <Tabs.Panel value="settings">
            <Text>Settings tab content</Text>
          </Tabs.Panel>
        </Tabs>
      </div>
    }
  />
);
