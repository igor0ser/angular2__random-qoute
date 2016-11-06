import { Component } from '@angular/core';
import { QuoteService } from './quote.service';

@Component({
  selector: 'control-button',
  template: `
	<button 
		(click)="isRunning ? stopChanging() : continueChanging()" 
	>
			{{ isRunning ? "Stop changing" : "Continue changing" }}
	</button>
	
  `
})
export class ControlButton { 

	/*stopChanging : () => void;*/
	quoteService: QuoteService;
	isRunning: boolean = true;

	constructor(quoteService: QuoteService){
		this.quoteService = quoteService;
	}

	stopChanging(){
		console.log('stop changing');
		this.isRunning = this.quoteService.stopInterval();

	}

	continueChanging(){
		console.log('continue changing');
		this.isRunning = this.quoteService.continueInterval();
	}

 }
