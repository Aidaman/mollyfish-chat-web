import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonType } from './button-type.enum';

@Component({
  selector: 'mfc-button',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './button.component.html',
  styleUrl: './button.component.sass',
})
export class ButtonComponent implements OnInit {
  @Input() buttonType: ButtonType = ButtonType.Primary;
  @Output() click: EventEmitter<void> = new EventEmitter();

  public currentClasses: Record<string, boolean> = {};

  ngOnInit(): void {
    this.setCurrentClasses();
  }

  public setCurrentClasses(): void {
    this.currentClasses = {
      'mollyfish-button--primary': this.buttonType === ButtonType.Primary,
      'mollyfish-button--secondary': this.buttonType === ButtonType.Secondary,
      'mollyfish-button--accent': this.buttonType === ButtonType.Accent,
      'mollyfish-button--positive': this.buttonType === ButtonType.Positive,
      'mollyfish-button--error': this.buttonType === ButtonType.Error,
    };
  }

  public emitClick(): void {
    if (!this.click) return;

    this.click.emit();
  }
}
