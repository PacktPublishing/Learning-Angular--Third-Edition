import { Component } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-app';
  title$ = new Observable(observer => {
    setInterval(() => {
      observer.next();
    }, 2000);
  });

  constructor() {
    this.title$.subscribe(this.setTitle);
  }

  private setTitle = () => {
    const timestamp = new Date().getMilliseconds();
    this.title = `Hello Angular 10 (${timestamp})`;
  }

  private changeTitle(callback) {
    setTimeout(() => {
      callback();
    }, 2000);
  }

  private onComplete() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve();
      }, 2000);
    });
  }
}
