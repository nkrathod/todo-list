import { Routes } from '@angular/router';
import { AllTasksComponent } from './components/pages/all-tasks/all-tasks.component';
import { ImportantTaskComponent } from './components/pages/important-task/important-task.component';
import { CompletedTaskComponent } from './components/pages/completed-task/completed-task.component';

export const routes: Routes = [{
    path: '',
    component: AllTasksComponent
},
{
    path: 'importants',
    component: ImportantTaskComponent
},{
    path: 'completed',
    component: CompletedTaskComponent
}];
