import { fadeInOut } from './../../animations/fadeinout';
import { animate, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fadein-out',
  templateUrl: './fadein-out.component.html',
  styleUrls: ['./fadein-out.component.scss'],
  animations: [
    fadeInOut
  ]
})
export class FadeinOutComponent implements OnInit {

  show: boolean = true;

  constructor() { }

  ngOnInit(): void {
  }

  showhide() {
    this.show = !this.show;
  }

}
