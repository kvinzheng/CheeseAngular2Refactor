import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Http, Response } from '@angular/http';

@Component({
  selector: 'app-filtered-button-group',
  templateUrl: './filtered-button-group.component.html',
  styleUrls: ['./filtered-button-group.component.css']
})
export class FilteredButtonGroupComponent implements OnInit {
  // http: Http;
  @Output() onSeeAllCheeses = new EventEmitter()
  @Output() onSearchByName = new EventEmitter()
  @Output() onSearchSubstitutes = new EventEmitter()
  @Output() onSearchByFirmness = new EventEmitter()
  @Output() onSearchByAnimal = new EventEmitter()

  constructor() { }

  ngOnInit() {
  }

  seeAllCheeses() {
    this.onSeeAllCheeses.emit(null)
  }

  searchByName(kevin: string) {
    this.onSearchByName.emit(kevin);
    event.preventDefault()
  }

  searchSubstitutes(cheeseName: string) {
    this.onSearchSubstitutes.emit(cheeseName);
    event.preventDefault()
  }

  searchByFirmness(firmness: string) {
    this.onSearchByFirmness.emit(firmness);
    event.preventDefault()
  }

  searchByAnimal(animal: string) {
    this.onSearchByAnimal.emit(animal);
    event.preventDefault()
  }

}
