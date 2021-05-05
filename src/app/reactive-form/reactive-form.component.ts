import { Component} from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CourseService } from '../course.service';
import {CoursePriceRangeValidator} from '../CoursePriceRangeValidatorFn'
@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent{

 constructor(private courseService: CourseService, private router:Router){}

courseForm= new FormGroup({
courseName: new FormControl('',
[Validators.required,
Validators.minLength(5),
Validators.maxLength(8)


]),
coursePrice: new FormControl('',
[
Validators.required,
CoursePriceRangeValidator

])


});


get courseName(){
return this.courseForm.get('courseName');
}
get coursePrice(){
return this.courseForm.get('coursePrice');
}

handleSubmit(c:any){

let course:any={};
course.id= Math.floor(Math.random()*1000);
course.name=c.name;
course.coursePrice=c.price;
course.startDate = c.startDate;
course.numberOfStudents=0;
course.duration=3;
course.rating=5;
this.courseService.addCourse(course);
this.router.navigate(['/list'])
}




}
