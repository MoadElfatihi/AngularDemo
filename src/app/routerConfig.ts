import { Routes } from '@angular/router';
import { InstructorComponent } from './navbar/instructor/instructor.component';
import { StudentComponent } from './navbar/student/student.component';
import { CoursesComponent } from './navbar/courses/courses.component';
import { MaterialsComponent } from './navbar/materials/materials.component';

export const  appRoutes: Routes = [
    {
        path : 'instructor',
        component :  InstructorComponent
    },
    {
        path : 'student',
        component : StudentComponent
    },
    {
        path : 'courses',
        component : CoursesComponent
    },
    {
        path : 'materials',
        component : MaterialsComponent
    }
  
];

