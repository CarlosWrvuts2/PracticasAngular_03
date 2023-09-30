import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OperasBasComponent } from './operas-bas.component';

describe('OperasBasComponent', () => {
  let component: OperasBasComponent;
  let fixture: ComponentFixture<OperasBasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OperasBasComponent]
    });
    fixture = TestBed.createComponent(OperasBasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
