<template>
  <div>
    <div>
      Jest is a delightful JavaScript Testing Framework with a focus on simplicity.

      It works with projects using: Babel, TypeScript, Node, React, Angular, Vue and more!
    </div>

    <div>
      <div>
        <simple-properties-test />
      </div>

      <div>
        <snapshots-test message="This is just props message"/>
      </div>

      <div>
        <test-each-test :power="100" />
      </div>

      <div>
        <test-async-code success />
      </div>
      <div>
        <mocking-test />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import SimplePropertiesTest from "RoadmapFrontendTests_module/resources/js/components/SimplePropertiesTest.vue";
import SnapshotsTest from "RoadmapFrontendTests_module/resources/js/components/SnapshotsTest.vue";
import TestEachTest from "RoadmapFrontendTests_module/resources/js/components/TestEachTest.vue";
import TestAsyncCode from "RoadmapFrontendTests_module/resources/js/components/TestAsyncCode.vue";
import MockingTest from "RoadmapFrontendTests_module/resources/js/components/MockingTest.vue";

export default {
  components: {MockingTest, TestAsyncCode, TestEachTest, SnapshotsTest, SimplePropertiesTest },
};
</script>