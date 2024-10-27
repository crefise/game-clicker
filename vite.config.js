import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import laravel from 'laravel-vite-plugin';

export default defineConfig({
    plugins: [
        laravel({
            input: {
                RoadmapFrontendTests_module: 'modules/RoadmapFrontendTests_module/resources/js/index.js'
            },
            refresh: true,
        }),
        vue(),
    ],
});