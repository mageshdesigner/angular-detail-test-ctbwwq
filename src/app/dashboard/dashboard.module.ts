import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TablelistComponent } from './tablelist/tablelist.component';

// Material Modules
import { MatTableModule } from '@angular/material/table';
import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';
import {MatButtonModule} from '@angular/material/button';
import { DashboardRoutingModule } from './dashboard-routing.module';

@NgModule({
  declarations: [
    TablelistComponent
  ],
  imports: [
    MatTableModule,
    MatIconModule,
    MatDividerModule,
    MatButtonModule,

    DashboardRoutingModule,
    CommonModule
  ]
})
export class DashboardModule { }
 