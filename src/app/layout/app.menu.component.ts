import { OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { LayoutService } from './service/app.layout.service';

@Component({
    selector: 'app-menu',
    templateUrl: './app.menu.component.html'
})
export class AppMenuComponent implements OnInit {

    model: any[] = [];

    constructor(public layoutService: LayoutService) { }

    ngOnInit() {
        this.model = [
            {
                label: 'Home',
                items: [
                    { label: 'Dashboard', icon: 'pi pi-fw pi-home', routerLink: ['/'] }
                ]
            },
            {
                label: 'Management Barang',
                items: [
                  { label: 'Kategori Barang', icon: 'pi pi-fw pi-hashtag', routerLink: ['/inventory/kategoribarang'] },
                  { label: 'Barang', icon: 'pi pi-fw pi-box', routerLink: ['/inventory/barang'] },
                ]
            },
            {
                label: 'Management Peminjaman',
                items: [
                    { label: 'Peminjaman Barang', icon: 'pi pi-fw pi-inbox', routerLink: ['/inventory/peminjamanbarang'], badge: 'NEW' }
                ]
            },
            {
                label: 'Management Permintaan',
                items: [
                  { label: 'Permintaan Barang', icon: 'pi pi-fw pi-send', routerLink: ['/inventory/permintaanbarang'], badge: 'NEW' }
                ]
            },
        ];
    }
}
