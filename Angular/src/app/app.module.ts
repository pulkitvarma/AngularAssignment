import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ApolloModule, Apollo } from 'apollo-angular';
import { HttpLinkModule, HttpLink } from 'apollo-angular-link-http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { ListComponent } from '../app/list/list.component';
import { MiddlewareComponent } from './middleware/middleware.component';
import { PaginatedComponent } from './paginated/paginated.component';
import { MatTableModule } from '@angular/material';
import { MatPaginatorModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DisplayComponent } from './display/display.component';
@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    MiddlewareComponent,
    PaginatedComponent,
    DisplayComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ApolloModule,
    HttpClientModule,
    HttpLinkModule,
    MatTableModule,
    MatPaginatorModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(
    apollo: Apollo,
    httpLink: HttpLink) {
    apollo.create({
      link: httpLink.create({
        uri: 'https://api.graph.cool/simple/v1/ciyz901en4j590185wkmexyex',
      }),
      cache: new InMemoryCache()
    });
  }
}
