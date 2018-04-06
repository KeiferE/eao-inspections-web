import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'no-content',
  templateUrl: './no-content.component.html',
  styleUrls: ['./no-content.component.scss']
})
export class NoContentComponent implements OnInit {
  @Input('emptyContent') emptyContent: any;

  constructor() { }

  ngOnInit() {
  }

}
