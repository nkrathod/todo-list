import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-tudo-card',
  standalone: true,
  imports: [],
  templateUrl: './tudo-card.component.html',
  styleUrl: './tudo-card.component.scss'
})
export class TudoCardComponent {
@Input() todo: any = {};
@Output() important = new EventEmitter<any>();
@Output() complete = new EventEmitter<any>();
@Output() unimportant = new EventEmitter<any>();
@Output() uncomplete = new EventEmitter<any>();
@Output() delete = new EventEmitter<any>();

markUnimportant(todo: any){
  this.unimportant.emit(todo);
}
markImportant(todo: any){
  this.important.emit(todo);
}
markComplete(todo: any){
  this.complete.emit(todo);
}
markUncomplete(todo: any){
  this.uncomplete.emit(todo);
}
deleteTudo(todo: any){
  this.delete.emit(todo);
}
}
