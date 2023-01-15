import { A, Route, Routes } from '@solidjs/router';
import { Component } from 'solid-js';
import { JSX } from 'solid-js/jsx-runtime';
import { Anchor } from '../components/Anchor/Anchor';
import { AppShell } from '../components/AppShell/AppShell';
import { Group } from '../components/Group/Group';
import { Header } from '../components/Header/Header';
import { Navbar } from '../components/Navbar/Navbar';
import { TextInput } from '../components/TextInput/TextInput';
import { AnchorDocs } from './Anchor/Anchor.docs';
import styles from './App.module.css';
import { ButtonDocs } from './Button/Button.docs';
import { ContainerDocs } from './Container/Container.docs';
import { NativeSelectDocs } from './NativeSelect/NativeSelect.docs';
import { StackDocs } from './Stack/Stack.docs';
import { TableDocs } from './Table/Table.docs';
import { TabsDocs } from './Tabs/Tabs.docs';
import { TextInputDocs } from './TextInput/TextInput.docs';

const sections = [
  {
    name: 'Layout',
    components: ['AppShell', 'Container', 'Group', 'Header', 'Navbar', 'Stack'],
  },
  {
    name: 'Buttons',
    components: ['Button'],
  },
  {
    name: 'Inputs',
    components: ['NativeSelect', 'TextInput'],
  },
  {
    name: 'Navigation',
    components: ['Anchor', 'Tabs'],
  },
  {
    name: 'Typography',
    components: ['Table'],
  },
];

const MyHeader: Component = (): JSX.Element => (
  <Header>
    <div>
      <Anchor href="/">OpenLooks</Anchor>
    </div>
    <Group>
      <TextInput placeholder="Search" />
    </Group>
  </Header>
);

const MyNavbar: Component = (): JSX.Element => (
  <Navbar>
    <div class={styles.navlinks}>
      {sections.map((s) => (
        <>
          <div class={styles.navSection}>{s.name}</div>
          {s.components.map((c) => (
            <A class={styles.navlink} activeClass={styles.navlinkActive} href={`/${c.toLowerCase()}`}>
              {c}
            </A>
          ))}
        </>
      ))}
    </div>
  </Navbar>
);

export const App: Component = (): JSX.Element => {
  return (
    <AppShell header={<MyHeader />} navbar={<MyNavbar />}>
      <Routes>
        <Route path="/anchor" component={AnchorDocs} />
        <Route path="/button" component={ButtonDocs} />
        <Route path="/container" component={ContainerDocs} />
        <Route path="/nativeselect" component={NativeSelectDocs} />
        <Route path="/stack" component={StackDocs} />
        <Route path="/tabs" component={TabsDocs} />
        <Route path="/textinput" component={TextInputDocs} />
        <Route path="/table" component={TableDocs} />
        <Route path="/" element={<div>This site was made with Solid</div>} />
      </Routes>
    </AppShell>
  );
};
