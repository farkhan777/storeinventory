import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { PeminjamanbarangRoutingModule } from './peminjamanbarang-routing.module';
import { PeminjamanbarangComponent } from './peminjamanbarang.component';
import { TableModule } from 'primeng/table';
import { FileUploadModule } from 'primeng/fileupload';
import { ButtonModule } from 'primeng/button';
import { RippleModule } from 'primeng/ripple';
import { ToastModule } from 'primeng/toast';
import { ToolbarModule } from 'primeng/toolbar';
import { RatingModule } from 'primeng/rating';
import { InputTextModule } from 'primeng/inputtext';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { DropdownModule } from 'primeng/dropdown';
import { RadioButtonModule } from 'primeng/radiobutton';
import { InputNumberModule } from 'primeng/inputnumber';
import { DialogModule } from 'primeng/dialog';
import {ProductService} from "../../../service/product.service";
import {BarangService} from "../../../service/barang.service";
import {ImageModule} from "primeng/image";
import {KategoriService} from "../../../service/kategori.service";

@NgModule({
  imports: [
    CommonModule,
    PeminjamanbarangRoutingModule,
    TableModule,
    FileUploadModule,
    FormsModule,
    ButtonModule,
    RippleModule,
    ToastModule,
    ToolbarModule,
    RatingModule,
    InputTextModule,
    InputTextareaModule,
    DropdownModule,
    RadioButtonModule,
    InputNumberModule,
    DialogModule,
    ImageModule,
    ReactiveFormsModule
  ],
	declarations: [PeminjamanbarangComponent],
  providers: [ProductService, BarangService, KategoriService]
})
export class PeminjamanbarangModule { }
