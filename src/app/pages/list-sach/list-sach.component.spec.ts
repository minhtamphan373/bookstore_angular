import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListSachComponent } from './list-sach.component';

describe('ListSachComponent', () => {
  let component: ListSachComponent;
  let fixture: ComponentFixture<ListSachComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListSachComponent]
    });
    fixture = TestBed.createComponent(ListSachComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
