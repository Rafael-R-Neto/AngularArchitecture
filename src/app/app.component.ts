import { Component, Input } from '@angular/core';
import { Services } from './services/services';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  @Input() fakeJson: any[];

  title = 'AngularArchitecture';

  constructor(private servive: Services) {}

  ngOnInit() {
    var ctorName = <any>this.constructor.name
  }

  testGetRequest() {
    this.servive.getData('users').subscribe(retorno => console.log(retorno));
    
  }
}
