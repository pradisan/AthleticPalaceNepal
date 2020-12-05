import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from '../shared/products.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  product: any
  id: number
  type: string
  constructor(private route: ActivatedRoute, private productService: ProductsService) {
    this.route.params.subscribe(param => {
      this.id = +param['id']
      this.type = param['type']
      if (this.type == 'shoes') {
        this.product = this.productService.getProduct().find(item => {
          return item.id == this.id
        })
      }

      if (this.type == 'clothings') {
        this.product = this.productService.getProduct().find(item => {
          return item.id == this.id
        })
      }

    })
  }

  ngOnInit() {
    this.displayProduct()
  }

  displayProduct() {
    console.log(this.product)
  }

}
