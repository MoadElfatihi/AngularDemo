import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InstructorComponent } from './instructor/instructor.component';
import { InstructorProfilComponent } from './instructor/instructor-profil/instructor-profil.component';
import { InstructorDetailComponent } from './instructor/instructor-detail/instructor-detail.component';
import { NavbarComponent } from './navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    InstructorComponent,
    InstructorProfilComponent,
    InstructorDetailComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
