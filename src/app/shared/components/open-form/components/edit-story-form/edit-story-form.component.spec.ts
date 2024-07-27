import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditStoryFormComponent } from './edit-story-form.component';

describe('EditStoryFormComponent', () => {
  let component: EditStoryFormComponent;
  let fixture: ComponentFixture<EditStoryFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EditStoryFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditStoryFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
