import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CategoryService {
  constructor() {}

  getAll() {
    return [
      { name: 'Vegetables', image: 'assets/categories/1.jpg' },
      { name: 'Bakery', image: 'assets/categories/2.jpg' },
      { name: 'Drinks', image: 'assets/categories/6.jpg' },
      { name: 'Meat & Eggs', image: 'assets/categories/3.jpg' },
      { name: 'Fruits', image: 'assets/categories/5.jpg' },
      { name: 'Others', image: 'assets/categories/4.jpg' },
    ];
  }
}
