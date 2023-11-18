import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VotePartialComponent } from './vote-partial.component';

describe('VotePartialComponent', () => {
  let component: VotePartialComponent;
  let fixture: ComponentFixture<VotePartialComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VotePartialComponent]
    });
    fixture = TestBed.createComponent(VotePartialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
