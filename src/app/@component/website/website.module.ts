import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WebsiteRoutingModule } from './website-routing.module';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { WebsiteComponent } from './website.component';
import { FooterComponent } from './footer/footer.component';



@NgModule({
  declarations: [WebsiteComponent, HomeComponent, HeaderComponent, FooterComponent],
  imports: [CommonModule, WebsiteRoutingModule],
})
export class WebsiteModule {}
