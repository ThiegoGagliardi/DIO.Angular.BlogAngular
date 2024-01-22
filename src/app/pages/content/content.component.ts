import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { dataMock } from '../../data/dataMock';

@Component({

  selector: 'app-content',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './content.component.html',
  styleUrl: './content.component.css'
})

export class ContentComponent implements OnInit {

  contentImage  : string = ""
  contentTitle  : string = "";
  contentResume : string = "";
  private Id    : string | null = "0";

  constructor ( private route:ActivatedRoute ) {

  }

  ngOnInit():void {
    
    this.route.paramMap.subscribe( param => this.Id = param.get("Id"));
    
    if (this.Id) {
        this.setValuesComponente(this.Id);
     }
  }

  setValuesComponente(id:string){

    const result = dataMock.filter( article => article.id == id)[0];
    
    if (result){

      this.contentImage  = result.imageCover;
      this.contentTitle  = result.title;
      this.contentResume = result.cardResume;
    }    
  }
}
