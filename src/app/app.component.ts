import { Component } from '@angular/core';

declare var Typesense: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  client = new Typesense.Client({
    'nodes': [{
      'host': 'localhost',
      'port': '8108',
      'protocol': 'http'
    }],
    'apiKey': 'Rhsdhas2asasdasj2',
    'connectionTimeoutSeconds': 2
  });

  title = 'mrkz04';
}
