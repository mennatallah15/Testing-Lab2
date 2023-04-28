import { Component, OnInit } from '@angular/core';
import { DemoServiceService } from 'src/app/Services/demo-service.service';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css'],
})
export class DemoComponent implements OnInit {
  num1: number = 5;
  num2: number = 3;
  constructor(public DemoService: DemoServiceService) {}

  ngOnInit(): void {
    this.DemoService.getService();
  }

  Add = (num1: number, num2: number) => {
    return this.num1 + this.num2;
  };

  subtract = (num1: number, num2: number) => {
    return this.num1 - this.num2;
  };
}
