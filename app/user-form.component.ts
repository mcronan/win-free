import {Component} from 'angular2/core';
import {NgForm}    from 'angular2/common';
import { User }    from './user';

@Component({
  selector: 'user-form',
  templateUrl: 'app/user-form.component.html'
})

export class HeroFormComponent {

// inject a data service here later
  model = new User (18, 'Dr IQ', true);

  submitted = false;

  onSubmit() { this.submitted = true; }

  // TODO: Remove this when we're done
  get diagnostic() { return JSON.stringify(this.model); }
}