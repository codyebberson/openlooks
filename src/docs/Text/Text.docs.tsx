import { Component, JSX } from 'solid-js';
import { Text, Title } from '../../index';
import { Configurator, ConfiguratorConfig } from '../Configurator/Configurator';
import { DocPage } from '../DocPage/DocPage';

const config: ConfiguratorConfig = {
  component: Text,
  props: [
    {
      name: 'color',
      type: 'color',
      label: 'Color',
      defaultValue: 'black',
    },
    {
      name: 'size',
      type: 'select',
      label: 'Size',
      data: ['xs', 'sm', 'md', 'lg', 'xl'],
      defaultValue: 'sm',
    },
    {
      name: 'weight',
      type: 'select',
      label: 'Weight',
      data: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
      defaultValue: '400',
    },
    {
      name: 'children',
      type: 'string',
      label: 'Children',
      defaultValue: 'Settings',
    },
  ],
};

export const TextDocs: Component = (): JSX.Element => (
  <DocPage
    title="Text"
    subtitle="Display text and links with theme styles"
    usage={
      <div>
        <Title order={2}>Usage</Title>
        <Configurator config={config} />
      </div>
    }
  />
);
