import { Component, OnInit} from '@angular/core';
import {Recipe} from '../recipes/recipe.modal'
@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})
export class RecipesComponent implements OnInit {
  recipe:any;
  selectedRecipe:Recipe;
  constructor() { }

  ngOnInit() {
  }
  getRecipe(e){
    console.log(e)
    this.recipe = e;
  }
}
