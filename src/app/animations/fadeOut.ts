import { animate, animation, style } from "@angular/animations";

export const fadeIn = animation([
  animate('500ms', style({ opacity: 0, transform: 'translateY(10px)' })),
]);
