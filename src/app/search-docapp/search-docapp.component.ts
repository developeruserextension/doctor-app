import { Component, OnInit } from '@angular/core';
import { FormService } from '../form.service';
import { Form } from '@angular/forms';

@Component({
  selector: 'app-search-docapp',
  templateUrl: './search-docapp.component.html',
  styleUrls: ['./search-docapp.component.css']
})
export class SearchDocappComponent implements OnInit {
  joinsForm:Form;
  constructor(private fs:FormService) { }

  ngOnInit() {
    this.fs.getSearchForm().subscribe((data:Form )=>{
      this.joinsForm=data;
    });

  }

}
