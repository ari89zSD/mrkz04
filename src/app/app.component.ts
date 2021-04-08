import { Component } from '@angular/core';
import instantsearch from 'instantsearch.js';
import { searchBox, hits } from 'instantsearch.js/es/widgets';
import { TypesenseInstantsearchAdapterService } from './services/typesense-instantsearch-adapter.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  constructor(
    private typesenseInstantsearchAdapterService: TypesenseInstantsearchAdapterService
  ) {}

  ngOnInit() {
    let searchClient = this.typesenseInstantsearchAdapterService.getSearchClient();
    const search = instantsearch({
      searchClient,
      indexName: 'books',
    });

    search.addWidgets([
      searchBox({
        container: '#searchbox',
      }),
      hits({
        container: '#hits',
      }),
    ]);

    search.start();
  }
}
