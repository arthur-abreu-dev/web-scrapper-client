import { Component } from '@angular/core';
import { ScrapperService } from './scrapper.service';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(public scrapperService: ScrapperService) { }

  urlPesquisa: string;
  returnedPage: string;
  showPage = false;

  obterPagina() {
    this.scrapperService.obterPaginaHtml(this.urlPesquisa).subscribe(
      (res) => {
        this.returnedPage = res.page;
      })
  }


}
