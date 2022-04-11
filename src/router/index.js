import { createRouter, createWebHashHistory } from 'vue-router';

const routes = [
  {
    path: '/login',
    component: () => import('../views/LoginView.vue'),
  },
  {
    path: '/register',
    component: () => import('../views/RegisterView.vue'),
  },
  {
    path: '/metawall',
    component: () => import('../views/MetawallView.vue'),
    children: [
      {
        path: 'posts',
        component: () => import('../views/PostsView.vue'),
      },
      {
        path: 'following',
        component: () => import('../views/FollowingView.vue'),
      },
    ],
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
