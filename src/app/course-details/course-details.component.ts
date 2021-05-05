import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Course } from '../Course';
import { CourseService } from '../course.service';

@Component({
  selector: 'app-course-details',
  templateUrl: './course-details.component.html',
  styleUrls: ['./course-details.component.css']
})
export class CourseDetailsComponent implements OnInit {

  constructor(private activatedRoute: ActivatedRoute, private courseService:CourseService) { }

  course: any = {};

  ngOnInit(): void {
   // let courseId = this.activatedRoute.snapshot.params["dummy"];
   this.activatedRoute.paramMap.subscribe(params => {
     console.log("Parameters is updated");
     let courseId = params?.get("id");
     if (courseId){
      this.courseService.fetchCourseById(+courseId).subscribe(course => this.course = course);
     }
   })
this.activatedRoute.queryParamMap.subscribe(queryParams=>{
console.log(queryParams.get("offer"));
})
  }
}
