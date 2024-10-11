import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
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
        path: 'shoes',
        title: 'Shoes',
        loadComponent: () =>
          import(
            './dashboard/pages/shoes/shoes.component'
          ),
      },
      {
        path: 'cart',
        title: 'Cart',
        loadComponent: () =>
          import(
            './dashboard/pages/cart/cart.component'
          ),
      },

      {
        path: '**',
        redirectTo: 'shoes',
        pathMatch: 'full',
      },


    ],

  },

  {
    path: '**',
    redirectTo: '',
    pathMatch: 'full',
  },
];
