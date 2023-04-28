import { Component, OnInit } from '@angular/core';
import { timer } from 'rxjs';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css'],
})
export class DemoComponent implements OnInit {
  num: number = 10;
  constructor() {}

  ngOnInit(): void {}

  changeNum() {
    this.num = 100;
  }

  changeAfterTime() {
    timer(3000).subscribe(() => {
      this.num = 200;
    });
  }
}
