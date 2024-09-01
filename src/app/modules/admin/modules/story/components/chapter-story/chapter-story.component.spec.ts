import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChapterStoryComponent } from './chapter-story.component';

describe('ChapterStoryComponent', () => {
  let component: ChapterStoryComponent;
  let fixture: ComponentFixture<ChapterStoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ChapterStoryComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChapterStoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
