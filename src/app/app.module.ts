import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import  { appRoutes } from './routerConfig';
import { InstructorComponent } from './navbar/instructor/instructor.component';
import { StudentComponent } from './navbar/student/student.component';
import { CoursesComponent } from './navbar/courses/courses.component';
import { MaterialsComponent } from './navbar/materials/materials.component';
import { HttpClientModule } from '@angular/common/http';
import { FreeApiService } from './service/backend.api';

@NgModule({
  declarations: [
    AppComponent,
    InstructorComponent,
    StudentComponent,
    CoursesComponent,
    MaterialsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [FreeApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
