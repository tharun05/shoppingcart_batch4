import { Component, OnInit,Output,EventEmitter } from '@angular/core';
import {Recipe} from '../recipe.modal'
@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes:Recipe[];
  @Output() recipe = new EventEmitter();
  constructor() { 
    this.recipes = [
      new Recipe("burger","this is simple test desc",'../../../assets/images/pizza.jpeg'),
      new Recipe("hamburger","this is simple test desc",'../../../assets/images/pizza.jpeg'),
      new Recipe("pizza","this is simple test desc",'../../../assets/images/pizza.jpeg'),
      new Recipe("biryani","this is simple test desc",'../../../assets/images/pizza.jpeg'),
    ]
    console.log(this.recipes)

  }

  ngOnInit() {
  }

  // sendToDetail(item){
  //   console.log(item)
  //   this.recipe.emit(item)
  // }

  sendToDetail(recipe){
    console.log(recipe)
    this.recipe.emit(recipe)
  }
}
