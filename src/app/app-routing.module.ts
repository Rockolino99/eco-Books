import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./views/main/main.module').then( m => m.MainPageModule)
    //loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'main',
    loadChildren: () => import('./views/main/main.module').then( m => m.MainPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./views/session/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./views/session/register/register.module').then( m => m.RegisterPageModule)
  },
  {
    path: 'profile',
    loadChildren: () => import('./views/session/profile/profile.module').then( m => m.ProfilePageModule)
  },
  {
    path: 'books',
    loadChildren: () => import('./views/inside/books/books.module').then( m => m.BooksPageModule)
  },
  {
    path: 'master',
    loadChildren: () => import('./views/inside/master/master.module').then( m => m.MasterPageModule)
  },
  {
    path: 'upload',
    loadChildren: () => import('./views/inside/upload/upload.module').then( m => m.UploadPageModule)
  },
  {
    path: 'categories',
    loadChildren: () => import('./views/inside/categories/categories.module').then( m => m.CategoriesPageModule)
  },  {
    path: 'book',
    loadChildren: () => import('./views/inside/book/book.module').then( m => m.BookPageModule)
  }


];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
