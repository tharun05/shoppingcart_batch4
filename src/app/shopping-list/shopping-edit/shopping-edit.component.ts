import { Component, OnInit, ElementRef,ViewChild, Output,EventEmitter} from '@angular/core';
import {Ingredient} from '../../shared/ingredient.modal'
@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  @ViewChild('inputName') nameInput: ElementRef; 
  @ViewChild('inputAmount') amountInput:ElementRef;
  @Output() newIngredientAdded = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }
  addIngredient(){
    console.log(this.nameInput.nativeElement.value)
    const ingredientName = this.nameInput.nativeElement.value;
    const ingredientAmount = this.amountInput.nativeElement.value;

    const newIngredient =  new Ingredient(ingredientName,ingredientAmount);
    console.log(newIngredient)
    this.newIngredientAdded.emit(newIngredient)
    this.nameInput.nativeElement.value = null;
    this.amountInput.nativeElement.value = null;
  }
}
