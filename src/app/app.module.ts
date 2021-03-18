import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MarketComponent } from './portal/market/market.component';
import { WelcomeComponent } from './portal/welcome/welcome.component';

@NgModule({
  declarations: [
    AppComponent,
    MarketComponent,
    WelcomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
