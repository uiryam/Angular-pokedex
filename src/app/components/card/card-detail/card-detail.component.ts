import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card-detail',
  templateUrl: './card-detail.component.html',
  styleUrls: ['./card-detail.component.css']
})
export class CardDetailComponent {

  @Input()
  cardImg:string = ""
  @Input()
  cardType:any[] = []


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
