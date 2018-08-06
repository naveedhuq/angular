import { SummaryPipe } from './summary.pipe';
import { AuthorService } from './author.service';
import { CoursesService } from './courses.service';
import { CoursesComponent } from './courses.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { CourseComponent } from './course/course.component';
import { AuthorComponent } from './author/author.component';
import { FavoriteComponent } from './favorite/favorite.component';
import { TitlecaseComponent } from './titlecase/titlecase.component';
import { TitleCasePipe } from './title-case.pipe';
import { PanelComponent } from './panel/panel.component';
import { LikeComponent } from './like/like.component';
import { NavtestComponent } from './navtest/navtest.component';
import { NgforTestComponent } from './ngfor-test/ngfor-test.component';
import { NgclassTestComponent } from './ngclass-test/ngclass-test.component';
import { NgstyleTestComponent } from './ngstyle-test/ngstyle-test.component';
import { InputFormatDirective } from './input-format.directive';
import { ZippyComponent } from './zippy/zippy.component';

@NgModule({
  declarations: [
    AppComponent,
    CoursesComponent,
    CourseComponent,
    AuthorComponent,
    SummaryPipe,
    FavoriteComponent,
    TitlecaseComponent,
    TitleCasePipe,
    PanelComponent,
    LikeComponent,
    NavtestComponent,
    NgforTestComponent,
    NgclassTestComponent,
    NgstyleTestComponent,
    InputFormatDirective,
    ZippyComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [
    CoursesService,
    AuthorService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
