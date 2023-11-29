import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-demo5',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './demo5.component.html',
  styleUrl: './demo5.component.css'
})
export class Demo5Component {
  countries = ['India', 'US', 'UK', 'China']; //array
  country: string = 'India';
  india_cities = ['Delhi', 'Chennai', 'Banglore'];
  constructor() {}

  ngOnInit(): void {}

}
