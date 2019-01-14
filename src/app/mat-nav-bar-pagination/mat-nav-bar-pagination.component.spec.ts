import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MatNavBarPaginationComponent } from './mat-nav-bar-pagination.component';

describe('MatNavBarPaginationComponent', () => {
  let component: MatNavBarPaginationComponent;
  let fixture: ComponentFixture<MatNavBarPaginationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MatNavBarPaginationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MatNavBarPaginationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
