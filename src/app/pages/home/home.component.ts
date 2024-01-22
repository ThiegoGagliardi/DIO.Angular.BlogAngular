import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuTitleComponent } from '../../components/menu-title/menu-title.component';
import { MainCardNewsComponent } from '../../components/main-card-news/main-card-news.component';
import { SecondaryCardNewsComponent } from '../../components/secondary-card-news/secondary-card-news.component';
import { MenuBarComponent } from '../../components/menu-bar/menu-bar.component';
import { dataMock } from '../../data/dataMock';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule,MenuTitleComponent,MainCardNewsComponent,SecondaryCardNewsComponent, MenuBarComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})


export class HomeComponent implements OnInit {
  
  secondaryImages : string []  = ["https://legadodadc.com.br/wp-content/uploads/2022/08/Alem-de-Sandman_-conheca-outras-series-da-DC-produzidas-pela-Netflix-legadodadc.webp",
                                  "https://www.universosagas.com.br/wp-content/uploads/2024/01/Superman-Legacy.png",
                                  "https://cdn2.unrealengine.com/egs-suicidesquadkillthejusticeleague-rocksteadystudios-g1a-00-1920x1080-6e07ae10971e.jpg",
                                  "https://img.olhardigital.com.br/wp-content/uploads/2021/04/DC-Fandome-2021.jpeg"
                                  ];
                                  
  secondaryResumes : string [] = ["Series da DC na NetFlix são um sucesso.",
                                  "Confira o Elenco do novo filme do Superman - Superman Legacy ...",
                                  "Suicide Squad: Kill the Justice League - The game that nobody asking for ...",
                                  "DC FanFome - Precisamos de novas versões do evento que cativava todos os fãs da DC ..."];

  secondaryNewList = dataMock.filter(article => article.id !== "1");

  ngOnInit(): void {

     console.log(this.secondaryNewList);
  }
}
