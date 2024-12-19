import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Season, Song } from '../season';
import { getSeasons } from '../service/song.service';
import { Subject, takeUntil } from 'rxjs';
import { NgIf } from '@angular/common';


@Component({
  selector: 'app-song',
  imports: [NgIf],
  templateUrl: './song.component.html',
  styleUrl: './song.component.scss'
})
export class SongComponent {
  public song!: Song;
  public songStory = '';
  public songLyrics = '';
  private seasons: Season[] = [];
  private destroying$ = new Subject();
  constructor(private route: ActivatedRoute) { }
  async ngOnInit() {
    this.seasons = await getSeasons();
    this.subscribeToRouteChanges();
  }


  ngOnDestroy() {
    this.destroying$?.next(0);
    this.destroying$?.complete();
  }


  private subscribeToRouteChanges() {
    this.route.params
      .pipe(takeUntil(this.destroying$))
      .subscribe(params => {
        const season = params['season'];
        const songID = params['id'];
        const seasonObj = this.seasons.find((s) => s.label === season);
        if (songID) {
          this.song = seasonObj?.songs.find(s => s.id === +songID) as Song;
        }
      });
  }
}
