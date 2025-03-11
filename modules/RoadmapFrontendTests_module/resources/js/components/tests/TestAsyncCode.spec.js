import { mount } from '@vue/test-utils';
import TestAsyncCode from '../TestAsyncCode.vue';

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
