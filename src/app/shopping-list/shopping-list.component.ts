import { Component, OnInit } from '@angular/core';
import {Ingredient} from '../shared/ingredient.modal'
@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {

  ingredients:Ingredient[] = [
    new Ingredient('apples',30),
    new Ingredient('bread',40),
    new Ingredient('cucumber',34),
    new Ingredient('chocolates',56),
    new Ingredient('apples',30),
  ]
  constructor() { }

  ngOnInit() {
  }

}
