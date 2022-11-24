import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Memo } from 'src/data/memo';

@Component({
  selector: 'app-memo',
  templateUrl: './memo.component.html',
  styleUrls: ['./memo.component.css']
})
export class MemoComponent implements OnInit {
  @Input() memo: Memo | null = null
  @Output() remove: EventEmitter<undefined> = new EventEmitter

  constructor () {
    
  }

  ngOnInit(): void {
  } 

  onDelete():void {
    if (this.memo === null) {
      console.log ('No memo!')
    } else {
      // console.log('Delete '+ this.memo.id)
      this.remove.emit()
    }


  }

}

// export - this thing should be useable outside of this file. without exporting, then 
//          the code is useable only inside the memo.component.ts and not outside. 

// implements - 