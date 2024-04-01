import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {MypageComponent} from "./mypage.component";
import {AppLayoutComponent} from "./layout/app.layout.component";
@NgModule({
  imports: [
    RouterModule.forRoot([
      {
        path: '', component: AppLayoutComponent,
        children: [
          {path: '', loadChildren: () => import('./components/dashboard/dashboard.module').then(m => m.DashboardModule)},
          {path: 'inventory', loadChildren: () => import('./components/inventory/inventory.module').then(m => m.InventoryModule)},
        ]
      },
      { path: '**', redirectTo: '/notfound' },
    ], { scrollPositionRestoration: 'enabled', anchorScrolling: 'enabled', onSameUrlNavigation: 'reload' })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
