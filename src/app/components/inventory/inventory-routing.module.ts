import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

@NgModule({
    imports: [RouterModule.forChild([
        { path: 'barang', data: { breadcrumb: 'Barang' }, loadChildren: () => import('./barang/barang.module').then(m => m.BarangModule) },
        { path: 'kategoribarang', data: { breadcrumb: 'Kategori Barang' }, loadChildren: () => import('./kategoribarang/kategoribarang.module').then(m => m.KategoribarangModule) },
        { path: '**', redirectTo: '/notfound' }
    ])],
    exports: [RouterModule]
})
export class InventoryRoutingModule { }
