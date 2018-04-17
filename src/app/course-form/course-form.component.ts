import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'course-form',
  templateUrl: './course-form.component.html',
  styleUrls: ['./course-form.component.css']
})
export class CourseFormComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  categories=[{id:'qa'},{id:'dev'},{id:'arq'}];
  
  log(x){
    debugger;
    console.log(x);
  }
}
