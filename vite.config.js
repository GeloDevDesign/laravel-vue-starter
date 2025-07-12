import { defineConfig } from "vite";
import laravel from "laravel-vite-plugin";
import vue from "@vitejs/plugin-vue";
import tailwindcss from '@tailwindcss/vite';
import path from 'path';


export default defineConfig({
    plugins: [
        laravel(["resources/js/app.js"]),
        tailwindcss(),
        vue({
            template: {
                transformAssetUrls: {
                    base: null,
                    includeAbsolute: false,
                },
            },
        }),
    ],
    resolve: {
        alias: {
            "@": path.resolve(__dirname, "resources/js"),
            vue: "vue/dist/vue.esm-bundler.js",
        },
    },
});
