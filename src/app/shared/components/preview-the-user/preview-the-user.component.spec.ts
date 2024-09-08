import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PreviewTheUserComponent } from './preview-the-user.component';

describe('PreviewTheUserComponent', () => {
  let component: PreviewTheUserComponent;
  let fixture: ComponentFixture<PreviewTheUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PreviewTheUserComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PreviewTheUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
