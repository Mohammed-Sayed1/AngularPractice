import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  // template: '<h1>Mohammed</h1>', /* template content overrides templateUrl content */
  styleUrls: ['./app.component.scss'],
  // styles: ['h1 {color: yellow}'], /* styles content overrides styleUrls content */
})
export class AppComponent {
  title = 'CourseDemo';

  sayHello(): string {
    return `Hello Front-End Stack`;
  }
}
