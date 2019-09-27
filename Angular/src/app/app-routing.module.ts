import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListComponent } from './list/list.component';
import { MiddlewareComponent } from './middleware/middleware.component';
import { PaginatedComponent } from './paginated/paginated.component';
import { DisplayComponent } from './display/display.component';

const routes: Routes = [{ path: 'list', component: ListComponent },
{ path: 'middleware', component: MiddlewareComponent },
{ path: 'pagination', component: PaginatedComponent },
{ path: 'display', component: DisplayComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
