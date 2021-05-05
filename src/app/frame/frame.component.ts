import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-frame',
  templateUrl: './frame.component.html',
  styleUrls: ['./frame.component.css']
})
export class FrameComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  @Input() name = "Hello World";

}
