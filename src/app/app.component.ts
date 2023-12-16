import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { ButtonComponent } from './shared/components/button/button.component';
import { ButtonType } from './shared/components/button/button-type.enum';

@Component({
  selector: 'app-root',
  standalone: true,
  template: `
    <router-outlet></router-outlet>
    <mfc-button [buttonType]="buttonType.Primary">button</mfc-button>
    <mfc-button [buttonType]="buttonType.Secondary">button</mfc-button>
    <mfc-button [buttonType]="buttonType.Accent">button</mfc-button>
    <mfc-button [buttonType]="buttonType.Positive">button</mfc-button>
    <mfc-button [buttonType]="buttonType.Error">button</mfc-button>
  `,
  imports: [CommonModule, RouterOutlet, ButtonComponent],
})
export class AppComponent {
  public readonly buttonType = ButtonType;
}
