import { Component } from 'angular2/core';
import { Router } from 'angular2/router';
import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS} from 'angular2/router';
import { User } from '/user';
import {NgForm}    from 'angular2/common';
import {HeroFormComponent} from './user-form.component';

@Component({ 
	selector: 'my-landing',
	templateUrl: 'app/landing.component.html',
	styleUrls: ['app/landing.component.css'],
	directives: [ROUTER_DIRECTIVES, HeroFormComponent]
})


export class LandingComponent {
	// model = new User('Frank', 'djd', true);


	// disappear: false;

	// constructor() {
	// 	}

	// visibility(){
	// 	if(this.disappear){
	// 		(console.log("pressed!")
	// 		return "none";
	// 	} else {
	// 		(console.log("hide!")
	// 		return "none";
	// 	}

	// }

	// for the User component
	
}