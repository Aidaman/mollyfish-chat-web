import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { ButtonComponent } from './shared/components/button/button.component';
import { ButtonType } from './shared/components/button/button-type.enum';
import { AvatarComponent } from './shared/components/avatar/avatar.component';
import { BoxConstraint } from './shared/box-sizing';

@Component({
  selector: 'app-root',
  standalone: true,
  template: `
    <router-outlet></router-outlet>
    <mfc-avatar
      src="https://cdn.fotofits.com/petzlover/gallery/img/l/yorkshire-terrier-698831.jpg"
      alt="puppy!!"
    />
    <mfc-avatar
      src="https://cdn.fotofits.com/petzlover/gallery/img/l/yorkshire-terrier-698831.jpg"
      alt="puppy!!"
      sizeType="xs"
    />
    <mfc-avatar
      src="https://cdn.fotofits.com/petzlover/gallery/img/l/yorkshire-terrier-698831.jpg"
      alt="puppy!!"
      sizeType="sm"
    />
    <mfc-avatar
      src="https://cdn.fotofits.com/petzlover/gallery/img/l/yorkshire-terrier-698831.jpg"
      alt="puppy!!"
      sizeType="md"
    />
    <mfc-avatar
      src="https://cdn.fotofits.com/petzlover/gallery/img/l/yorkshire-terrier-698831.jpg"
      alt="puppy!!"
      sizeType="lg"
    />
    <mfc-avatar
      src="https://cdn.fotofits.com/petzlover/gallery/img/l/yorkshire-terrier-698831.jpg"
      alt="puppy!!"
      sizeType="xl"
    />
    <mfc-avatar
      src="https://cdn.fotofits.com/petzlover/gallery/img/l/yorkshire-terrier-698831.jpg"
      alt="puppy!!"
      [size]="customSize"
    />
  `,
  imports: [CommonModule, RouterOutlet, ButtonComponent, AvatarComponent],
})
export class AppComponent {
  public readonly buttonType = ButtonType;

  public readonly customSize: BoxConstraint = {
    width: '512px',
    height: '512px',
  };
}
