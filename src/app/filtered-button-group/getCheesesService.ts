// import { Injectable } from '@angular/core'
// import { Headers, Http } from '@angular/http'
//
// import { CheeseResult} from './cheese.model'
//
// import 'rxjs/add/operator/toPromise';
//
// @Injectable()
// export class AllCheeseService {
//   results: CheeseResult[]
//
//   private headers = new Headers({'Content-Type': 'application/json'});
//   private allCheeseUrl = `http://cheeswhiz.herokuapp.com/api/cheese`
//
//   constructor(private http: Http) {
//
//   }
//   getAllCheese (): Promise<CheeseResult[]> {
//     return this.http.get(this.allCheeseUrl)
//       .toPromise()
//       .then(res => res.json())
//       .then(res => {
//         this.results = res;
//         console.log('what is this.results all cheese', this.results);
//          })
//   }
//
//   getCheeseByName(query: string): Promise<CheeseResult> {
//     return this.http.get(`http://cheeswhiz.herokuapp.com/api/cheese/specific/${query}`)
//       .toPromise()
//       .then(res => res.json())
//       .then(res => this.results = res)
//       // .then(res => console.log(res))
//   }
//
// }
