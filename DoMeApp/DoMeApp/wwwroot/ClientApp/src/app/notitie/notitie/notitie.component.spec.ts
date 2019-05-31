import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NotitieComponent } from './notitie.component';

describe('NotitieComponent', () => {
  let component: NotitieComponent;
  let fixture: ComponentFixture<NotitieComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NotitieComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NotitieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
