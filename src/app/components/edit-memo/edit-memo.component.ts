import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Memo } from 'src/data/memo';

@Component({
  selector: 'app-edit-memo',
  templateUrl: './edit-memo.component.html',
  styleUrls: ['./edit-memo.component.css']
})
export class EditMemoComponent implements OnInit{
public memo: Memo = new Memo (-1, '' , null, '', '')
@Output() apply : EventEmitter <Memo> = new EventEmitter

constructor () {

}

ngOnInit(): void {

}

updateSender(sender: string):void {
  this.memo.sender = sender
}

updateSubject(subject: string):void {
  this.memo.subject = subject
}

// updateTime(time: Date):void {
//   this.memo.time = time
// }

updateMessage(message: string):void {
  this.memo.message = message
}

onApply() :void {
  console.log('Apply')
  this.apply.emit(
    {
      ...this.memo,
      id: Math.random()
    }
  )
    //lines 45-53 are exactly to the 'spread out' operator of line 41
    // this.apply.emit(
    //   {
    //     id: this.memo.id,
    //     sender: this.memo.sender,
    //     subject: this.memo.subject,
    //     time: this.memo.time, 
    //     message: this.memo.message,
    //   }
    // )
}


onCancel() :void {
  console.log('Cancel')
}

}
