import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {

  public listaHeroes: string[] = ['Spiderman', 'Hulk', 'Iroman', 'She Hulk'];
  public deleteHero?: string = '';

  removeLastHero(): void {
    this.deleteHero =  this.listaHeroes.pop();
  }
}
