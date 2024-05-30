import { Component , ViewChild, AfterViewInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PostComponent } from "./post/post.component";
import { NavbarbasicComponent } from "./navbarbasic/navbarbasic.component";
// import { PostListComponent } from './post-list/post-list.component';
@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    imports: [RouterOutlet, PostComponent, NavbarbasicComponent]
})
export class AppComponent implements AfterViewInit {
  title = 'my-angular-app';
  parentMessage: string = "Messing coming from parent component which is main Parent"
  message!:string;
  fromChildOutput!: string;
  @ViewChild(PostComponent) childComp: any;

  constructor() {
    console.log(this.childComp);
  }
  ngAfterViewInit(): void {
    console.log(this.childComp);
    this.message = this.childComp.messagePost
  }

  reciveMessage($event: any){
  this.fromChildOutput = $event;
  }
}
