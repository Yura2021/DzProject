import { Component, OnInit } from '@angular/core';
import { SomeDataService } from '../some-data.service';

@Component({
  selector: 'app-second',
  templateUrl: './second.component.html',
  styleUrls: ['./second.component.scss']
})
export class SecondComponent implements OnInit {

  constructor(private someSrv: SomeDataService) {
    console.log(someSrv.data)
  }

  ngOnInit(): void {
  }

}
