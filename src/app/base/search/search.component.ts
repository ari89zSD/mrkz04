import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { SearchResult } from 'src/app/domain/searchresult';
import { TypesenseSearchService } from 'src/app/services/typesense-search.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
  providers: [TypesenseSearchService],
})
export class SearchComponent implements OnInit {
  results: any[] = [];
  queryField: FormControl = new FormControl();

  constructor(private typesenseSearchService: TypesenseSearchService) {}

  ngOnInit(): void {
    this.queryField.valueChanges.subscribe((queryField) => {
      let searchResults = this.typesenseSearchService.search(queryField);
      searchResults.subscribe(
        (hit) => {
          console.log('hit: ' + hit);
          this.results.push(hit);
        },
        (error) => console.log('Some error happened')
      );
    });
  }
}
