import { Component, Input, Output, EventEmitter, OnInit, OnChanges, OnDestroy } from '@angular/core';
import { CourseService } from '../course.service';
@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css'],
  providers:[CourseService]
})
export class CourseComponent implements OnInit, OnChanges, OnDestroy {

  constructor(){
    console.log("Inside the constructor of Course component......");
  }
  
  @Input('childCompData') course:any;

  @Output('enroll') courseEnroll = new EventEmitter();
  
  @Output('deleteCourse') deleteCourseEvent = new EventEmitter();

  @Input('collapse')expand :any;

  ngOnInit(){
    console.log("INside the init method of Course component ....")
  }

  ngOnChanges(){
    console.log("Inside the on changes method of Course component")
  }

  ngOnDestroy(){
    console.log("Inside the destroy method of Course component")
  }

  selectCourse(id:number ){
    this.courseEnroll.emit(id);
  }

  shouldDisplayEnrollButton(course:any): boolean{
    return course.numberOfStudents >= 20
  }

  handleDelete(id:number){
    this.deleteCourseEvent.emit(id);
  }

  toggle(){
    this.expand = !this.expand;
  }

}
