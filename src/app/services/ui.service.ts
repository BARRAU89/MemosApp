import { Injectable } from '@angular/core';
import { Memo } from 'src/data/memo';

@Injectable({
  providedIn: 'root'
})
export class UiService {
  public memos: Memo [] = [
    new Memo(0,'message 1', null, 'sender 1', 'subject 1'),
    new Memo(1,'message 2', null, 'sender 2', 'subject 2'),
  ]

  constructor() { }


  deleteMemoById (id:number) :void {
    console.log('deleteMemoById '+ id)
    const index = this.memos.findIndex((memo) => {return memo.id === id})
    this.memos.splice(index,1)
  }

  addMemo (memo: Memo):void {
    this.memos.push (memo)
  }



}
