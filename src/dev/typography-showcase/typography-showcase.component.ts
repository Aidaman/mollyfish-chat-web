import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-typography-showcase',
  standalone: true,
  imports: [CommonModule],
  template: `
    <h1>Lorem ipsum dolor sit.</h1>
    <h2>Lorem ipsum dolor sit.</h2>
    <h3>Lorem ipsum dolor sit.</h3>
    <h4>Lorem ipsum dolor sit.</h4>
    <h5>Lorem ipsum dolor sit.</h5>
    <h6>Lorem ipsum dolor sit.</h6>
    <p>typography works!</p>
    <div>
      <small>Lorem ipsum dolor sit.</small>
    </div>
    <a href="#">Lorem ipsum dolor sit.</a>
    <div>
      <small class="note">Lorem ipsum dolor sit.</small>
    </div>
  `,
  styleUrl: './typography-showcase.component.sass',
})
export class TypographyShowcaseComponent {}
