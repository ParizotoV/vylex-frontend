import { onlyNumber } from './OnlyNumber'

describe('OnlyNumber Function', () => {
  it('convert correctly', () => {
    const converted = onlyNumber('dwasdwadwa1234567891465')

    expect(converted).toBe('1234567891465')
  })
})
