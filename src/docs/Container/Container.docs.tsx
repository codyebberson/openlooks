import { Component, JSX } from 'solid-js';
import { Anchor } from '../../index';
import { DocPage } from '../DocPage/DocPage';

export const ContainerDocs: Component = (): JSX.Element => (
  <DocPage
    title="Container"
    subtitle="Center content horizontally with predefined max-width"
    usage={
      <div>
        <Anchor href="https://www.medplum.com">Medplum</Anchor>
      </div>
    }
  />
);
