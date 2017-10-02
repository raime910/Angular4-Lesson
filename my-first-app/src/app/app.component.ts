import { Component } from '@angular/core';

@Component({
  selector: 'app-root', /* selector matches the html element
                           where this component will be injected
                           into the document. */
  templateUrl: './app.component.html',
  // styleUrls: ['./app.component.css']
  styles: [`
    h3 {
        color: dodgerblue
    }
    `]
})
export class AppComponent {
  name = 'My First App';
}
