import { Component, OnInit, Input, Output} from '@angular/core';
import { Recipe } from '../recipe.model'
import { RecipeService } from '../recipe.service';
@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  @Input() recipe: Recipe;
  // @Output() 
  
  constructor(private recipeService: RecipeService) { }

  ngOnInit() {
  }
  
  onAddToShoppingList() {
    this.recipeService.addIngredientsToShoppingList(this.recipe.ingredients);
  }
}