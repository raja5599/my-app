import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutCeoComponent } from './about-ceo/about-ceo.component';
import { AboutCompanyComponent } from './about-company/about-company.component';
import { AboutDirectorComponent } from './about-director/about-director.component';



@NgModule({
  declarations: [
    AboutCeoComponent,
    AboutCompanyComponent,
    AboutDirectorComponent
  ],
  exports:[
    AboutCompanyComponent
  ],
  imports: [
    CommonModule
  ]
})
export class AboutUsModule { }
