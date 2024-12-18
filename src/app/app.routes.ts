import { Routes } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { SongComponent } from './song/song.component';

export const routes: Routes =  [
    { path: '', component: WelcomeComponent },
    { path: 'season/:season/song/:id', component: SongComponent },
  ];
