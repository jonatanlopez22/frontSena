import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home-page',
    title: 'HOME',
    loadComponent: () =>
      import('./dashboard/pages/home-page/home-page.component'),
  },

  {
    path: 'register',
    title: 'Register',
    loadComponent: () =>
      import('./dashboard/pages/register/register.component'),
  },

  {
    path: 'login',
    title: 'Login',
    loadComponent: () => import('./dashboard/pages/login/login.component'),
  },

  {
    path: 'dashboard',
    loadComponent: () => import('./dashboard/dashboard.component'),
    children: [
      {
        path: 'change-detection',
        title: 'Change Detection',
        loadComponent: () =>
          import(
            './dashboard/pages/change-detection/change-detection.component'
          ),
      },

      {
        path: 'control-flow',
        title: 'Control Flow',
        loadComponent: () =>
          import('./dashboard/pages/control-flow/control-flow.component'),
      },

      {
        path: 'defer-views',
        title: 'Defer Views',
        loadComponent: () =>
          import('./dashboard/pages/defer-views/defer-views.component'),
      },

      {
        path: 'defer-option',
        title: 'Defer Option',
        loadComponent: () =>
          import('./dashboard/pages/defer-options/defer-options.component'),
      },

      {
        path: 'user/:id',
        title: 'User',
        loadComponent: () => import('./dashboard/pages/user/user.component'),
      },

      {
        path: 'users-list',
        title: 'Users',
        loadComponent: () => import('./dashboard/pages/users/users.component'),
      },

      {
        path: 'view-transition-1',
        title: 'View Transition 2',
        loadComponent: () =>
          import(
            './dashboard/pages/view-transition/view-transition1.component'
          ),
      },
      {
        path: 'view-transition-2',
        title: 'View Transition 1',
        loadComponent: () =>
          import(
            './dashboard/pages/view-transition/view-transition2.component'
          ),
      },

      {
        path: '',
        redirectTo: 'control-flow',
        pathMatch: 'full',
      },
    ],
  },
  {
    path: '',
    redirectTo: '/home-page',
    pathMatch: 'full',
  },
];
