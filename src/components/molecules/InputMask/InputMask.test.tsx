import { render, screen } from '@/utils/test-utils';

import '@testing-library/jest-dom';

import { input } from '@testing-library/user-event/dist/cjs/event/input.js';
import InputMask from './InputMask';

test('render correctly InputMask', async () => {
  render(<InputMask data-testid="InputMask" label="Label" helperText="Aqui" name='input' />)

  expect(input).toBeDefined()
  expect(screen.getByText('Label')).toBeDefined()
  expect(screen.getByText('Aqui')).toBeDefined()
})
