import { render } from '@solidjs/testing-library';
import { Anchor } from './Anchor';

describe('<Anchor />', () => {
  test('it will render an text input and a button', () => {
    const { getByText } = render(() => <Anchor href="https://example.com">Test</Anchor>);
    // expect(getByPlaceholderText('new todo here')).not.toBeNull();
    expect(getByText('Test')).not.toBeNull();
  });
});
