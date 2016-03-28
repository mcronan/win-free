import { Component,CORE_DIRECTIVES, FORM_DIRECTIVES, View } from 'angular2/core';
import { LandingComponent } from './landing.component';
import { VideoComponent } from './video.component';
import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS} from 'angular2/router';

@Component({
    selector: 'my-app',
    template: `
	    <h1>{{title}}</h1>
  		<router-outlet></router-outlet>
  		`,
    directives: [ROUTER_DIRECTIVES]
})

@RouteConfig([
	{
		path: '/landing',
		name: 'Landing',
		component: LandingComponent,
		useAsDefault: true
	},
	{
		path: '/video',
		name: 'Video',
		component: VideoComponent
	}
])

export class AppComponent { 
	 title = 'WinFree.ie';
}
