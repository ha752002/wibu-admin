import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DragDropImgComponent } from './drag-drop-img.component';

describe('DragDropImgComponent', () => {
  let component: DragDropImgComponent;
  let fixture: ComponentFixture<DragDropImgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DragDropImgComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DragDropImgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
