import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from 'src/app/shared/products.service';

@Component({
  selector: 'app-clothing',
  templateUrl: './clothing.component.html',
  styleUrls: ['./clothing.component.css']
})
export class ClothingComponent implements OnInit {

  clothingSize = ['S', 'M', 'L', 'XL']
  clothingItems: any[]
  type: string

  constructor(private route: ActivatedRoute, private productService: ProductsService) {
    this.route.params.subscribe(param => {
      console.log(param)
      if (param == undefined || param.type == undefined) {
        this.clothingItems = this.getClothings()
      } else if (param.type == 'Hoodies & Sweats') {
        this.clothingItems = this.getClothings().filter(clothings => clothings.category == param['type'])
      } else if (param.type == 'T-shirt') {
        this.clothingItems = this.getClothings().filter(clothings => clothings.category == param['type'])
      } else if (param.type == 'Jacket') {
        this.clothingItems = this.getClothings().filter(clothings => clothings.category == param['type'])
      }
    })
  }

  getClothings() {
    return this.productService.getClothingItems()
  }

  ngOnInit() {
  }

}
