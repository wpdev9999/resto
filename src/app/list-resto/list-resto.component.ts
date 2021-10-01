import { Component, OnInit } from '@angular/core';
import { RestoService } from '../resto.service';



@Component({
  selector: 'app-list-resto',
  templateUrl: './list-resto.component.html',
  styleUrls: ['./list-resto.component.css']
})

export class ListRestoComponent implements OnInit {
  public displayedColumns = ['name', 'address', 'email', 'phone', 'action'];
  dataSource:any;
 
  constructor(private resto : RestoService) {
  }
      
  ngOnInit(): void {
    this.resto.getList().subscribe((result)=>{
      if(!result){
          return;
      }
      //console.log(result);
      this.dataSource = result;
    })
  }



}
