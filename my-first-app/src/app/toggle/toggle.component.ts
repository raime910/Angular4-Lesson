import {Component} from '@angular/core';

@Component({
  selector: 'app-toggle',
  templateUrl: './toggle.component.html',
  styleUrls: ['./toggle.component.css']
})
export class ToggleComponent {
  isVisible = false;
  clickLogs = [];

  toggleDetail() {
    // set date
    const date = new Date();
    this.clickLogs.push({
      id: this.clickLogs.length + 1,
      timestamp: date.toLocaleDateString() + ' ' + date.toLocaleTimeString()
    });

    // toggle visibility
    this.isVisible = !this.isVisible;
  }

  getLastClickDt() {
    if (this.clickLogs.length > 0) {
      return this.clickLogs[this.clickLogs.length - 1].timestamp;
    }

    return 'log is empty';
  }

  isOverride() {
    return this.clickLogs.length > 4;
  }

}
