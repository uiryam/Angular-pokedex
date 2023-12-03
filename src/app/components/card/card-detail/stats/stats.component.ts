import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-stats',
  templateUrl: './stats.component.html',
  styleUrls: ['./stats.component.css']
})
export class StatsComponent {

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
