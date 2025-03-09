<template>
  <div>
    <div>
      <h1>Header</h1>
    </div>
    <p>
      <router-link to="/php-unit">Back end tests</router-link>
      <router-link to="/jest">Front end tests</router-link>
    </p>
    <router-view></router-view>
  </div>
</template>