import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'

// interface Post {
//   id: number;
//   postName: string;
// }

@Component({
  selector: 'app-practice-block',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './practice-block.component.html',
  styleUrl: './practice-block.component.css'
})
export class PracticeBlockComponent {
  message: string = "Message From Typestript Component File"
  imgUrl: string = 'https://logowik.com/content/uploads/images/angular-new6082.logowik.com.webp'

  postTitle!: string;
  postDetails!: string;
  imageURL!: string;
  postURL!: string;
  addBackground!: boolean;

   // for directives exerise

   userName!: string;
   userEmail!: string;
   userAddress!: string;

   userArray: Array<any> = [];

   
  bool:boolean = false;
  buttonClick(){
    this.bool = !this.bool;
    // console.log(this.bool);
  }

  // onKeyup(username: any){
  //   console.log(username)
  // }
  usernames: string[] = [];

  // onKeyup(username: string): void {
  //   if (username.trim()) {
  //     this.usernames.push(username.trim());
  //   }
  // }

  onKeyup(username: string, inputElement: HTMLInputElement): void {
    if (username.trim()) {
      this.usernames.push(username.trim());
      inputElement.value = ''; // Clear the input field after adding the username
    }
  }

  deleteUsername(index: number): void {
    this.usernames.splice(index, 1);
  }

  postArray:Array<string> = ['Post 1','Post 2','Post 3','Post 4','Post 5'];

  objArray:Array<any> = [
    { id: 1, postName: 'Post Name 1'},
    { id: 2, postName: 'Post Name 2'},
    { id: 3, postName: 'Post Name 3'},
    { id: 4, postName: 'Post Name 4'},
    { id: 5, postName: 'Post Name 5'},
  ]

  addNew(){
    this.objArray.push({ id: 6, postName: 'Post Name 6'});
  }
  // // onDelete(post: Post): void {
  //   // let index =this.objArray.indexOf(post);
  //   this.objArray.splice(index, 1);
  // }
  onDelete(index: number): void {
    // let index =this.objArray.indexOf(post);
    this.objArray.splice(index, 1);
  }

  colorButton:string = "Not selected"

  onClickBtn(status: string): void{
    this.colorButton=status;
  }


  // for directives exerise
  onSave(){
    this.userArray.push({
      "userName": this.userName,
      "userEmail": this.userEmail,
      "userAddress": this.userAddress
    });
    console.log(this.userArray);
  }

  onClickDelete(index:any){
    this.userArray.splice(index, 1);
  }
}
