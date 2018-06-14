import { Component, OnInit,Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {
@Input() recipe;
@Output() recipeSeclected = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

  sendToDetail(){
    this.recipeSeclected.emit();
  }

}
