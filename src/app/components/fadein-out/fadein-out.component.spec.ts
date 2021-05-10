import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FadeinOutComponent } from './fadein-out.component';

describe('FadeinOutComponent', () => {
  let component: FadeinOutComponent;
  let fixture: ComponentFixture<FadeinOutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FadeinOutComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FadeinOutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
