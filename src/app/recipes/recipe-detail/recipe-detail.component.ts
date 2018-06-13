import { Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  @Input() recipe;
  selectedRecipe:any;
  constructor() { }

  ngOnInit() {
    console.log(this.recipe)
    this.selectedRecipe = this.recipe
  }

}
