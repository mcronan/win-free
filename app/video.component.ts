import { Component, OnInit } from 'angular2/core';
import { Router } from 'angular2/router';
import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS} from 'angular2/router';
import {CORE_DIRECTIVES, NgClass, FORM_DIRECTIVES, Control, ControlGroup, FormBuilder, Validators} from 'angular2/common';
import { ExitComponent } from './exit.component';


@Component({
	selector: 'my-video',
	templateUrl: 'app/video.component.html',
	styleUrls: ['app/video.component.css'],
	directives: [ROUTER_DIRECTIVES]
})


export class VideoComponent implements OnInit {
	// creates the private instance of router
	constructor(private router: Router) {
		// set timer to redirect after 8 seconds
		setTimeout(() => {
			router.navigate(['Exit'])}, 8000);
		}
	}



 	// 	ngOnInit() {
		// 	window.setTimeout(this.exitVideo, 3000)
		// }
		//   	exitVideo() {
		//  		console.log("the console")
		// 	}	
		

		// constructor(private router: Router) {
		// 	router.navigate(['Exit'])
		//  }

	



	// constructor(private router: Router) {

	// 	 function exitVideo() {
	// 	 		console.log("the console")
	// 			// router.navigate(['Exit'])
	// 		}	

	// 	}
	
		
	
	// 	ngOnInit() {
	// 		console.log("OnInit")
	// 		window.setTimeout(this.exitVideo, 4000)	
	// 	}

	// 	exitVideo() {
	// 		console.log("hello")
	// 		router.navigate(['Exit']);
	// 	}

		
	// }

