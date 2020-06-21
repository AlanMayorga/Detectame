import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetailRecordPageRoutingModule } from './detail-record-routing.module';

import { DetailRecordPage } from './detail-record.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetailRecordPageRoutingModule
  ],
  declarations: [DetailRecordPage]
})
export class DetailRecordPageModule {}
