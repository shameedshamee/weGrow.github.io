import { Component, OnInit, Input } from '@angular/core';
import { PostListComponent } from '../post-list/post-list.component';
@Component({
  selector: 'app-post',
  standalone: true,
  templateUrl: './post.component.html',
  styleUrl: './post.component.css',
  imports: [PostListComponent],
})
export class PostComponent implements OnInit {

  title:string = "List of Posts"
  massagePost:string = "Transfer data throw Data Binding and components relations"
  
  postParentMessage:string = "Message coming from the post parent"
  @Input() fromParent!: string ;
  
  constructor(){}

  ngOnInit(): void {
    
  }
}
