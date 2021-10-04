import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-compute',
  templateUrl: './compute.component.html',
  styleUrls: ['./compute.component.scss'],
})
export class ComputeComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  compute(num: number) {
    if (num < 0) {
      return 0;
    } else {
      return num + 1;
    }
  }
}
