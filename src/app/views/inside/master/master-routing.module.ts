import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MasterPage } from './master.page';

const routes: Routes = [
  {
    path: 'MasterPage',
    component: MasterPage,
    children: [
      {
        path: "books",
        children: [
          {
            path: '',
            loadChildren: () => import('../books/books.module').then( m => m.BooksPageModule)
          },
          {
            path: ':id',
            loadChildren: () => import('../book/book.module').then( m => m.BookPageModule)
          }
        ]
      },
      {
        path: "profile",
        loadChildren: () => import('../../session/profile/profile.module').then( m => m.ProfilePageModule)
      },
      {
        path: "categories",
        loadChildren: () => import('../categories/categories.module').then( m => m.CategoriesPageModule)
      },
      {
        path: "upload",
        loadChildren: () => import('../upload/upload.module').then( m => m.UploadPageModule)
      },
      {
        path: '',
        redirectTo: '/master/MasterPage/books',
        pathMatch: 'full'
      },
    ]
  },
  {
    path: '',
    redirectTo: '/master/MasterPage/books',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MasterPageRoutingModule {}
