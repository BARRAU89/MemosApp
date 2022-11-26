import { Injectable } from '@angular/core';
import { Memo } from 'src/data/memo';
import { HttpClient } from '@angular/common/http'
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UiService {
  public memos: Memo [] = [
    // new Memo(0,'message 1', null, 'sender 1', 'subject 1'),
    // new Memo(1,'message 2', null, 'sender 2', 'subject 2'),
  ]
  private memosSubject: Subject<Memo[]> = new Subject()
  private http: HttpClient

  constructor(http: HttpClient) {
    this.http = http  
    this.updateMemos()
  }

  updateMemos (): void {
    this.http
      .get<Memo []>('http://localhost:3000/memos')
      .subscribe(memos => {
        console.log(memos)
        this.memos = memos
        this.memosSubject.next(this.memos)
    })
  }


  deleteMemoById (id:number) :void {
    console.log('deleteMemoById '+ id)
    // const index = this.memos.findIndex((memo) => {return memo.id === id})
    // this.memos.splice(index,1)
    this.http
      .delete(`http://localhost:3000/memos/${id}`)  //the `` allows to introduce the value of a variable 
      .subscribe(() => this.updateMemos())         // inside of a string and consider the whole as a string
  }

  addMemo (memo: Memo):void {
    this.http
      .post('http://localhost:3000/memos', memo)
      .subscribe (() => {this.updateMemos()})
    //this.memos.push (memo)
  }

  whenMemosUpdated(): Observable<Memo[]> {
    return this.memosSubject.asObservable()
  }



}
