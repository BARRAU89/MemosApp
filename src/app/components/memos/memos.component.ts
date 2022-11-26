import { Component, OnInit } from '@angular/core';
import { UiService } from 'src/app/services/ui.service';
import { Memo } from 'src/data/memo';

@Component({
  selector: 'app-memos',
  templateUrl: './memos.component.html',
  styleUrls: ['./memos.component.css']
})
export class MemosComponent implements OnInit{
  public memos: Memo [] //= []

  constructor(ui: UiService) {
    this.memos = ui.memos
    ui
      .whenMemosUpdated()
      .subscribe(memos => this.memos = memos)
  }

  ngOnInit(): void {
    
  }

  // deleteMemoById (id:number) :void {
  //   console.log('deleteMemoById '+ id)
  //   const index = this.memos.findIndex((memo) => {return memo.id === id})
  //   this.memos.splice(index,1)
  // }

  // addMemo (memo: Memo):void {
  //   this.memos.push (memo)
  // }

}
