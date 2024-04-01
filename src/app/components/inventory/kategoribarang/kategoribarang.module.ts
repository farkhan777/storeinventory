import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { KategoribarangComponent } from './kategoribarang.component';
import { KategoribarangRoutingModule } from './kategoribarang-routing.module';
import { DataViewModule } from 'primeng/dataview';
import { PickListModule } from 'primeng/picklist';
import { OrderListModule } from 'primeng/orderlist';
import { InputTextModule } from 'primeng/inputtext';
import { DropdownModule } from 'primeng/dropdown';
import { RatingModule } from 'primeng/rating';
import { ButtonModule } from 'primeng/button';

@NgModule({
	imports: [
		CommonModule,
		FormsModule,
		KategoribarangRoutingModule,
		DataViewModule,
		PickListModule,
		OrderListModule,
		InputTextModule,
		DropdownModule,
		RatingModule,
		ButtonModule
	],
	declarations: [KategoribarangComponent]
})
export class KategoribarangModule { }
