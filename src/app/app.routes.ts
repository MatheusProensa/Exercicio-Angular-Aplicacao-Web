import { Routes } from '@angular/router';

import { Contato } from './contato/contato';
import { Suporte } from './suporte/suporte';
import { Cadastro } from './cadastro/cadastro';

export const routes: Routes = [

  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'contato'
  },

  {
    path: 'contato',
    component: Contato
  },

  {
    path: 'suporte',
    component: Suporte
  },

  {
    path: 'cadastro',
    component: Cadastro
  }

];