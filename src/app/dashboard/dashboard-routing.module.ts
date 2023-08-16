
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TablelistComponent } from './tablelist/tablelist.component';

const routes: Routes = [
    {
      path: '',
      component: TablelistComponent
    }
  ];

  @NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
export class DashboardRoutingModule {}

