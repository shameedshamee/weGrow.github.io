import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PostComponent } from "./post/post.component";
import { NavbarbasicComponent } from "./navbarbasic/navbarbasic.component";
@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet, PostComponent, NavbarbasicComponent]
})
export class AppComponent {
  title = 'my-angular-app';
}
