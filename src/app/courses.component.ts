import { Component } from '@angular/core';
import { CoursesService } from './course/courses.service';
@Component({
    selector: 'courses' ,
    template: `<h2>{{title}}</h2>
               <ul>
               <h1>'Total: '{{totalCourses}}</h1>
               <li *ngFor="let course of courses">
                    {{course}}
               </li>
               </ul>
               <button (click)="onSave()" class="btn btn-primary" [class.active]="isActive" [style.backgroundColor]="isActive ? 'green' : 'red'">Test</button>
               {{course.title | uppercase}} <br/>
               {{course.rating | number }} <br/>
               <input [(ngModel)]="course.title" (keyup.enter)="onKeyUp()" />
               `
})

export class CoursesComponent {
  title="List fo courses";
  courses;
  totalCourses:number;
  isActive=true;
 course={title:"course title",rating:4.9575};

  constructor(coursesService: CoursesService){
    this.courses=coursesService.getCourses();
    this.totalCourses=this.courses.length;
  }
  onSave(){
      console.log("Button was clicked");
  }
  onKeyUp(){
      console.log(this.course.title);
  }

 }
