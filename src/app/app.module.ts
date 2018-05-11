import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { MaterialModule } from './material.module';
import { QuotesComponent } from './quotes/quotes.component';
import { CreateQuoteComponent } from './create-quote/create-quote.component';
import { EditQuoteComponent } from './edit-quote/edit-quote.component';
import { AuthorsComponent } from './authors/authors.component';
import { CreateAuthorComponent } from './create-author/create-author.component';
import { EditAuthorComponent } from './edit-author/edit-author.component';


@NgModule({
  declarations: [
    AppComponent,
    QuotesComponent,
    CreateQuoteComponent,
    EditQuoteComponent,
    AuthorsComponent,
    CreateAuthorComponent,
    EditAuthorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
