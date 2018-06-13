import { Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})
export class RecipesComponent implements OnInit {
  recipe:any;
  constructor() { }

  ngOnInit() {
  }
  getRecipe(e){
    console.log(e)
    this.recipe = e;
  }
}
