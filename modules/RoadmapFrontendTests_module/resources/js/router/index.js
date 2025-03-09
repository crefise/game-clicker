import { createMemoryHistory, createRouter } from 'vue-router';
import PHPUnitTests from 'RoadmapFrontendTests_module/resources/js/pages/PHPUnitTests.vue';
import JestTests from 'RoadmapFrontendTests_module/resources/js/pages/JestTests.vue';

const routes = [
  { path: '/php-unit', component: PHPUnitTests },
  { path: '/jest', component: JestTests }
]

export default  createRouter({
  history: createMemoryHistory(),
  routes,
})
