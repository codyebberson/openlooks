import { Component, JSX } from 'solid-js';
import { Anchor } from '../../index';
import { DocPage } from '../DocPage/DocPage';

export const StackDocs: Component = (): JSX.Element => (
  <DocPage
    title="Stack"
    subtitle="Center content horizontally with predefined max-width"
    usage={
      <div>
        <Anchor href="https://www.medplum.com">Medplum</Anchor>
      </div>
    }
  />
);
