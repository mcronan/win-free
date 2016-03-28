import { Component } from 'angular2/core';
import { Router } from 'angular2/router';
import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS} from 'angular2/router';


@Component({
	selector: 'my-video',
	templateUrl: 'app/video.component.html',
	styleUrls: ['app/video.component.css'],
	directives: [ROUTER_DIRECTIVES]

})

export class VideoComponent {}