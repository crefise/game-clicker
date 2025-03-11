<script setup lang="ts">
import {ref} from "vue";

const age = ref<string | null>(null);
let message = ref<string>('');

function calculating () {
  setTimeout(setMessage, 1000);
}

function setMessage () {
  if (age.value) {
    message.value = `In 5 years you will be ${parseInt(age.value) + 5} years old`
  }
}
</script>

<template>
  <div style="border: 1px black solid; padding: 10px">
    <div>
      <h4><em>This test is created to show knowledge about base jest methods such as mount, find, trigger events, work with DOM </em></h4>
    </div>
    <div>
      <h3>What will in 5 years?</h3>
      <input v-model="age" placeholder="Enter your current age...">
      <button @click="calculating">Calculate age!</button>
      <span v-text="message" />
    </div>
    <div>
      <pre style="background: #cbd5e0">
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
      </pre>
    </div>
  </div>
</template>

<style scoped>

</style>