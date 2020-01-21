import { Component, OnInit } from '@angular/core';
import { Course } from 'src/app/classes/course';

function log(className){
  console.log("the class name ",className);
}

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
@log
export class CoursesComponent implements OnInit {

  private title : String ="list of the courses";
  private courses : Course[] = [
    {
      id : 1,
      title : "course 1"
    },
    {
      id: 2,
      title : "course 2"
    }
  ]
  constructor() { }

  ngOnInit() {
  }

  updateValue(e){
    this.title = e.target.value;
  }

}
