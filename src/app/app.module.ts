import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule }    from '@angular/common/http';

import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './services/in-memory-data.service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ItemsComponent } from './components/items/items.component';
import { TransactionsComponent } from './components/transactions/transactions.component';
import { ConversionsComponent } from './components/conversions/conversions.component';
import { ItemDetailComponent } from './components/items/item-detail/item-detail.component';
import { MessagesComponent } from './components/messages/messages.component';
import { ItemSearchComponent } from './components/items/item-search/item-search.component';

@NgModule({
  declarations: [
    AppComponent,
    ItemsComponent,
    TransactionsComponent,
    ConversionsComponent,
    ItemDetailComponent,
    MessagesComponent,
    ItemSearchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,

    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false }
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
