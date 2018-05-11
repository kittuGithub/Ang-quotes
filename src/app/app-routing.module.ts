import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { QuotesComponent } from './quotes/quotes.component';
import { AuthorsComponent } from './authors/authors.component';

const routes: Routes = [
  {path: 'quotes', component: QuotesComponent},
  {path: 'authors', component: AuthorsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
