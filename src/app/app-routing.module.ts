import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { MainPageComponent } from "./main-page/main-page.component";
import { SimpleSearchAccountNumberComponent } from "./simple-search/simple-search-account-number/simple-search-account-number.component";
import { SimpleSearchCompanyComponent } from "./simple-search/simple-search-company/simple-search-company.component";
import { SimpleSearchPhysicalPersonComponent } from "./simple-search/simple-search-physical-person/simple-search-physical-person.component";
import { ComplexSearchCompanyComponent } from "./complex-search/complex-search-company/complex-search-company.component";
import { ComplexSearchPhysicalPersonComponent } from "./complex-search/complex-search-physical-person/complex-search-physical-person.component";

const appRoutes: Routes = [
    { path: '', component: MainPageComponent },
    { path: 'search/simple', children: [
        { path: 'podmiot', component: SimpleSearchCompanyComponent },
        { path: 'osoba-fizyczna', component: SimpleSearchPhysicalPersonComponent },
        { path: 'rachunek', component: SimpleSearchAccountNumberComponent },
    ] },
    { path: 'search/complex', children: [
        { path: 'podmiot', component: ComplexSearchCompanyComponent },
        { path: 'osoba-fizyczna', component: ComplexSearchPhysicalPersonComponent },
    ] },
];

@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes)
    ],
    exports: [RouterModule]
})
export class AppRoutingModule {

}