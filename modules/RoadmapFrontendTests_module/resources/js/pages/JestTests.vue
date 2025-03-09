<template>
  <div>
    <div>
      Jest is a delightful JavaScript Testing Framework with a focus on simplicity.

      It works with projects using: Babel, TypeScript, Node, React, Angular, Vue and more!
    </div>

    <div>
      <div>
        <div>
          <h1>Simple method test:</h1>
        </div>
        <div>
          <simple-properties-test />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import SimplePropertiesTest from "RoadmapFrontendTests_module/resources/js/components/tests/SimplePropertiesTest.vue";

export default {
  components: {SimplePropertiesTest},
  setup() {
  }
};
</script>