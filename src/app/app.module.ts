import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LayoutComponent } from './layout/layout.component';
import { ModalComponenteComponent } from './shared/modal-componente/modal-componente.component';

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    ModalComponenteComponent
  ],
  imports: [
    BrowserModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [ModalComponenteComponent]
})
export class AppModule { }
