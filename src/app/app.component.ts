import { Component } from '@angular/core';
import { Hero } from './hero';

enum Sex {
    Male = 1,
    Femail = 2,
}

export class User {
    id: string;
    firstName: string;
    lastName: string;
    birhtDate: Date;
    sex: Sex;
    familyStatus: string;
    phone: string;
    email: string;

}
const HEROES: Hero[] = [
                        { id: 11, name: 'Mr. Nice' },
                        { id: 12, name: 'Narco' },
                        { id: 13, name: 'Bombasto' },
                        { id: 14, name: 'Celeritas' },
                        { id: 15, name: 'Magneta' },
                        { id: 16, name: 'RubberMan' },
                        { id: 17, name: 'Dynama' },
                        { id: 18, name: 'Dr IQ' },
                        { id: 19, name: 'Magma' },
                        { id: 20, name: 'Tornado' }
                      ];

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Herros';
  selectedHero: Hero ;
  heroes : Hero[] = HEROES;
  v1: String;
  v2: String;
  
  public onSelect ( h: Hero) {
      this.selectedHero = h;
  }
}


