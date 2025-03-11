import { mount } from '@vue/test-utils';
import { nextTick } from 'vue';
import SimplePropertiesTest from '../SimplePropertiesTest.vue';

describe('Simple test using fake timers, trigger events', () => {
  jest.useFakeTimers();

  const wrapper = mount(SimplePropertiesTest);

  it('If age calculated correct.', async () => {
    const input = wrapper.find('input');
    await input.setValue('25'); // Set age to 25

    const button = wrapper.find('button');
    await button.trigger('click');

    jest.runAllTimers();

    await nextTick();
    expect(wrapper.text()).toContain('In 5 years you will be 30 years old');
  });

  it('if set message works correct.', async () => {
    wrapper.vm.age = 1;

    wrapper.vm.setMessage()

    expect(wrapper.vm.message).toContain('In 5 years you will be 6 years old');
  });
});