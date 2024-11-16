<template>
  <div class="isolated-battlefield">

  </div>
</template>

<script setup lang="ts">
  import Field from "../core/Field";
  import {Reactive, reactive} from "vue";
  const a = 123;
  const gameFields : Reactive<Field[]> = reactive([

  ]);

  function selectItem (key: number) {
    console.log(key);

    gameFields[key].border = '4px solid green';
  }
</script>

<style scoped>
  .isolated-battlefield {
    background-color: darkslategrey;
    border: 5px grey solid;
    display: inline-block;
  }

  .item {
    border: 1px black solid;
    width: 50px;
    height: 50px;
  }
</style>