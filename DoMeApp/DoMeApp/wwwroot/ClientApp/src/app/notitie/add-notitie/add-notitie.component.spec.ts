import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import {AddNotitieComponent } from './add-notitie.component';

describe('AddNotitieComponent', () => {
  let component: AddNotitieComponent;
  let fixture: ComponentFixture<AddNotitieComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddNotitieComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddNotitieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
