<script setup lang="ts">
</script>

<template>
  <div style="border: 1px black solid; padding: 10px">
    <h4><em>This test is created to show knowledge about mocking </em></h4>
    <div>
    </div>
    <div>
      <pre style="background: #cbd5e0">
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
      </pre>
    </div>
  </div>
</template>

<style scoped>

</style>