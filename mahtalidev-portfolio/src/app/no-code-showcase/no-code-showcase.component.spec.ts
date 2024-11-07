import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NoCodeShowcaseComponent } from './no-code-showcase.component';

describe('NoCodeShowcaseComponent', () => {
  let component: NoCodeShowcaseComponent;
  let fixture: ComponentFixture<NoCodeShowcaseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NoCodeShowcaseComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NoCodeShowcaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
