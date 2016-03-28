import { Component } from 'angular2/core';
import { LandingComponent } from './landing.component';
import { VideoComponent } from './video.component';
import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS} from 'angular2/router';

@Component({
    selector: 'my-app',
    template: `
    	<h1>Hello</h1>
	    <h1>{{title}}</h1>
	    <nav>
	   	 <a [routerLink]="['Landing']">Landing</a>
	   	 <a [routerLink]="['Video']">Video</a>
	    </nav>
  		<router-outlet></router-outlet>
  		`,
    directives: [ROUTER_DIRECTIVES]
})

@RouteConfig([
	{
		path: '/landing',
		name: 'Landing',
		component: LandingComponent,
		// useAsDefault: true
	},
	{
		path: '/video',
		name: 'Video',
		component: VideoComponent,
		// useAsDefault: true
	}
])

export class AppComponent { 
	 title = 'Win Free!';
}
