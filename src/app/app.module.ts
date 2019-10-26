import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { IdInputComponent } from './id-input/id-input.component';
import { InfoDisplayComponent } from './info-display/info-display.component';
import { ProjectComponent } from './info-display/project/project.component';
import { HoursComponent } from './info-display/hours/hours.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    IdInputComponent,
    InfoDisplayComponent,
    ProjectComponent,
    HoursComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
