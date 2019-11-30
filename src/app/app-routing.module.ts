import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddTaskComponent } from './Addtask/addtask.component';
import { SearchDeleteComponent } from './search-delete/search-delete.component';



const routes: Routes = [
  {path: "", redirectTo: 'search', pathMatch: 'full' },
 {path: "add", component: AddTaskComponent},
{path: "search", component: SearchDeleteComponent},



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
