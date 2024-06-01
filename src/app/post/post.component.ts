import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { PostListComponent } from '../post-list/post-list.component';
@Component({
  selector: 'app-post',
  standalone: true,
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css'],
  imports: [PostListComponent],
})
export class PostComponent implements OnInit {

  title:string = "List of Posts"
  messagePost:string = "Transfer data throw Data Binding and components relations"
  
  postParentMessage:string = "Message coming from the post parent"
  
  outputChildMessage: string = "Message from  Child Component Via Output";
  
  @Input() fromParent!: string ;
  
  @Output() messageEvent = new EventEmitter<string>();
  constructor(){}

  ngOnInit(): void {
    
  }

  sendMessage(){
     this.messageEvent.emit(this.outputChildMessage);
  }
}
