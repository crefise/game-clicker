<script setup lang="ts">
import { defineProps } from 'vue'

const props = defineProps({
  message: {
    type: String,
    required: true,
  },
})
</script>

<template>
  <div style="border: 1px black solid; padding: 10px">
    <div>
      <h4><em>This test is created to show knowledge about snapshots. </em></h4>
    </div>
    <div v-text="props.message"></div>
    <div>
      <pre style="background: #cbd5e0">
        test('Snapshot test', () => {
          const wrapper = shallowMount(SnapshotsTest, {
            props: {
              message: 'Hello new snapshot!',
            }
          })
          expect(wrapper.html()).toMatchSnapshot()
        })
      </pre>
    </div>
  </div>
</template>

<style scoped>

</style>