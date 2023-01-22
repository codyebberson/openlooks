import { render } from '@solidjs/testing-library';
import { UnstyledButton } from './UnstyledButton';

describe('<UnstyledButton />', () => {
  test('it will render an text input and a button', () => {
    const { getByText } = render(() => <UnstyledButton>Test</UnstyledButton>);
    // expect(getByPlaceholderText('new todo here')).not.toBeNull();
    expect(getByText('Test')).not.toBeNull();
  });
});
