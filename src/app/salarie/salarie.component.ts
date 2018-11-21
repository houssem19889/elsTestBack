import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import {SalarieService} from './salarie.service';
import {Salarie} from '../model/Salarie';

@Component({
  selector: 'app-salarie',
  templateUrl: './salarie.component.html',
  styleUrls: ['./salarie.component.css']
})
export class SalarieComponent implements OnInit {
  salaries: Observable<Salarie[]>;
  fail: string;
  constructor(private salarieService: SalarieService) {
  }
  ngOnInit() {
    this.reloadData();
  }
  reloadData() {
    this.salaries = this.salarieService.findSalarie();
  }
  findSalarieByCriteria(criteria: string) {
    this.salarieService.findSalarieByCriteria(criteria).subscribe(salarie => {
      this.salaries = salarie;
    }, (response) => {
      this.fail = 'FAIL';
    });
  }

}
