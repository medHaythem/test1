import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestcmptComponent } from './testcmpt.component';

describe('TestcmptComponent', () => {
  let component: TestcmptComponent;
  let fixture: ComponentFixture<TestcmptComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestcmptComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestcmptComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
