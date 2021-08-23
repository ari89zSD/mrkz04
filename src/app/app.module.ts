import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MarketComponent } from './portal/market/market.component';
import { WelcomeComponent } from './portal/welcome/welcome.component';
import { TypesenseSearchService } from './services/typesense-search.service';
import { SearchComponent } from './base/search/search.component';

@NgModule({
  declarations: [
    AppComponent,
    MarketComponent,
    WelcomeComponent,
    SearchComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, ReactiveFormsModule],
  providers: [TypesenseSearchService],
  bootstrap: [AppComponent],
})
export class AppModule {}
