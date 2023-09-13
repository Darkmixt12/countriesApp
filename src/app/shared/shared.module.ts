import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { AboutPageComponent } from './pages/about-page/about-page.component';
import { SideBarComponent } from './components/side-bar/side-bar.component';



@NgModule({
  declarations: [
    HomePageComponent,
    AboutPageComponent,
    SideBarComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    AboutPageComponent,
    HomePageComponent,
    SideBarComponent
  ]
})
export class SharedModule { }
