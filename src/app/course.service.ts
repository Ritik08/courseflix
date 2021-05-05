import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import {retry, map,filter, catchError} from 'rxjs/operators';
import { Course } from './Course';
import { environment } from './../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  courses:Course[] = [ ]

  constructor(private httpClient: HttpClient){console.log("Inside the constructor of the Course Service ....")}


  fetchAllCourses(): Observable<Course[]>{
    return this.httpClient
        .get<Course[]>(environment.API_URL)
  }

  fetchCourseById(id:number): Observable<Course>{
    return this.httpClient.get<Course>(environment.API_URL+id)
  }

  addCourse(course: Course):Observable<Course>{
    return this.httpClient.post<Course>(environment.API_URL, course)
  }
  
  deleteCourseById(id: number):Observable<void>{
    return this.httpClient.delete<void>(environment.API_URL+id);
  }

  fetchCourseDetailsById(id: number): any{
    return {
      id: id,
      desc: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptas dolorem sunt, similique iusto fugiat unde rerum explicabo modi eius ut odit quisquam veritatis aliquid eveniet. Earum, voluptatem quis, enim dignissimos maiores, fugiat consectetur sed eius asperiores quos doloremque molestiae animi.'
    }
  }
}
