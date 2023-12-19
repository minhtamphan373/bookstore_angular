import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LibByCategoryComponent } from './lib-by-category.component';

describe('LibByCategoryComponent', () => {
  let component: LibByCategoryComponent;
  let fixture: ComponentFixture<LibByCategoryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LibByCategoryComponent]
    });
    fixture = TestBed.createComponent(LibByCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
