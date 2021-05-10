import { animate, style, transition, trigger, useAnimation } from "@angular/animations";
import { fadeIn } from "./fadeIn";

export const fadeInOut = trigger('fadeSlideInOut', [
  // specifies the configuration for transitioning between the different states and its direction void=>*
  transition(':enter', [
    style({ opacity: 0, transform: 'translateY(10px)' }),
    animate('500ms', style({ opacity: 1, transform: 'translateY(0)' })),
  ]),
  // *=>void
  transition(':leave', [
    //specifies the duration and any additional CSS animation properties
    animate('500ms', style({ opacity: 0, transform: 'translateY(10px)' })),
  ]),
])

























// useAnimation(fadeIn, {
//   params: {
//     time: '1s',
//     Yaxis: '20px'
//   }
// })
