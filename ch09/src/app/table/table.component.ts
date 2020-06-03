import { Component, ViewChild, OnInit } from '@angular/core';
import { heroes } from '../heroes';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  columnNames = ['id', 'name'];
  heroes = new MatTableDataSource(heroes);
  @ViewChild(MatSort, {static: true}) sort: MatSort;
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

  ngOnInit() {
    this.heroes.sort = this.sort;
    this.heroes.paginator = this.paginator;
  }
}
