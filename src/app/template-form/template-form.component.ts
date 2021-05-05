import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Course } from '../Course';
import { CourseService } from '../course.service';

@Component({
  selector: 'app-template-form',
  templateUrl: './template-form.component.html',
  styleUrls: ['./template-form.component.css']
})
export class TemplateFormComponent {

  constructor(private courseService: CourseService, private router: Router) { }

submitCourse(c:Course)
{
let course:any={};
course.id= Math.floor(Math.random()*1000);
course.name=c.name;
course.coursePrice=c.price ;
course.startDate = c.start_date;
course.numberOfStudents=0;
course.duration=3;
course.rating=5;
this.courseService.addCourse(course);
this.router.navigate(['./list']);

}
}
