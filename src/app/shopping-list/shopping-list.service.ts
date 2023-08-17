import { EventEmitter } from "@angular/core";
import { Ingredient } from "../shared/ingredient.model";
import { Subject } from "rxjs";

export class ShoppingListService {
	// ingredientsChanged = new EventEmitter<Ingredient[]>();
	ingredientsChanged = new Subject<Ingredient[]>();

	private ingredients: Ingredient[] = [
		new Ingredient('Apples', 5),
		new Ingredient('Tomatoes', 10),
	];

	getIngredients() {
		return this.ingredients.slice();
	}

	addIngredient(ingredient: Ingredient) {
		this.ingredients.push(ingredient);
		this.updatedIngredientsListCopy(this.ingredients)
	}

	addIngredients(ingredients: Ingredient[]) {
		// Not! a lot of events!
		// for (let ingredient of ingredients) {
		// 	this.addIngredient(ingredient)
		// }
		this.ingredients.push(...ingredients)
		this.updatedIngredientsListCopy(this.ingredients)
	}

	updatedIngredientsListCopy(ingredients: Ingredient[]) {
		this.ingredientsChanged.next(this.ingredients.slice());
	}



}