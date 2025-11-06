import { Component } from '@angular/core';
import { Person } from '../../shared/interfaces/person';
import { Step6SimpleDatatable } from '../step6-simple-datatable/step6-simple-datatable';

@Component({
  selector: 'app-step7-component-output',
  imports: [Step6SimpleDatatable],
  templateUrl: './step7-component-output.html',
  styleUrl: './step7-component-output.css',
})
export class Step7ComponentOutput {
  persons: Person[] = [
    {"firstname":"Cosimo","lastname":"Harbertson","email":"charbertson0@chron.com"},
    {"firstname":"Archibald","lastname":"Northern","email":"anorthern1@ucoz.ru"},
    {"firstname":"Clara","lastname":"Gilgryst","email":"cgilgryst2@surveymonkey.com"},
    {"firstname":"Gallard","lastname":"Fuchs","email":"gfuchs3@sphinn.com"},
    {"firstname":"Eduardo","lastname":"Engley","email":"eengley4@themeforest.net"},
    {"firstname":"Josiah","lastname":"Dreye","email":"jdreye5@nps.gov"},
    {"firstname":"Kati","lastname":"Woolcocks","email":"kwoolcocks6@nbcnews.com"},
    {"firstname":"Sadella","lastname":"Bilton","email":"sbilton7@scribd.com"},
    {"firstname":"Markos","lastname":"Commin","email":"mcommin8@ovh.net"},
    {"firstname":"Natal","lastname":"Tanner","email":"ntanner9@moonfruit.com"},
    {"firstname":"Kakalina","lastname":"Penzer","email":"kpenzera@umich.edu"},
    {"firstname":"Winonah","lastname":"Croxall","email":"wcroxallb@so-net.ne.jp"},
    {"firstname":"Kristi","lastname":"Sherr","email":"ksherrc@myspace.com"},
    {"firstname":"Rodolfo","lastname":"Sandeson","email":"rsandesond@g.co"},
    {"firstname":"Nathanil","lastname":"Audiss","email":"naudisse@a8.net"},
    {"firstname":"Trevor","lastname":"Peachment","email":"tpeachmentf@weibo.com"},
    {"firstname":"Edsel","lastname":"Bisterfeld","email":"ebisterfeldg@tinyurl.com"},
    {"firstname":"Dolley","lastname":"McMyler","email":"dmcmylerh@bing.com"},
    {"firstname":"Julissa","lastname":"Parkins","email":"jparkinsi@moonfruit.com"},
    {"firstname":"Earlie","lastname":"Hadkins","email":"ehadkinsj@sciencedirect.com"}
  ]

  showPersonClicked(data: Person){
    console.log("Step 7", data);
  }

}
