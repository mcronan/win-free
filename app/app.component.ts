import { Component,CORE_DIRECTIVES, FORM_DIRECTIVES, View } from 'angular2/core';
import { LandingComponent } from './landing.component';
import { VideoComponent } from './video.component';
import { ExitComponent } from './exit.component';
import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS} from 'angular2/router';

@Component({
    selector: 'my-app',
    template: `
	    <a [routerLink]="['Landing']"><h1>{{title}}</h1></a>
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
	},
	{
		path: '/exit',
		name: 'Exit',
		component: ExitComponent,
	}
])

export class AppComponent { 
	 title = 'WinFree.ie';
}
