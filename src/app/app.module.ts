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

@NgModule({
  declarations: [
    AppComponent,
    CourseComponent,
    ZippyComponent
    // StarComponent
    CoursesComponent,
    FavoriteComponent,
    TitlePipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    MatButtonModule,
    MatCheckboxModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
