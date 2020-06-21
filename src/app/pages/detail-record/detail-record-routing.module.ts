import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetailRecordPage } from './detail-record.page';

const routes: Routes = [
  {
    path: '',
    component: DetailRecordPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetailRecordPageRoutingModule {}
