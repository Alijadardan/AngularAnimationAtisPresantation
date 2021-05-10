import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-state',
  templateUrl: './state.component.html',
  styleUrls: ['./state.component.scss'],
  animations: [
    trigger('openClose', [
      // ...
      state('open', style({
        height: '200px',
        opacity: 1,
        backgroundColor: 'green'
      })),
      state('closed', style({
        height: '50px',
        opacity: 0.5,
        backgroundColor: 'white'
      })),
      transition('* => closed', [
        animate('1s')
      ]),
      transition('* => open', [
        animate('0.5s')
      ]),
      // both ways the same time to transition
      // transition('open <=> closed', [
      //   animate('0.5s')
      // ]),
    ]),
  ],
})
export class StateComponent implements OnInit {

  state = 'closed';
  showOnEnd: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  onAnimate() {
    this.state == 'closed' ? this.state = 'open' : this.state = 'closed';
  }


  animationStarted(event) {
    console.log('Start');
    console.log(event);
  }

  animationEnded(event) {
    console.log('End');
    console.log(event);
  }
}
