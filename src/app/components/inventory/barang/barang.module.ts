import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BarangRoutingModule } from './barang-routing.module';
import { BarangComponent } from './barang.component';
import { ButtonModule } from 'primeng/button';
import { RippleModule } from 'primeng/ripple';
import { SplitButtonModule } from 'primeng/splitbutton';
import { ToggleButtonModule } from 'primeng/togglebutton';

@NgModule({
	imports: [
		CommonModule,
		BarangRoutingModule,
		ButtonModule,
		RippleModule,
		SplitButtonModule,
		ToggleButtonModule,
	],
	declarations: [BarangComponent]
})
export class BarangModule { }
