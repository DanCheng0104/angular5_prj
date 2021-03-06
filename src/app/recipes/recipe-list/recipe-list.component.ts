import { Component, OnInit } from '@angular/core';
//without file extension
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
	recipes: Recipe[] = [
		new Recipe('A test recipe','this is simply a test','https://c.pxhere.com/photos/62/1c/eat_cheese_kohlrabi_tomatoes_au_gratin_meal_olives_cook-1292471.jpg!d'),
		new Recipe('A test recipe','this is simply a test','https://c.pxhere.com/photos/62/1c/eat_cheese_kohlrabi_tomatoes_au_gratin_meal_olives_cook-1292471.jpg!d')
	];

	constructor() { }

	ngOnInit() {
	}

}
