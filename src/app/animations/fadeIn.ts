import { animate, animation, style } from "@angular/animations";

export const fadeIn = animation([
  style({ opacity: 0, transform: 'translateY({{ Yaxis }})' }),
  animate('{{ time }}', style({ opacity: 1, transform: 'translateY(0)' })),
]);
