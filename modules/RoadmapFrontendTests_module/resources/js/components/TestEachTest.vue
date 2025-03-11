<script setup lang="ts">
import { defineProps, type Ref } from 'vue'
import { ref } from "vue";

const props = defineProps({
  power: {
    type: Number,
    required: true,
  },
})

const status: Ref<string> = ref('');

switch (true) {
  case props.power > 100:
    status.value = 'You are super powerful!';
    break;
  case props.power > 80:
    status.value = 'You are just powerful!';
    break;
  case props.power > 60:
    status.value = 'You are strong!';
    break;
  case props.power > 40:
    status.value = 'You are not strong!';
    break;
  case props.power > 0:
    status.value = 'You are bad!';
    break;
  default:
    status.value = 'You are dead(';
    break;

}
</script>

<template>
  <div style="border: 1px black solid; padding: 10px">
    <h4><em>This test is created to show knowledge about both data providers (test.each) and snapshot </em></h4>
    <div>Status: <span v-text="status"></span></div>
    <div>
      <span v-if="props.power <= 0">You are dead!</span>
    </div>
    <div>
      <pre style="background: #cbd5e0">
        describe('TestEachTest component', () => {
          test.each([
            [120, 'You are super powerful!'],
            [90, 'You are just powerful!'],
            [70, 'You are strong!'],
            [50, 'You are not strong!'],
            [20, 'You are bad!'],
            [0, 'You are dead('],
            [-10, 'You are dead(']
            ])('renders correct status for power: %i', (power, expectedStatus) => {
              const wrapper = shallowMount(PowerStatus, {
              props: { power }
            })

            expect(wrapper.text()).toContain(expectedStatus)
            expect(wrapper.html()).toMatchSnapshot()
          })
        })
      </pre>
    </div>
  </div>
</template>

<style scoped>

</style>