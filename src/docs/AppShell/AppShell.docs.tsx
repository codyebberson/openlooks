import { Component, JSX } from 'solid-js';
import { Title } from '../../index';
import { DocPage } from '../DocPage/DocPage';
import styles from '../DocPage/DocPage.module.css';

export const AppShellDocs: Component = (): JSX.Element => (
  <DocPage
    title="AppShell"
    subtitle="Responsive shell for your application with header and navbar"
    usage={
      <div>
        <Title order={2}>Usage</Title>
        <p class={styles.p}>
          AppShell is a layout component that can be used to create a common Header - Navbar - Footer - Aside - Content
          layout pattern. AppShell, Header, Footer, Aside and Navbar components include bare minimum default styles to
          simplify customization.
        </p>
      </div>
    }
  />
);
