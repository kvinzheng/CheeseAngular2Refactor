import { Component } from '@angular/core';
import { Headers, Http, Response} from '@angular/http';

// import { ServerService } from './server.service';
const CHEESES = [
  {
    'id': 1,
    'name': 'Brie',
    'animal': 'cow',
    'hardness': 'soft'
  }
];

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  // providers: [CheeseService]
})

export class AppComponent {
  // title = 'cheese work!';
  results = CHEESES;
  loading = false;
  constructor(private http: Http) {
  }

  doSeeAllCheeses() {
    this.results = [];
    this.loading = true;
    this.http.get('http://cheeswhiz.herokuapp.com/api/cheese')
      .subscribe((res: Response) => {
        this.results = res.json();
        this.loading = false;
        console.log('do an example here',this.results);
      });
  }

  doSearch(cheeseName: string) {
    this.results = [];
    this.loading = true;
    this.http.request(`http://cheeswhiz.herokuapp.com/api/cheese/specific/${cheeseName}`)
      .subscribe((res: Response) => {
        this.results = res.json();
        this.loading = false;
        console.log('now kevin what is result,', this.results);
      });
  }


  doSearchSubstitutes(cheeseName: string) {
    this.results = [];
    this.loading = true;
    this.http.request(`http://cheeswhiz.herokuapp.com/api/cheese/substitute/${cheeseName}`)
      .subscribe((res: Response) => {
        this.results = res.json();
        this.loading = false;
      });
  }

  doSearchByFirmness(firmness: string) {

    this.results = [];
    this.loading = true;
    this.http.request(`http://cheeswhiz.herokuapp.com/api/cheese/firmness/${firmness}`)
      .subscribe((res: Response) => {
        this.results = res.json();
        this.loading = false;
      });
  }

  doSearchByAnimal(animal: string) {
    this.results = [];
    this.loading = true;
    this.http.request(`http://cheeswhiz.herokuapp.com/api/cheese/animal/${animal}`)
      .subscribe((res: Response) => {
        this.results = res.json();
        this.loading = false;
      });
  }
}
