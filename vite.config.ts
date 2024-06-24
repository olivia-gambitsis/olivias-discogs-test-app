import {defineConfig} from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
    server: {
        port: 5175
    },
    plugins: [react()],
    base: "https://olivia-gambitsis.github.io/olivias-discogs-test-app"
});