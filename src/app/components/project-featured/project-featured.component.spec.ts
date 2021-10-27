import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectFeaturedComponent } from './project-featured.component';

describe('ProjectFeaturedComponent', () => {
  let component: ProjectFeaturedComponent;
  let fixture: ComponentFixture<ProjectFeaturedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjectFeaturedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectFeaturedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
