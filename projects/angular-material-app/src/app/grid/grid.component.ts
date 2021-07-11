import {AfterViewInit, Component, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import {SelectionModel} from '@angular/cdk/collections';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.scss']
})
export class GridComponent implements AfterViewInit {

  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol', 'topic', 'eventCode'];
  columnsToDisplay: string[] = this.displayedColumns.slice();
  
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);
  

  @ViewChild(MatPaginator)
  paginator!: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    
  }


  


  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

}

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
  topic : string;
  eventCode: number;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H', topic: 'Eng', eventCode: 45},
  {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He', topic: 'hin', eventCode: 48},
  
];
















