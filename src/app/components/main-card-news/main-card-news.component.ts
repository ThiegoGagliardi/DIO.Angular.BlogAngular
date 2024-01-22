import { Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-main-card-news',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './main-card-news.component.html',
  styleUrl: './main-card-news.component.css'
})
export class MainCardNewsComponent {

  @Input()
  imageCover : string = ""; 

  @Input()
  cardTitle  : string = "";

  @Input()
  cardResume : string = "";

  @Input()
  Id : string = "0";

  constructor(){}

}
