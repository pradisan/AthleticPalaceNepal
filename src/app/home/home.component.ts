import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from '../shared/products.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  brandsImageUrl = ['../assets/home/nike.png', '../assets/home/adidas.png', '../assets/home/puma.png', '../assets/home/underarmour.png', '../assets/home/levis.png', '../assets/home/rebook.png']
  originalMenProduct: any[]

  constructor(private route: ActivatedRoute, private productService: ProductsService) {


  }

  getProduct() {
    return this.productService.getProduct()
  }

  ngOnInit() {
  }



}
