import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AvatarComponent } from './avatar.component';

// Why even create tests for this?
describe('AvatarComponent', () => {
  let component: AvatarComponent;
  let fixture: ComponentFixture<AvatarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AvatarComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(AvatarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
