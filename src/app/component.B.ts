import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ComponentManagerService } from './Service/component.manager.service';
import { BrowserModule } from '@angular/platform-browser';

@Component({
    selector: 'app-component-b',
    template: `
    <input [(ngModel)]="value" class="form-control" size="50" type="number"
    (ngModelChange)="updateButtonNum()" placeholder="inserisci numero di bottoni" required>
  `
})
export class ComponentB implements OnInit {

    value: Number;
    buttonsArray = [];

    constructor(private compManager: ComponentManagerService) {
    }

    ngOnInit() {
        this.compManager.componentB = this;
    }




    updateButtonNum() {
        this.buttonsArray = [];
        for (let i = 0; i < this.value; i++) {
            this.buttonsArray.push(1);
        }
        this.compManager.componentA.items = this.buttonsArray;
    }



}
