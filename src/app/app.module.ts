import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { LeftMenuComponent } from './left-menu/left-menu.component';
import { MainPageComponent } from './main-page/main-page.component';
import { MainPageItemComponent } from './main-page-item/main-page-item.component';
import { AppRoutingModule } from './app-routing.module';
import { SimpleSearchPhysicalPersonComponent } from './simple-search/simple-search-physical-person/simple-search-physical-person.component';
import { SimpleSearchAccountNumberComponent } from './simple-search/simple-search-account-number/simple-search-account-number.component';
import { SimpleSearchCompanyComponent } from './simple-search/simple-search-company/simple-search-company.component';
import { ComplexSearchCompanyComponent } from './complex-search/complex-search-company/complex-search-company.component';
import { ComplexSearchPhysicalPersonComponent } from './complex-search/complex-search-physical-person/complex-search-physical-person.component';
import { LeftMenuItemComponent } from './left-menu-item/left-menu-item.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LeftMenuComponent,
    MainPageComponent,
    MainPageItemComponent,
    SimpleSearchPhysicalPersonComponent,
    SimpleSearchAccountNumberComponent,
    SimpleSearchCompanyComponent,
    ComplexSearchCompanyComponent,
    ComplexSearchPhysicalPersonComponent,
    LeftMenuItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
