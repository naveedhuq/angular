import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ngclass-test',
  templateUrl: './ngclass-test.component.html',
  styleUrls: ['./ngclass-test.component.css']
})
export class NgclassTestComponent {
  isSelected: boolean;

  onClick() {
    this.isSelected = !this.isSelected;
  }
}
