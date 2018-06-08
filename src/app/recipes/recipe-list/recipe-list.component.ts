import { Component, OnInit } from '@angular/core';
import {Recipe} from '../recipe.modal'
@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes:Recipe[];
  constructor() { 
    this.recipes = [
      new Recipe("burger","this is simple test desc",'../../../assets/images/pizza.jpeg'),
      new Recipe("burger","this is simple test desc",'../../../assets/images/pizza.jpeg'),
      new Recipe("burger","this is simple test desc",'../../../assets/images/pizza.jpeg'),
      new Recipe("burger","this is simple test desc",'../../../assets/images/pizza.jpeg'),
    ]
    console.log(this.recipes)

  }

  ngOnInit() {
  }

}
