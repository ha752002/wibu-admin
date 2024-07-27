import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PreviewTheStoryComponent } from './preview-the-story.component';

describe('PreviewTheStoryComponent', () => {
  let component: PreviewTheStoryComponent;
  let fixture: ComponentFixture<PreviewTheStoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PreviewTheStoryComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PreviewTheStoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
