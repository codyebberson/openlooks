import { render } from '@solidjs/testing-library';
import { Text } from './Text';

describe('<Text />', () => {
  test('it will render an text input and a button', () => {
    const { getByText } = render(() => <Text>Test</Text>);
    // expect(getByPlaceholderText('new todo here')).not.toBeNull();
    expect(getByText('Test')).not.toBeNull();
  });
});
