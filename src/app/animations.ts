import { trigger, state, style, transition, animate, keyframes, query, stagger } from '@angular/animations';

export let homeListAnimation = trigger('homeListAnimation', [
  transition('* => *', [
  query(':enter', style({ opacity: 0 }), { optional: true}),
   query(':enter', stagger('500ms', [
    animate('1s ease-in', keyframes([
      style({ opacity: 0, transform: 'translateX(-75px)', offset: 0}),
      style({ opacity: 0.3, transform: 'translateX(35px)', offset: 0.3}),
      style({ opacity: 1, transform: 'translateX(0)', offset: 1}),
    ]))
  ]), { optional: true})
  ])
]);
