import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ngfor-test',
  templateUrl: './ngfor-test.component.html',
  styleUrls: ['./ngfor-test.component.css']
})
export class NgforTestComponent {
  courses;

  onAdd() {
    this.courses.push({id:4, name:'course 4'});
  }

  onRemove(course) {
    let index = this.courses.indexOf(course);
    this.courses.splice(index, 1);
  }

  onChange(course) {
    course.name+="*";
  }

  loadCourses() {
    this.courses = [
      {id:1, name: 'course 1'},
      {id:3, name: 'course 2'},
      {id:4, name: 'course 3'}
    ];
  }

  trackCourse(index, course) {
    return course ? course.id : undefined;
  }

}
