import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CafeComponent } from './cafe.component';
import { CafeRoutingModule } from './cafe.routing';

@NgModule({
  imports: [
    CommonModule,
    CafeRoutingModule
  ],
  declarations: [CafeComponent],
  exports: [CafeComponent]
})
export class CafeModule { 

}
