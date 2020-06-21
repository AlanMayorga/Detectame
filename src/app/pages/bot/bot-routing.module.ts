import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BotPage } from './bot.page';

const routes: Routes = [
  {
    path: '',
    component: BotPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BotPageRoutingModule {}
