import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { MyComponentComponent } from './my-component/my-component.component';
import { FilterPokemonPipe } from './filter-pokemon--pipe.pipe';

@NgModule({
  declarations: [
    AppComponent,
    MyComponentComponent,
    FilterPokemonPipe
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [
    FilterPokemonPipe
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
