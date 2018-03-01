import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.css'],
  encapsulation: ViewEncapsulation.Emulated
})
export class FavoriteComponent implements OnInit {
  isSelected:boolean=false;
  favoriteTitle:string;
  constructor() { }

  ngOnInit() {
  }
  onClick(){
    this.isSelected?this.isSelected=false:this.isSelected=true;
  }
}
