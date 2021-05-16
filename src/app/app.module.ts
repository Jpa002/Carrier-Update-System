import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { LoadBoardComponent } from './load-board/load-board.component';


@NgModule({
  declarations: [
    AppComponent,
    LoadBoardComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {path: 'load-board', component: LoadBoardComponent},
      
    ]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
