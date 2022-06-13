# Learning Angular - Third Edition

<a href="https://www.packtpub.com/product/learning-angular-10-third-edition/9781839210662?utm_source=github&utm_medium=repository&utm_campaign=9781839210662"><img src="https://github.com/PacktPublishing/Learning-Angular--Third-Edition/raw/master/Book%20Cover%20for%20Learning%20Angular%20-%20Third%20Edition.jpg" alt="Learning Angular - Third Edition" height="256px" align="right"></a>

This is the code repository for [Learning Angular - Third Edition](https://www.packtpub.com/product/learning-angular-10-third-edition/9781839210662?utm_source=github&utm_medium=repository&utm_campaign=9781839210662), published by Packt.

**A no-nonsense beginner's guide to building web applications with Angular 10 and TypeScript**

## What is this book about?
Angular, loved by millions of web developers around the world, continues to be one of the top JavaScript frameworks thanks to its regular updates and new features that enable fast, cross-platform, and secure frontend web development. With Angular, you can achieve high performance using the latest web techniques and extensive integration with web tools and integrated development environments (IDEs).

This book covers the following exciting features: 
* Use the Angular CLI to scaffold, build, and deploy a new Angular application
* Build components, the basic building blocks of an Angular application, and learn how to make them interact with each other
* Understand the different types of templates supported by Angular
* Create HTTP data services to access APIs and provide data to components
* Enhance your application’s UX with Angular components and animations

If you feel this book is for you, get your [copy](https://www.amazon.com/dp/1839210664) today!

<a href="https://www.packtpub.com/?utm_source=github&utm_medium=banner&utm_campaign=GitHubBanner"><img src="https://raw.githubusercontent.com/PacktPublishing/GitHub/master/GitHub.png" 
alt="https://www.packtpub.com/" border="5" /></a>


## Instructions and Navigations
All of the code is organized into folders. For example, Chapter01.

The code will look like the following:
```
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Hello Angular 10';
}

```

**Following is what you need for this book:**
The Angular TypeScript book is for JavaScript and full-stack developers who want to enter the world of frontend development with Angular or migrate to the Angular framework to build professional web applications. Familiarity with web and programming concepts will assist with understanding the content covered in the book.

With the following software and hardware list you can run all code files present in the book (Chapter 1-15).

### Software and Hardware List

| Chapter  | Software required                                 | OS required                        |
| -------- | ------------------------------------------------- | -----------------------------------|
| 1-13     | Node.js                                           | Windows, Mac OS X, and Linux (Any) |
| 1-13     | Node Package Manager (npm) included with Node.js  | Windows, Mac OS X, and Linux (Any) |
| 1-13     | Git                                               | Windows, Mac OS X, and Linux (Any) |
| 1-13     | TypeScript                                        | Windows, Mac OS X, and Linux (Any) |
| 1-13     | Visual Studio Code (VSCode)                       | Windows, Mac OS X, and Linux (Any) |


## Errata
* Page 54 (code snippet line 2 and 3): **let propertyValue: string = this[key];** _should be_ **let propertyValue: string = target[key];** and **if (delete this[key]) {** _should be_ **if (delete target[key]) {**
* Page 55 (code snippet line 3 and 4): **let propertyValue: string = this[key];** _should be_ **let propertyValue: string = target[key];** and **if (delete this[key]) {** _should be_ **if (delete target[key]) {**
* Page 12 (code snippet line 1): **import { Component } from ‹@angular/core›;** _should be_ **import { Component } from '@angular/core';** 
* Page 250, step 5 (code snippet line 1): <div *ngFor="let power of powers.controls; let i=index"> _should be_ <div formArrayName="powers" *ngFor="let power of powers.controls; let i=index">
* ch06/src/app/heroes/hero-list/hero-list.component.ts file line 28: **this.heroes.find(hero => hero.id).name = 'Pricezog';** _Should be_ **this.heroes.find(hero => hero.id == existingHero.id).name = 'Pricezog';**

### Related products <Other books you may enjoy>
* Angular for Enterprise-Ready Web Applications - Second Edition [[Packt]](https://www.packtpub.com/product/angular-for-enterprise-ready-web-applications-second-edition/9781838648800?utm_source=github&utm_medium=repository&utm_campaign=9781838648800) [[Amazon]](https://www.amazon.com/dp/1838648801)

* Angular Projects [[Packt]](https://www.packtpub.com/product/angular-projects/9781838559359?utm_source=github&utm_medium=repository&utm_campaign=9781838559359) [[Amazon]](https://www.amazon.com/dp/1838559353)

## Get to Know the Authors
**Aristeidis Bampakos**
is an experienced frontend web developer and a contributor to the Angular documentation. For the last 8 years of work experience, he has mainly focused on developing applications with AngularJS and Angular frameworks, Typescript, and Angular Material. He has also been involved in the development of hybrid mobile applications using the Ionic framework. Currently, at Plexscape, he is working on integrating GIS technologies over an Angular and Electron.

**Pablo Deeleman**
is a former UI/UX designer who fell in love with JavaScript and CSS back in 1998, during the old days of Netscape Navigator and Microsoft Internet Explorer 3. The discovery of Node.js back in 2011 became a turning point in his career. From that moment on he started focusing on JavaScript application development, with a special focus on creating single-page applications and interaction development. With sound expertise in front-end libraries and frameworks, such as Backbone.js, Knockout.js, Polymer, React, Svelte, AngularJs, and Angular, Pablo has developed his career as a JavaScript practitioner across a broad range of successful start-ups as well as large enterprise corporations such as Gameloft, Red Hat or Dynatrace, just to name a few. He currently works as a Senior Software Engineer and Angular specialist for Dynatrace, a Gartner quadrant leader in the Application Performance Monitoring field. Pablo Deeleman has contributed to the dev community with several books on Angular since 2016, all published by Packt Publishing.


### Suggestions and Feedback
[Click here](https://docs.google.com/forms/d/e/1FAIpQLSdy7dATC6QmEL81FIUuymZ0Wy9vH1jHkvpY57OiMeKGqib_Ow/viewform) if you have any feedback or suggestions.
