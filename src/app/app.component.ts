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
  // I would have liked to see you get providers working.
  // providers: [CheeseService]
})

export class AppComponent {
  // title = 'cheese work!';
  results = CHEESES;
  loading = false;
  constructor(private http: Http) {
  }


  // would have preferred to see these API calls in a service and dependency injection used here.
  doSeeAllCheeses() {
    this.results = [];
    this.loading = true;
    this.http.get('https://cheeswhiz.herokuapp.com/api/cheese')
      .subscribe((res: Response) => {
        this.results = res.json();
        this.loading = false;
        console.log('do an example here',this.results);
      });
  }

  doSearch(cheeName: string) {
    this.results = [];
    this.loading = true;
    this.http.request(`https://cheeswhiz.herokuapp.com/api/cheese/specific/${cheeName}`)
      .subscribe((res: Response) => {
        this.results = res.json();
        this.loading = false;
        console.log('now kevin what is result,', this.results);
      });
  }


  doSearchSubstitutes(cheeseName: string) {
    this.results = [];
    this.loading = true;
    this.http.request(`https://cheeswhiz.herokuapp.com/api/cheese/substitute/${cheeseName}`)
      .subscribe((res: Response) => {
        this.results = res.json();
        this.loading = false;
      });
  }

  doSearchByFirmness(firmness: string) {

    this.results = [];
    this.loading = true;
    this.http.request(`https://cheeswhiz.herokuapp.com/api/cheese/firmness/${firmness}`)
      .subscribe((res: Response) => {
        this.results = res.json();
        this.loading = false;
      });
  }

  doSearchByAnimal(animal: string) {
    this.results = [];
    this.loading = true;
    this.http.request(`https://cheeswhiz.herokuapp.com/api/cheese/animal/${animal}`)
      .subscribe((res: Response) => {
        this.results = res.json();
        this.loading = false;
      });
  }
}
