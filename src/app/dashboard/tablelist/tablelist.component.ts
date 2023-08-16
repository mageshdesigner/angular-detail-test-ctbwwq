import { Component } from '@angular/core';
export interface ColumnDefintion {
  label: string
  sticky?: boolean
  style?: any
}

 

export interface ProductList {
  id: number,
  name: string,
  type: string,
  price: number,
  units: number,
  manufacturing: string,
  url?:string
}



@Component({
  selector: 'app-tablelist',
  templateUrl: './tablelist.component.html',
  styleUrls: ['./tablelist.component.scss']
})
export class TablelistComponent {
  constructor() {}
  headerColumn: ColumnDefintion[] = [
    // width => width of the column
    // left => width of the previous column
    { label: 'id', sticky: true, style: { 'width': '30px', 'left': '0px' } },
    { label: 'name' },
    { label: 'type', sticky: true, style: { 'width': '80px', 'left': '120px' } },
    { label: 'price' },
    { label: 'units' },
    { label: 'manufacturing' },
  ]
  displayedColumns = this.headerColumn.map((def) => def.label);
 
  productList: ProductList[] = [
    {
      id: 0,
      name: 'Fevicol',
      type: 'adhesive',
      price: 125.1,
      units: 10,
      manufacturing: '21/05/22',
    },
    {
      id: 1,
      name: 'Colgate',
      type: 'paste',
      price: 25.0,
      units: 1000,
      manufacturing: '12/01/21',
    },
    {
      id: 2,
      name: 'Samsung',
      type: 'mobile',
      price: 29999,
      units: 100,
      manufacturing: '21/05/22',
    },
    {
      id: 3,
      name: 'Rotomac',
      type: 'pen',
      price: 20.0,
      units: 5,
      manufacturing: '31/01/22',
    },
    {
      id: 4,
      name: 'Dell',
      type: 'laptop',
      price: 100000,
      units: 5,
      manufacturing: '01/01/22',
    },
    {
      id: 5,
      name: 'Classmate',
      type: 'notebook',
      price: 30.5,
      units: 33,
      manufacturing: '21/05/22',
    },
    {
      id: 6,
      name: 'Fevikiwk',
      type: 'adhesive',
      price: 25.8,
      units: 78,
      manufacturing: '21/08/22',
    },
    {
      id: 7,
      name: 'Close Up',
      type: 'paste',
      price: 125.0,
      units: 900,
      manufacturing: '18/01/21',
    },
    {
      id: 8,
      name: 'One Plus',
      type: 'mobile',
      price: 35000,
      units: 10,
      manufacturing: '21/05/22',
    },
    {
      id: 9,
      name: 'Reynolds',
      type: 'pen',
      price: 10.0,
      units: 500,
      manufacturing: '31/01/22',
    },
    {
      id: 10,
      name: 'Lenovo',
      type: 'laptop',
      price: 79999,
      units: 10,
      manufacturing: '01/01/22',
    },
  ];
  dataSource = this.productList;

  sortings() {
    console.log(this.displayedColumns)
    this.headerColumn  = [   
      { label: 'id', sticky: true, style: { 'width': '30px', 'left': '0px' } },
      { label: 'type', sticky: true, style: { 'width': '80px', 'left': '120px' } },
      { label: 'name' },      
      { label: 'price' },
     
      { label: 'units' },
      { label: 'manufacturing' },
    ]
    this.displayedColumns = this.headerColumn.map((def) => def.label);
  }
}
