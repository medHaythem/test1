import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CmpComponent } from './cmp.component';
import { QuizzTest } from '../data.model';

describe('CmpComponent', () => {
  let component: CmpComponent;
  let fixture: ComponentFixture<CmpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CmpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CmpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
