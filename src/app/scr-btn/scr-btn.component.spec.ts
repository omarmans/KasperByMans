import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SCRBtnComponent } from './scr-btn.component';

describe('SCRBtnComponent', () => {
  let component: SCRBtnComponent;
  let fixture: ComponentFixture<SCRBtnComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SCRBtnComponent]
    });
    fixture = TestBed.createComponent(SCRBtnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
