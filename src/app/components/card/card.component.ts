import { Component, Input } from '@angular/core';
import { PokemonData } from 'src/app/models/pokemonData';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {

  /*dados do card-label*/
	@Input()
	cardPokemonName:string = ""
  @Input()
  cardID:string = ""
  @Input()
  cardImg:string = ""
  @Input()
  cardType:any[] = []


	/*dados do card-detail*/
	@Input()
	cardHP:string = ""
	@Input()
	cardAttack:string = ""
	@Input()
	cardDefense:string = ""
	@Input()
	cardSPAtk:string = ""
	@Input()
	cardSPDef:string = ""
	@Input()
	cardSpeed:string = ""

}
