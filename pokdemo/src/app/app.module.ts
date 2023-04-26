import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { PokemonSearchComponent } from './pokemon-search/pokemon-search.component';
import { FilterPokemonPipe } from './filter-pokemon--pipe.pipe';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { PokemonDetailsComponent } from './pokemon-details/pokemon-details.component';
import {PokemonDataService} from "./pokemon-data-service.service";

@NgModule({
  declarations: [
    AppComponent,
    PokemonSearchComponent,
    FilterPokemonPipe,
    PokemonDetailsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    NoopAnimationsModule
  ],
  providers: [
    FilterPokemonPipe,
    PokemonDataService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
