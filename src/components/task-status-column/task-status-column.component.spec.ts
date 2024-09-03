import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskStatusColumnComponent } from './task-status-column.component';

describe('TaskStatusColumnComponent', () => {
  let component: TaskStatusColumnComponent;
  let fixture: ComponentFixture<TaskStatusColumnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TaskStatusColumnComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TaskStatusColumnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
