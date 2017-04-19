import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FilteredButtonGroupComponent } from './filtered-button-group.component';

describe('FilteredButtonGroupComponent', () => {
  let component: FilteredButtonGroupComponent;
  let fixture: ComponentFixture<FilteredButtonGroupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FilteredButtonGroupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FilteredButtonGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
