import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { UiService } from 'src/app/services/ui.service';
import { Memo } from 'src/data/memo';

@Component({
  selector: 'app-edit-memo',
  templateUrl: './edit-memo.component.html',
  styleUrls: ['./edit-memo.component.css']
})
export class EditMemoComponent implements OnInit{
public memo: Memo = new Memo (-1, '' , null, '', '')
//@Output() apply : EventEmitter <Memo> = new EventEmitter
private ui: UiService

constructor(ui: UiService) {
  this.ui = ui
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
  this.ui.addMemo(
    {
      ...this.memo,
      id: Math.random()
    }
  )
    //lines 45-53 are exactly to the 'spread out' operator of line 42
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
