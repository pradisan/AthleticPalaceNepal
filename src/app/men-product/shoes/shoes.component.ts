import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from 'src/app/shared/products.service';

@Component({
  selector: 'app-shoes',
  templateUrl: './shoes.component.html',
  styleUrls: ['./shoes.component.css']
})
export class ShoesComponent implements OnInit {
  shoeSize = ['7', '7.5', '8', '8.5', '9', '9.5', '10']
  shoesItems: any[]
  type: string

  constructor(private route: ActivatedRoute, private productService: ProductsService) {
    this.route.params.subscribe(param => {
      console.log(param)
      if (param == undefined || param.type == undefined) {
        this.shoesItems = this.getShoes()
      } else if (param.type == 'Running') {
        this.shoesItems = this.getShoes().filter(shoe => shoe.category == param['type'])
      } else if (param.type == 'Sneaker') {
        this.shoesItems = this.getShoes().filter(shoe => shoe.category == param['type'])
      } else if (param.type == 'Slide and Sandle') {
        this.shoesItems = this.getShoes().filter(shoe => shoe.category == param['type'])
      }

    })
  }

  getShoes() {
    return this.productService.getShoesItems()
  }

  getProduct() {
    return this.productService.getProduct()
  }

  ngOnInit() {
  }

  filterBySize(size) {
    console.log(size)
  }

}

