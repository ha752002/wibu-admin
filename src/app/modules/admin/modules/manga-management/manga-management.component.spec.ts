import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MangaManagementComponent } from './manga-management.component';

describe('MangaManagementComponent', () => {
  let component: MangaManagementComponent;
  let fixture: ComponentFixture<MangaManagementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MangaManagementComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MangaManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
