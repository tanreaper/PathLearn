import { Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DashboardService } from '../dashboard.service';

@Component({
  selector: 'app-test',
  templateUrl: './video.component.html',
})
export class VideoComponent implements OnInit, OnChanges{
  @Input() qterm: any;
  player: YT.Player
  public videos: any;
  isLoading: boolean = true;
  videoService: any;
  
  constructor(private route: ActivatedRoute, private dashboardService: DashboardService, private router: Router) {
  }

  ngOnInit() {
    this.route.params.subscribe(
      params => {
        this.qterm = params['id'];
        console.log(params);
        this.getVideos();
      }
    )
    console.log(this.router.url)
    console.log(this.qterm);
  }
  ngOnChanges(changes: SimpleChanges) {
    console.log('chnage is triggered')
    console.log(changes);
    // this.qterm = this.route.snapshot.paramMap.get('id');
    console.log(this.qterm);
  }

  savePlayer(player) {
    this.player = player;
    console.log('player instance', player);
  }

  onStateChange(event) {
    console.log('player state', event.data);
  }
  getVideos() {
    this.isLoading = true;
    this.videoService = this.dashboardService.getVideo(this.qterm).subscribe(
      res => {
        this.getVideoIDs(res);
      }
    )
  }
  getVideoIDs(data) {
    this.videos = data.videos;
    console.log(this.videos);
    this.isLoading = false
  }
 }