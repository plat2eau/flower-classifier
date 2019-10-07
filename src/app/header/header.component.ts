import { Component, OnInit } from '@angular/core';
import { strictEqual } from 'assert';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  inpFile="";
  constructor() { }

  ngOnInit() {
  }

  displayFile (fileInp) {
    this.inpFile = fileInp.value.split("\\")[2];
    console.log("Hello world!")
    console.log(fileInp.value.split("\\")[2]);
  }
}
