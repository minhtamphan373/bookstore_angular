import {Injectable} from "@angular/core"
import { HttpClient, HttpResponse } from '@angular/common/http'

import { throwError, Observable } from 'rxjs';

// import { Recipe } from './model/recipe-model';

@Injectable()
export class ServerService {
    constructor () { }


// appUrl = "https://ng-recipe-7346c.firebaseio.com/recipes.json";
// constructor( private http: HttpClient) {}
// getSevers(){
//   return this.http.get<Recipe[]>(this.appUrl)
// }
// getRecipeResponse(): Observable<HttpResponse<Recipe[]>> {
//   return this.http.get<Recipe[]>(
//     this.appUrl, { observe: 'response' });
    
// }
}