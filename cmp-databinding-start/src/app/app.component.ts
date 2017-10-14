import {Component} from '@angular/core';
import {Server} from '../models/server';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  serverElements = [
    {
      type: 'server',
      name: 'Test Server',
      content: 'Just a test'
    }
  ];

  onElementAdded(element: Server) {
    this.serverElements.push({
      type: element.type,
      name: element.name,
      content: element.content
    });
  }

}
