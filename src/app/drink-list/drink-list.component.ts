import { Component, OnInit } from '@angular/core';
import { Drink } from "../drink";
import { DrinkService } from '../drink.service';

@Component({
  selector: 'app-drink-list',
  templateUrl: './drink-list.component.html',
  styleUrls: ['./drink-list.component.css']
})
export class DrinkListComponent implements OnInit {
  public filteredDrinks: Drink[];
  public selectedStatus: string;
  public selectedDrink: Drink;

  private drinks: Drink[];

  constructor(
    private drinkService: DrinkService
  ) {}

  async ngOnInit(): Promise<void> {
    this.drinkService.findAll().subscribe(data => {
      this.drinks = data;
    });
  }

  onFilterChange(status: string): void {
    this.selectedStatus = status;
    this.filter();
  }

  onSelectDrink(drink: Drink): void {
    this.selectedDrink = drink;
  }

  async onFormSubmit(drink: Drink): Promise<void> {
    if (drink.id > 0) {
      await this.drinkService.updateDrink(drink)
      this.selectedDrink.colors = drink.colors;
      this.selectedDrink.type = drink.type;
      
    } else {
      this.selectedDrink.id = Math.floor(Math.random()*1000000);
      this.selectedDrink.colors = drink.colors;
      this.selectedDrink.type = drink.type;
      this.drinkService.createDrink(drink)
                        .then(createdDrink => {
                          this.drinks.push(createdDrink);
                        });
    }
    this.selectedDrink = null;
  }
  
  onNewClick(): void {
    this.selectedDrink = new Drink();
  }
  
  /*onDeleteClick(id: number) {
    this.drinkService.deleteDrink(id)
    .then(async () => {
      this.selectedDrink = null;
      this.drinks = await this.drinkService.getDrinks();
      this.filter();
    })
  }*/

  private filter(): void {
    this.filteredDrinks = this.drinks; //this.selectedStatus === ''
    //? this.drinks
    //: this.drinks.filter(drinks => drinks.status === this.selectedStatus);
  }
}