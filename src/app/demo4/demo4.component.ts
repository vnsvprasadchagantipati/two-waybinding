import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-demo4',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './demo4.component.html',
  styleUrl: './demo4.component.css'
})
export class Demo4Component {
  isVisible = false;
  constructor() {}

  setVisible() {
    if (this.isVisible == true) {
      this.isVisible = false;
    } else if (this.isVisible == false) {
      this.isVisible = true;
    }
  }

}
