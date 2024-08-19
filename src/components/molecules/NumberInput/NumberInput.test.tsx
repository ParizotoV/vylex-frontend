import { render, screen } from '@/utils/test-utils';

import '@testing-library/jest-dom';

import { input } from '@testing-library/user-event/dist/cjs/event/input.js';
import NumberInput from './NumberInput';

test('render correctly NumberInput', async () => {
  render(<NumberInput data-testid="InputMask" label="Label" helperText="Aqui" name='input' />)

  expect(input).toBeDefined()
  expect(screen.getByText('Label')).toBeDefined()
  expect(screen.getByText('Aqui')).toBeDefined()
})
