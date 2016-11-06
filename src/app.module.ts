import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { QuoteService } from './quote.service';
import { RandomQuoteComponent } from './random-quote.component';
import { ControlButton } from './control-button.component';
import { AppComponent } from './app.component';

@NgModule({
  imports: [BrowserModule],
  declarations: [AppComponent, RandomQuoteComponent, ControlButton],
  providers: [QuoteService],
  bootstrap: [AppComponent]
})
export class AppModule { }
