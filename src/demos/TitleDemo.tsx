import { Component, JSX } from 'solid-js';
import { Configurator } from '../components/Configurator/Configurator';
import { Title } from '../lib/index';

export const TitleDemo: Component = (): JSX.Element => (
  <Configurator
    config={{
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
    }}
  />
);
