import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { UiService } from 'src/app/services/ui.service';
import { Memo } from 'src/data/memo';

@Component({
  selector: 'app-memos',
  templateUrl: './memos.component.html',
  styleUrls: ['./memos.component.css']
})
export class MemosComponent implements OnInit, OnDestroy {
  public memos: Memo [] //= []
  private memosSubscription: Subscription

  constructor(ui: UiService) {
    this.memos = ui.memos
    this.memosSubscription = ui
      .whenMemosUpdated()
      .subscribe(memos => this.memos = memos)
  }

  ngOnInit(): void {
    
  }

// Problem: The subscription will outlive the MemosComponent object, therefore the
// function that is executed everytime the memos are updated will continue to try to 
// access destroyed memory. 

  ngOnDestroy(): void {
    this.memosSubscription.unsubscribe()
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
