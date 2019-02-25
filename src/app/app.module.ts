import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ItemsComponent } from './components/items/items.component';
import { TransactionsComponent } from './components/transactions/transactions.component';
import { ConversionsComponent } from './components/conversions/conversions.component';

@NgModule({
  declarations: [
    AppComponent,
    ItemsComponent,
    TransactionsComponent,
    ConversionsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
