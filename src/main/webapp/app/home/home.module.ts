import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { BibliotecaSharedModule } from 'app/shared/shared.module';
import { HOME_ROUTE } from './home.route';
import { HomeComponent } from './home.component';

@NgModule({
  imports: [BibliotecaSharedModule, RouterModule.forChild([HOME_ROUTE])],
  declarations: [HomeComponent],
})
export class BibliotecaHomeModule {}
