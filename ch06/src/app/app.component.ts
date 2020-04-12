import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-app';

  constructor() {
    this.changeTitle(this.setTitle);
  }

  private setTitle = () => {
    this.title = 'Hello Angular 9';
  }

  private changeTitle(callback) {
    setTimeout(() => {
      callback();
    }, 2000);
  }
}
