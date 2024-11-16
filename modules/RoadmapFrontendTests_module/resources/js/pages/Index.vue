<template>
  <div>
    <div>
      <module-info />
    </div>
    <div>
      <block-game />
    </div>
    <div>
      <button @click="makeClick">Click super</button>
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
import ModuleInfo from "../components/ModuleInfo.vue";
import BlockGame from "../components/BlockGame.vue";

export default {
  components: {
    BlockGame,
    ModuleInfo
  },
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