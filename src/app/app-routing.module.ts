import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CardDetailsComponent} from './card-details/card-details.component'
import { CardComponent } from './card/card.component';

const routes: Routes = [
  { path: "", component: CardComponent },
  { path: 'details/:id', component: CardDetailsComponent },
  // Other routes
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})


export class AppRoutingModule { }
