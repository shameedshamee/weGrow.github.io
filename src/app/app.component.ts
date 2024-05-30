import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PostComponent } from "./post/post.component";
import { NavbarbasicComponent } from "./navbarbasic/navbarbasic.component";
import { PostListComponent } from './post-list/post-list.component';
@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet, PostComponent, NavbarbasicComponent, PostListComponent]
})
export class AppComponent {
  title = 'my-angular-app';
  parentMessage: string = "Messing coming from parent component"
}
