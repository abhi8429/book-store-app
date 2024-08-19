import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { MaterialModule } from './material.module';
import { FooterComponent } from './footer/footer.component';
import { AuthorsComponent } from './components/authors/authors.component';



@NgModule({
  declarations: [
    NotFoundComponent,
    ToolbarComponent,
    FooterComponent,
    AuthorsComponent
  ],
  imports: [
    CommonModule, 
    MaterialModule
  ],
  exports:[ToolbarComponent,FooterComponent,MaterialModule,AuthorsComponent]
})
export class SharedModule { }
