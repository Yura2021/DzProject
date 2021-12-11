import { Component, OnInit } from '@angular/core';
import { SomeDataService } from '../some-data.service';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.scss']
})
export class FirstComponent implements OnInit {

  constructor(private someSrv: SomeDataService) {
    console.log(someSrv.data)
    someSrv.data = 3;
  }
  ngOnInit(): void {
  }

}
