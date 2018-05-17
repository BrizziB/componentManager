import { Component, OnInit } from '@angular/core';
import { ComponentManagerService } from './Service/component.manager.service';
import { BrowserModule } from '@angular/platform-browser';

@Component({
    selector: 'app-component-a',
    template: `
    <button  *ngFor='let item of items' target="_blank" (click)="action()">
        <!-- <i class="fas cat-icon fa-paint-brush"></i> -->
        <p> reset input content </p>
    </button>
  `
})
export class ComponentA implements OnInit {

    items = [1, 1, 1, 1];

    constructor(private compManager: ComponentManagerService) {
    }

    ngOnInit() {
        this.compManager.componentA = this;
    }

    action() {
        this.compManager.componentB.value = undefined;
    }



}

