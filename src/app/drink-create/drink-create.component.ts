import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DrinkService } from '../drink.service';
import { Drink } from '../drink';

@Component({
  selector: 'app-drink-create',
  templateUrl: './drink-create.component.html',
  styleUrls: ['./drink-create.component.css']
})
export class DrinkCreateComponent {

  drink: Drink;
 
  constructor(
    private route: ActivatedRoute, 
      private router: Router, 
        private drinkService: DrinkService) {
    this.drink = new Drink();
  }
 
  onSubmit() {
    this.drinkService.save(this.drink).subscribe(result => this.gotoDrinkList());
  }
 
  gotoDrinkList() {
    this.router.navigate(['/drink/wines']);
  }
}
