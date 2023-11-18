import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListPartialComponent } from './list-partial.component';

describe('ListPartialComponent', () => {
  let component: ListPartialComponent;
  let fixture: ComponentFixture<ListPartialComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListPartialComponent]
    });
    fixture = TestBed.createComponent(ListPartialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
