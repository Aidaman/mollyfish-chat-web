import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BoxConstraint } from '../../box-sizing/box-constraints.type';
import { BoxStandartSizes } from '../../box-sizing/box-standard-sizes.type';

@Component({
  selector: 'mfc-avatar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './avatar.component.html',
  styleUrl: './avatar.component.sass',
})
export class AvatarComponent implements OnInit {
  @Input({ required: true }) public src: string = '';
  @Input() public alt?: string;
  @Input() public isRounded?: boolean = true;
  @Input() public size?: BoxConstraint;
  @Input() public sizeType?: BoxStandartSizes;

  public currentClasses: Record<string, boolean> = {};
  public currentStyling: Record<string, string> = {};

  ngOnInit(): void {
    this.setCurrentClasses();
  }

  public setCurrentClasses(): void {
    this.currentStyling['borderRadius'] = this.isRounded ? '50%' : '1rem';

    if (this.size) {
      this.currentStyling = { ...this.currentStyling, ...this.size };
    } else if (this.sizeType) {
      this.currentClasses = {
        'mollyfish-avatar--xs': this.sizeType === 'xs',
        'mollyfish-avatar--sm': this.sizeType === 'sm',
        'mollyfish-avatar--md': this.sizeType === 'md',
        'mollyfish-avatar--lg': this.sizeType === 'lg',
        'mollyfish-avatar--xl': this.sizeType === 'xl',
      };
    } else this.currentClasses = { 'mollyfish-avatar--flexible': true };
  }
}
