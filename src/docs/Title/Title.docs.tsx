import { Component, JSX } from 'solid-js';
import { Title } from '../../lib/index';
import { Configurator, ConfiguratorConfig } from '../Configurator/Configurator';
import { DocPage } from '../DocPage/DocPage';

const config: ConfiguratorConfig = {
  component: Title,
  props: [
    {
      name: 'color',
      type: 'color',
      label: 'Color',
      defaultValue: 'black',
    },
    {
      name: 'order',
      type: 'select',
      label: 'Order',
      data: ['1', '2', '3', '4', '5', '6'],
      defaultValue: '1',
    },
    {
      name: 'children',
      type: 'string',
      label: 'Children',
      defaultValue: 'Settings',
    },
  ],
};

export const TitleDocs: Component = (): JSX.Element => (
  <DocPage
    title="Title"
    subtitle="h1-h6 headings"
    usage={
      <div>
        <Title order={2}>Usage</Title>
        <Configurator config={config} />
        <Title order={2}>Examples</Title>
        <div style={{ border: '1px solid var(--oc-gray-3)', 'border-radius': '4px', padding: '16px' }}>
          <Title order={1}>This is h1 title</Title>
          <Title order={2}>This is h2 title</Title>
          <Title order={3}>This is h3 title</Title>
          <Title order={4}>This is h4 title</Title>
          <Title order={5}>This is h5 title</Title>
          <Title order={6}>This is h6 title</Title>
        </div>
      </div>
    }
  />
);
