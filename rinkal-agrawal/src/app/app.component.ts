import { Component, OnInit } from '@angular/core';
import { NgClass } from '../../node_modules/@angular/common';
import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';
import { States, State } from 'src/app/classes/states';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    trigger('flyInOut', [
      state('in', style({opacity: 1, transform: 'translateX(0)'})),
      state('out', style({opacity: 0, transform: 'translateX(100)'})),
      transition('void => in, out => in', [
        style({ opacity: 0, transform: 'translateX(-100%)' }),
        animate('0.5s ease-in')
      ]),
      transition('in => out', [
        animate('0.5s 0.2s ease-out',
        style({ opacity: 0, transform: 'translateX(100%)' }))
      ])
    ])
  ]
})
export class AppComponent {
  private _counter:         number;
  private states:           State[];
  public newState:         State;
  public stateStatus:         string;

  constructor() {
    this.states = new States().getStates();       // Gets and sets all the new states for the page
    this._counter = 0;                            // Sets the counter to zero for page start
    this.setNewScheme();                          // Call the function to set initial content and colors
    this.stateStatus = 'in';
  }

  setNewScheme(): void {
    this.newState = this.states[this._counter]; // Sets the current state based on the counter
    this._counter = (this._counter + 1) % this.states.length; // Increments the counter and sets back to zero after length is reached
  }

  descriptionClicked(): void {
    this.toggleStateStatus();
    this.setNewScheme();
    this.delay(300);
  }

  async delay(ms: number) {
    await new Promise(resolve => setTimeout(() => resolve(), ms)).then(() => this.toggleStateStatus());
  }

  toggleStateStatus(): void {
    this.stateStatus = this.stateStatus === 'out' ? 'in' : 'out';
  }
}
