import { Routes, RouterModule } from '@angular/router';
import { CafeComponent } from './cafe.component';
import { NgModule } from '@angular/core';

const routes: Routes = [
  {
    path: '',
    component: CafeComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CafeRoutingModule {}
