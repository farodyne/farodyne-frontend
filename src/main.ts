/**
 * Author: Federico Engler
 *
 * The entry point for our application.
 */
import { createApp } from 'vue';
import * as components from '@/components';
import app from './app.vue';
import router from './router';

const application = createApp(app);

// Register our small set of components to be globally available for better DX.
Object.entries(components).forEach(([_, component]) => {
    application.component(component.name, component);
});

application.use(router);
application.mount('#app');
