import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';

import {MatToolbarModule, MatToolbarRow} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import { SideMenuToolbarComponent } from './side-menu-toolbar/side-menu-toolbar.component';
import { CommonModule } from '@angular/common';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
// import {provideNativeDateAdapter} from '@angular/material/core';
@NgModule({
  declarations: [
    AppComponent,
    SideMenuToolbarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatToolbarRow,
    MatIconModule,
    CommonModule, 
    MatToolbarModule, 
    BrowserModule, 
    MatIconModule, 
    MatSidenavModule,
    MatListModule,
    MatExpansionModule,
    MatDatepickerModule,
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule,
    ],
  providers: [
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
