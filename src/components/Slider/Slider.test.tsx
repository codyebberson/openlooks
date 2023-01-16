import { render } from '@solidjs/testing-library';
import { Slider } from './Slider';

describe('<Slider />', () => {
  test('it will render an text input and a button', () => {
    const { getByText } = render(() => <Slider>Test</Slider>);
    // expect(getByPlaceholderText('new todo here')).not.toBeNull();
    expect(getByText('Test')).not.toBeNull();
  });
});
