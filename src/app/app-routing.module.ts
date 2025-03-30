import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadComponent: () => import('./pages/auth/login/login.page').then( m => m.LoginPage)
  },
  {
    path: 'register',
    loadComponent: () => import('./pages/auth/register/register.page').then( m => m.RegisterPage)
  },
  {
    path: 'home',
    loadComponent: () => import('./pages/vendedores/home/home.page').then( m => m.HomePage)
  },
  {
    path: 'home-clientes',
    loadComponent: () => import('./pages/clientes/home/home.page').then( m => m.HomePageClientes)
  },
  {
    path: 'client-visit',
    loadComponent: () => import('./pages/vendedores/client-visit/client-visit.page').then( m => m.ClientVisitPage)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
