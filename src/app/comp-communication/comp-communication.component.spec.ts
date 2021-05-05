import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompCommunicationComponent } from './comp-communication.component';

describe('CompCommunicationComponent', () => {
  let component: CompCommunicationComponent;
  let fixture: ComponentFixture<CompCommunicationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompCommunicationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CompCommunicationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
