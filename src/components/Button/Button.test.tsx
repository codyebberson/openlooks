import { render } from '@solidjs/testing-library';
import { Button } from './Button';

describe('<Button />', () => {
  test('it will render an text input and a button', () => {
    const { getByText } = render(() => <Button>Test</Button>);
    // expect(getByPlaceholderText('new todo here')).not.toBeNull();
    expect(getByText('Test')).not.toBeNull();
  });
});
