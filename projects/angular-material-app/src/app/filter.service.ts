import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FilterService {

  constructor() { }

  getFoods(){
    return ['apple', 'orange','pear','grapes'];
  }
}
