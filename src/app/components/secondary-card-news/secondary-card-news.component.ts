import { Component, Input } from '@angular/core';
import {RouterModule} from '@angular/router';

@Component({
  selector    : 'app-secondary-card-news',
  standalone  : true,
  imports     : [RouterModule],
  templateUrl : './secondary-card-news.component.html',
  styleUrl    : './secondary-card-news.component.css'
})
export class SecondaryCardNewsComponent {

  @Input()
  imageCover : string = "";

  @Input()
  cardTitle : string = "";

  @Input()
  Id : string = "0";  
}
