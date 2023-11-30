import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-colors-showcase',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="section dark">
      <div class="card primary">Lorem ipsum dolor sit</div>
      <div class="card secondary">Lorem ipsum dolor sit</div>
      <div class="card accent">Lorem ipsum dolor sit</div>
      <div class="card warn">Lorem ipsum dolor sit</div>
      <div class="card positive">Lorem ipsum dolor sit</div>
    </section>
    <section class="section light">
      <div class="card primary">Lorem ipsum dolor sit</div>
      <div class="card secondary">Lorem ipsum dolor sit</div>
      <div class="card accent">Lorem ipsum dolor sit</div>
      <div class="card warn">Lorem ipsum dolor sit</div>
      <div class="card positive">Lorem ipsum dolor sit</div>
    </section>
  `,
  styleUrl: './colors-showcase.component.sass',
})
export class ColorsShowcaseComponent {}
