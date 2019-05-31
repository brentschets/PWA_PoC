import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NotitieListComponent } from './notitie-list.component';

describe('NotitieListComponent', () => {
  let component: NotitieListComponent;
  let fixture: ComponentFixture<NotitieListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NotitieListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NotitieListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
