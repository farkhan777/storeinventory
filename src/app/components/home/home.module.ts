import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from './home-routing.module';
import {PinjambarangModule} from "./pinjambarang/pinjambarang.module";

@NgModule({
	imports: [
		CommonModule,
		HomeRoutingModule
	]
})
export class HomeModule { }
