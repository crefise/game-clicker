<template>
  <div>
    <div>
      <span>Just clicks</span>
    </div>
    <div>
      <button @click="makeClick">Click</button>
    </div>
    <div>
      <span>CLicks:</span>
      <span>{{ clicks }}</span>
    </div>
  </div>
</template>

<script lang="ts">
import { ref } from 'vue';
import type { Ref } from "vue";

export default {
  setup() {
    const clicks: Ref<number> = ref(55);

    const makeClick = function () {
      clicks.value = clicks.value + 1;
    }

    return {
      clicks,
      makeClick
    }
  }
};
</script>