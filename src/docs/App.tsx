import { A, Route, Routes } from '@solidjs/router';
import { IconShield } from '@tabler/icons-solidjs';
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
import { AppShellDocs } from './AppShell/AppShell.docs';
import { ButtonDocs } from './Button/Button.docs';
import { ContainerDocs } from './Container/Container.docs';
import { Logo } from './Logo';
import { NativeSelectDocs } from './NativeSelect/NativeSelect.docs';
import { NotificationDocs } from './Notification/Notification.docs';
import { SliderDocs } from './Slider/Slider.docs';
import { StackDocs } from './Stack/Stack.docs';
import { TableDocs } from './Table/Table.docs';
import { TabsDocs } from './Tabs/Tabs.docs';
import { TextDocs } from './Text/Text.docs';
import { TextInputDocs } from './TextInput/TextInput.docs';
import { TitleDocs } from './Title/Title.docs';

const sections = [
  {
    name: 'Layout',
    components: [
      'AppShell',
      'AspectRatio',
      'Center',
      'Container',
      'Flex',
      'Grid',
      'Group',
      'MediaQuery',
      'SimpleGrid',
      'Space',
      'Stack',
    ],
  },
  {
    name: 'Buttons',
    components: ['ActionIcon', 'Button', 'CloseButton', 'CopyButton', 'FileButton', 'UnstyledButton'],
  },
  {
    name: 'Inputs',
    components: ['NativeSelect', 'Slider', 'TextInput'],
  },
  {
    name: 'Navigation',
    components: ['Anchor', 'Tabs'],
  },
  {
    name: 'Data display',
    components: [
      'Accordion',
      'Avatar',
      'BackgroundImage',
      'Badge',
      'Card',
      'ColorSwatch',
      'Image',
      'Indicator',
      'Kbd',
      'Spoiler',
      'ThemeIcon',
      'Timeline',
    ],
  },
  {
    name: 'Typography',
    components: ['Blockquote', 'Code', 'Highlight', 'List', 'Mark', 'Table', 'Text', 'Title'],
  },
  {
    name: 'Feedback',
    components: ['Alert', 'Loader', 'Notification', 'Progress', 'RingProgress', 'Skeleton'],
  },
  {
    name: 'Miscellaneous',
    components: ['Box', 'Collapse', 'Divider', 'FocusTrap', 'Paper', 'Portal', 'ScrollArea', 'Transition'],
  },
];

const MyHeader: Component = (): JSX.Element => (
  <Header>
    <div style={{ display: 'flex', 'align-items': 'center', gap: '8px' }}>
      <Logo />
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
          <div class={styles.section}>{s.name}</div>
          {s.components.map((c) => (
            <A class={styles.navlink} activeClass={styles.active} href={`/${c.toLowerCase()}`}>
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
        <Route path="/appshell" component={AppShellDocs} />
        <Route path="/button" component={ButtonDocs} />
        <Route path="/container" component={ContainerDocs} />
        <Route path="/nativeselect" component={NativeSelectDocs} />
        <Route path="/notification" component={NotificationDocs} />
        <Route path="/slider" component={SliderDocs} />
        <Route path="/stack" component={StackDocs} />
        <Route path="/table" component={TableDocs} />
        <Route path="/tabs" component={TabsDocs} />
        <Route path="/text" component={TextDocs} />
        <Route path="/textinput" component={TextInputDocs} />
        <Route path="/title" component={TitleDocs} />
        <Route
          path="/"
          element={
            <div>
              <p>This site was made with Solid</p>
              <IconShield />
            </div>
          }
        />
      </Routes>
    </AppShell>
  );
};
