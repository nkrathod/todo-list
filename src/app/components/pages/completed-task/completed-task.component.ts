import { Component, inject } from '@angular/core';
import { HttpService } from '../../../services/http.service';
import { TudoCardComponent } from '../../tudo-card/tudo-card.component';

@Component({
  selector: 'app-completed-task',
  standalone: true,
  imports: [TudoCardComponent],
  templateUrl: './completed-task.component.html',
  styleUrl: './completed-task.component.scss'
})
export class CompletedTaskComponent {
  tudoList: any[] = [];
  httpService = inject(HttpService)

  ngOnInit() {
    this.getAllTudos();
  }

  getAllTudos(){
    this.httpService.getAllTudos().subscribe((res: any) => {
      console.log("task : ", res)
      if(res && res.length > 0){
        this.tudoList = res;
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
