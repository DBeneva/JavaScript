import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = '3';
  classes = ['test', 'test-1'];
  showText = true;

  changeTitleHandler(inputEl: HTMLInputElement): void {
    this.title = inputEl.value;
    inputEl.value = '';
  }

  toggleText(event: MouseEvent, ...args: number[]): void {
    event.preventDefault();
    this.showText = !this.showText;
    console.log(args);
    
  }
  // title = 3;
  // users = [
  //   {
  //     name: 'Ivan 1',
  //     age: 21
  //   },
  //   {
  //     name: 'Ivan 2',
  //     age: 22
  //   },
  //   {
  //     name: 'Ivan 3',
  //     age: 23
  //   }
  // ];
  // btnClickHandler(): void {
  //   console.log('Button was clicked');    
  //   //this.title++;
  //   const current = this.title++;
  //   this.users.push({ name: `Ivan ${current}`, age: 20 + current });
  // } 
}
