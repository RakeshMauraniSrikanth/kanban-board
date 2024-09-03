import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Task } from '../../model/Task';
import { MatIcon } from '@angular/material/icon';
import { MatTooltip } from '@angular/material/tooltip';
import { TranslateModule } from '@ngx-translate/core';
import { MatDialog } from '@angular/material/dialog';
import { DeleteConfirmationDialogComponent } from '../delete-confirmation-dialog/delete-confirmation-dialog.component';

@Component({
  selector: 'app-card-task',
  standalone: true,
  imports: [CommonModule, MatIcon, MatTooltip, TranslateModule, DeleteConfirmationDialogComponent],
  templateUrl: './card-task.component.html',
  styleUrl: './card-task.component.scss'
})
export class CardTaskComponent {
  @Input() task!: Task; 
  @Output() delete = new EventEmitter<void>();
  @Output() moveToNext = new EventEmitter<void>();
  @Output() moveToPrevious = new EventEmitter<void>();

  constructor(private dialog: MatDialog) {}

  onDelete():void {
const dialogRef = this.dialog.open(DeleteConfirmationDialogComponent);
dialogRef.afterClosed().subscribe(result => {
  if(result){
    this.delete.emit();
  }
});
  }

  onMoveToNext() {
    this.moveToNext.emit();
  }

  onMoveToPrevious() {
    this.moveToPrevious.emit();
  }
}
