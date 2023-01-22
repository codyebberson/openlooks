import { Component, JSX } from 'solid-js';
import { Configurator } from '../components/Configurator/Configurator';
import { TextInput } from '../lib/index';

export const TextInputDemo: Component = (): JSX.Element => (
  <Configurator
    config={{
      component: TextInput,
      props: [
        {
          name: 'placeholder',
          type: 'string',
          label: 'Placeholder',
          defaultValue: 'Your name',
        },
        {
          name: 'label',
          type: 'string',
          label: 'Label',
          defaultValue: 'Full name',
        },
        {
          name: 'description',
          type: 'string',
          label: 'Description',
          defaultValue: '',
        },
        {
          name: 'error',
          type: 'string',
          label: 'Error',
          defaultValue: '',
        },
        {
          name: 'variant',
          type: 'select',
          label: 'Variant',
          data: ['', 'filled', 'unstyled'],
        },
      ],
    }}
  />
);
