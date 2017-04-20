import { Component, OnInit, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
  @Output()
    onSearch = new EventEmitter();

    search(cheeseName: string) {
    this.onSearch.emit(cheeseName);
  }

  constructor() { }

  ngOnInit() {
  }

}
