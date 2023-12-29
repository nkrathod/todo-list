import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpService } from '../../../services/http.service';
import { DatePipe } from '@angular/common';
import { TudoCardComponent } from '../../tudo-card/tudo-card.component';
import { StateService } from '../../../services/state.service';

@Component({
  selector: 'app-all-tasks',
  standalone: true,
  imports: [FormsModule, DatePipe, TudoCardComponent],
  templateUrl: './all-tasks.component.html',
  styleUrl: './all-tasks.component.scss'
})
export class AllTasksComponent {
  newTask= "";
  tudoList: any[] = [];
  initialTudoList: any[] = [];
  time = new Date();
  
  httpService = inject(HttpService);
  stateService = inject(StateService);

  ngOnInit() {
    this.stateService.searchSubject.subscribe((value) => {
      if(value){
        this.tudoList = this.initialTudoList.filter(t => t.title.toLowerCase().includes(value.toLowerCase()));
      }
      else{
        this.tudoList = this.initialTudoList;
      }
    })
    this.getAllTudos();
  }

  addTudo(){
    console.log("AddTask ", this.newTask);
    this.httpService.addTudo(this.newTask).subscribe(() => {
      this.newTask= "";
      console.log("task added successfully");
      this.getAllTudos();
    });
  }

  getAllTudos(){
    this.httpService.getAllTudos().subscribe((res: any) => {
      console.log("task : ", res)
      if(res && res.length > 0){
        this.initialTudoList= this.tudoList = res;
      }
    });
  }

  onImportant(todo: any){
    todo.isImportant = true;
    this.httpService.updateTudo(todo).subscribe(() => {
      console.log("task important: ", todo);
    });
  }

  onUnImportant(todo: any){
    todo.isImportant = false;
    this.httpService.updateTudo(todo).subscribe(() => {
      console.log("task unimportant: ", todo);
    });
  }

  onComplete(todo: any){
    todo.isCompleted = true;
    this.httpService.updateTudo(todo).subscribe(() => {
      console.log("task completed: ", todo);
    });
  }

  onUnComplete(todo: any){
    todo.isCompleted = false;
    this.httpService.updateTudo(todo).subscribe(() => {
      console.log("task uncompleted: ", todo);
    });
  }

  onDelete(tudo: any){
    this.httpService.deleteTudo(tudo).subscribe(() => {
      console.log("tudo deleted successfully");
      this.getAllTudos();
    })
  }
}
