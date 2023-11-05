import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CafeComponent } from 'src/app/cafe/cafe.component';
import { CafeModule } from './cafe/cafe.module';
import { CafeService } from './services/cafe.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CafeModule,
    HttpClientModule
  ],
  providers: [CafeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
