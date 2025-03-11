<script setup lang="ts">
import {defineProps, ref} from 'vue';

const props = defineProps({
  success: {
    type: Boolean,
    default: true,
  }
});

const statusMessage = ref<string>('');
const loading = ref<boolean>(false);
const isError = ref<boolean>(false);

function calculateAsyncData () {
  loading.value = true;
  return new Promise<{ status: string }>((resolve, reject) => {
    setTimeout(() => {
      props.success
        ? resolve({ status: 'success' })
        : reject({ status: 'failed' })
    }, 3000)
  }).then((data) => {
    statusMessage.value = data.status;
  }).catch((data) => {
    isError.value = true;
    statusMessage.value = data.status;
  }).finally(() => {
    loading.value = false;
  })
}
</script>

<template>
  <div style="border: 1px black solid; padding: 10px">
    <h4><em>This test is created to show knowledge about testing async code. </em></h4>
    <div>Status: <span v-text="statusMessage"></span></div>
    <div v-if="statusMessage">Is Error: <span v-text="isError ? 'YES' : 'NO'"></span></div>
    <div>
      <button @click="calculateAsyncData">Get status</button>
    </div>
    <div>Is loading <span v-text="loading ? 'YES' : 'NO'"></span></div>
    <div>
      <pre style="background: #cbd5e0">
  describe('Testing calculateAsyncData function', () => {
  jest.useFakeTimers();

  let wrapper;

  beforeEach(() => {
    wrapper = mount(TestAsyncCode, {
      props: {
        success: true,
      }
    });
  });

  it('Test if calculateAsyncData works correct.', async () => {
    const methodSpy = jest.spyOn(wrapper.vm, 'calculateAsyncData');

    const promise = wrapper.vm.calculateAsyncData();

    expect(wrapper.vm.loading).toBe(true);

    jest.runAllTimers();

    await promise;

    expect(wrapper.vm.isError).toBe(false);
    expect(wrapper.vm.statusMessage).toBe('success');
    expect(wrapper.vm.loading).toBe(false);
    expect(methodSpy).toHaveBeenCalled();
  });

  it('should set statusMessage to "failed" and isError to true on failure', async () => {
    await wrapper.setProps({ success: false });

    const methodSpy = jest.spyOn(wrapper.vm, 'calculateAsyncData');

    const promise = wrapper.vm.calculateAsyncData();

    expect(wrapper.vm.loading).toBe(true);

    jest.runAllTimers();

    await promise;

    expect(wrapper.vm.isError).toBe(true);
    expect(wrapper.vm.statusMessage).toBe('failed');
    expect(wrapper.vm.loading).toBe(false);
    expect(methodSpy).toHaveBeenCalled();
  });
});
      </pre>
    </div>
  </div>
</template>

<style scoped>

</style>