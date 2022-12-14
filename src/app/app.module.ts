import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MemoComponent } from './components/memo/memo.component';
import { MemosComponent } from './components/memos/memos.component';
import { EditMemoComponent } from './components/edit-memo/edit-memo.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    MemoComponent,
    MemosComponent,
    EditMemoComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
