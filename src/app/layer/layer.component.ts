import { Component, OnInit } from '@angular/core';
import AOS from 'aos';
@Component({
  selector: 'app-layer',
  templateUrl: './layer.component.html',
  styleUrls: ['./layer.component.css']
})
export class LayerComponent implements OnInit{
  ngOnInit(): void {
    AOS.init();
  }

}
