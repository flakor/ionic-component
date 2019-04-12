import { NgModule } from '@angular/core';
import { FiltroPipe } from './filtro.pipe';
import { ComicPipe } from './comic.pipe';

@NgModule({
  declarations: [FiltroPipe, ComicPipe],
  exports: [ FiltroPipe, ComicPipe ]
})
export class PipesModule { }