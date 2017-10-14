import {Component, ElementRef, EventEmitter, OnInit, Output, ViewChild} from '@angular/core';
import {Server} from '../../models/server';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {
  // emitters
  @Output()
  serverAdded = new EventEmitter<Server>();

  @Output()
  blueprintAdded = new EventEmitter<Server>();

  // properties
  @ViewChild('contentInput')
  contentInput: ElementRef;

  constructor() {
  }

  ngOnInit() {
  }

  onAddServer(nameInput: HTMLInputElement) {
    this.serverAdded.emit(
      new Server(
        'server',
        nameInput.value,
        this.contentInput.nativeElement.value)
    );
  }

  onAddBlueprint(nameInput: HTMLInputElement) {
    this.blueprintAdded.emit(
      new Server(
        'blueprint',
        nameInput.value,
        this.contentInput.nativeElement.value)
    );
  }
}
