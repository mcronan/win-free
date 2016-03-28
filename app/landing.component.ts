import { Component } from 'angular2/core';
import { Router } from 'angular2/router';
import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS} from 'angular2/router';


@Component({ 
	selector: 'my-landing',
	templateUrl: 'app/landing.component.html',
	styleUrls: ['app/landing.component.css'],
	directives: [ROUTER_DIRECTIVES]
})

export class LandingComponent {}