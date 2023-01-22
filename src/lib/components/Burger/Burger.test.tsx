import { render } from '@solidjs/testing-library';
import { Burger } from './Burger';

describe('<Burger />', () => {
  test('it will render an text input and a button', () => {
    const { getByText } = render(() => <Burger>Test</Burger>);
    // expect(getByPlaceholderText('new todo here')).not.toBeNull();
    expect(getByText('Test')).not.toBeNull();
  });
});
