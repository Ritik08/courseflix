import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Course } from '../Course';
import { CourseService } from '../course.service';


@Component({
  selector: 'app-courses-container',
  templateUrl: './courses-container.component.html',
  styleUrls: ['./courses-container.component.css']
})
export class CoursesContainerComponent{


   @Output("enrollEvent") registerCourse = new EventEmitter(); 
   @Output("deleteCourse") deleteCourseEvent = new EventEmitter(); 

   //dependency injection
   courses: Course[] = [];
   constructor(private courseService:CourseService){}
 
   ngOnInit(): void {
     this.courseService
        .fetchAllCourses()
        .subscribe(data => {console.log(data); this.courses = data}, 
                   error => console.log("The courses were not fetched"),
                   () => console.log("completed "));

   }
 
   collapseAll = false;
   btnText = "Expand-All"

   courseSelected(id: number){
     this.registerCourse.emit(id);
   }

   handleDelete(id:number){
      this.courseService.deleteCourseById(id).subscribe(() => console.log('course is deleted')); 
  
   }

   toggle(){
     this.collapseAll = !this.collapseAll;
     this.btnText = this.btnText === 'Expand-All'? 'Collapse-All': 'Expand-All';
   }

   enroll(id:number){
    this.courses.forEach(course => {
      if (course.id === id){
        course.students += 1;
      }
    })
  }

  deleteCourse(id:number){
    console.log("Inside the service method ..")
    this.courses = this.courses.filter(course => course.id !== id)
  }
}
