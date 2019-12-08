import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BeerService } from '../beer.service';
import { Beer } from '../beer';
 
@Component({
  selector: 'app-beer-form',
  templateUrl: './beer-form.component.html',
  styleUrls: ['./beer-form.component.css']
})
export class BeerFormComponent {
 
  beer: Beer;
 
  constructor(
    private route: ActivatedRoute, 
      private router: Router, 
        private beerService: BeerService) {
    this.beer = new Beer();
  }
 
  onSubmit() {
    this.beerService.save(this.beer).subscribe(result => this.gotoBeerList());
  }
 
  gotoBeerList() {
    this.router.navigate(['/drink/beers']);
  }
}