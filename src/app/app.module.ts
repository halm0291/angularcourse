import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from "@angular/forms";
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { CourseComponent } from './course/course.component';
import { CoursesService } from './course/courses.service';
import { FavoriteComponent } from './favorite/favorite.component';
import { TitlePipe } from './title.pipe';
import { ZippyComponent } from './zippy/zippy.component';
// import { StarComponent } from './star/star.component';
import {MatButtonModule, MatCheckboxModule} from '@angular/material';
import { CourseFormComponent } from './course-form/course-form.component';
import {SignupFormComponent} from "./signup-form/signup-form.component";
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    CourseComponent,
    ZippyComponent,
    FavoriteComponent,
    TitlePipe,
    CourseFormComponent,
    SignupFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    MatButtonModule,
    MatCheckboxModule,
    NgbModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
