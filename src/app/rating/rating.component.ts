import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.css']
})
export class RatingComponent  {

  constructor() { }

 @Input('rating') rating:any;
 stars: any[] =[];
 isFractionPresent=false;

ngOnInit():void{
const wholeNumber= Math.floor(this.rating);
this.stars =new Array(wholeNumber);
this.isFractionPresent=this.rating - wholeNumber !==0
}
}
