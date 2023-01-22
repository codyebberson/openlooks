import { Component, JSX } from 'solid-js';
import { Configurator } from '../components/Configurator/Configurator';
import { Text } from '../lib/index';

export const TextDemo: Component = (): JSX.Element => (
  <Configurator
    config={{
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
    }}
  />
);
