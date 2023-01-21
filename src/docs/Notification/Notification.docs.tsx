import { Component, JSX } from 'solid-js';
import { Button, Group, showNotification, Title } from '../../lib/index';
import { DocPage } from '../DocPage/DocPage';

export const NotificationDocs: Component = (): JSX.Element => (
  <DocPage
    title="Notification"
    subtitle="OpenLooks notifications system"
    usage={
      <div>
        <Title order={2}>Demo</Title>
        <Group
          style={{
            width: '600px',
            'flex-flow': 'row wrap',
            'align-items': 'center',
            'justify-content': 'center',
            gap: '16px',
          }}
        >
          <Button
            variant="outline"
            color="blue"
            onClick={() =>
              showNotification({
                color: 'blue',
                title: 'Default notification',
                message: 'Hey there, your code is awesome! 🤥',
              })
            }
          >
            Default
          </Button>
          <Button
            variant="outline"
            color="teal"
            onClick={() =>
              showNotification({
                color: 'teal',
                title: 'You did great',
                message: 'Data was saved',
              })
            }
          >
            Teal with icon
          </Button>
          <Button
            variant="outline"
            color="red"
            onClick={() =>
              showNotification({
                color: 'red',
                title: 'Bummer!',
                message: 'You have no right to do this',
              })
            }
          >
            Red color
          </Button>
          <Button
            variant="outline"
            color="grape"
            onClick={() =>
              showNotification({
                color: 'grape',
                title: 'I will never close',
                message: 'unless you click X',
                autoClose: false,
              })
            }
          >
            Never closes automatically
          </Button>
          <Button
            variant="outline"
            color="indigo"
            onClick={() =>
              showNotification({
                color: 'indigo',
                title: 'Custom autoClose timeout',
                message: 'Notification will be closed in 10 seconds',
              })
            }
          >
            10 seconds timeout
          </Button>
          <Button
            variant="outline"
            color="cyan"
            onClick={() =>
              showNotification({
                color: 'cyan',
                title: 'Loading your data',
                message: 'Data will be loaded in 3 seconds, you cannot close this yet',
                disallowClose: true,
                onClose: () =>
                  showNotification({
                    color: 'teal',
                    title: 'Data was loaded',
                    message: 'Notification will close in 3 seconds, you can close this notification now',
                  }),
              })
            }
          >
            Loading state and update
          </Button>
        </Group>
      </div>
    }
  />
);
