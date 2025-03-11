jest.mock('./api.js', () => ({
  get: jest.fn(() => Promise.resolve('Mocked api.'))
}));

import mockedApi from './api.js';
const realApi = jest.requireActual('./api.js');

describe('Test module mocking', () => {
  it('Test if calculateAsyncData works correct.', async () => {
    expect(await realApi.default.get()).toBe('Real api.')

    expect(await mockedApi.get()).toBe('Mocked api.')

  });
});
