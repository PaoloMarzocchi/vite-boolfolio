import { createRouter, createWebHistory } from 'vue-router';
import AppHome from './views/AppHome.vue';
import AppProjects from './views/AppProjects.vue';
import AppAbout from './views/AppAbout.vue';
import AppContacts from './views/AppContacts.vue';
import Project from './views/Project.vue';



const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'home',
            component: AppHome
        },
        {
            path: '/projects',
            name: 'projects',
            component: AppProjects
        },
        {
            path: '/projects/:slug',
            name: 'project',
            component: Project
        },
        {
            path: '/about',
            name: 'about',
            component: AppAbout
        },
        {
            path: '/contacts',
            name: 'contacts',
            component: AppContacts
        },
    ]
});
export { router };