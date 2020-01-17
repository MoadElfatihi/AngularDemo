import { Component, OnInit } from '@angular/core';
import { Instructor } from 'src/app/classes/instructor/instructor';
import { FreeApiService } from 'src/app/service/backend.api';


@Component({
  selector: 'app-instructor',
  templateUrl: './instructor.component.html',
  styleUrls: ['./instructor.component.css']
})
export class InstructorComponent implements OnInit {

  listInstructor : Instructor[];

  constructor(private service : FreeApiService) { }

  ngOnInit() {
    this.service.getComments().subscribe
    (
      data =>
      
        this.listInstructor = data
      
    )
  }

}
