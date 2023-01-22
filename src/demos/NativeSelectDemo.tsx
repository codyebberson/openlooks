import { Component, JSX } from 'solid-js';
import { Configurator } from '../components/Configurator/Configurator';
import { NativeSelect } from '../lib/index';

export const NativeSelectDemo: Component = (): JSX.Element => (
  <Configurator
    config={{
      component: NativeSelect,
      props: [
        {
          name: 'label',
          type: 'string',
          label: 'Label',
          defaultValue: 'Select your favorite framework/library',
        },
        {
          name: 'description',
          type: 'string',
          label: 'Description',
          defaultValue: 'This is anonymous',
        },
        {
          name: 'error',
          type: 'string',
          label: 'Error',
          defaultValue: '',
        },
        {
          name: 'data',
          type: 'hidden',
          label: 'Data',
          defaultValue: ['React', 'Vue', 'Angular', 'Solid'],
        },
      ],
    }}
  />
);
