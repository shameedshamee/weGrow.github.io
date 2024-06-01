import { Component } from '@angular/core';

@Component({
  selector: 'app-practice-block',
  standalone: true,
  imports: [],
  templateUrl: './practice-block.component.html',
  styleUrl: './practice-block.component.css'
})
export class PracticeBlockComponent {
  message: string = "Message From Typestript Component File"
  imgUrl: string = 'https://logowik.com/content/uploads/images/angular-new6082.logowik.com.webp'

  bool:boolean = false;
  buttonClick(){
    this.bool = !this.bool;
    // console.log(this.bool);
  }
}
