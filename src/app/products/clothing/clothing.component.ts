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
  brands = ['Nike', 'Adidas', 'Puma', 'Underarmour', 'Reebok', 'Levis']
  clothingItems: any[]
  type: string
  originalClothingItem: any[]
  clothingFilterList: any = [
    { 'clothingSize': '' },
    { 'brand': '' },
    { 'category': '' }
  ]

  constructor(private route: ActivatedRoute, private productService: ProductsService) {
    this.route.params.subscribe(param => {
      this.originalClothingItem = this.getProduct().filter(clothing => clothing.gender == param['gender'])
      this.clothingItems = this.originalClothingItem.map(clothing => clothing)
      if (param.category == 'T-shirt') {
        this.clothingFilterList[2].category = param['category']
        this.clothingItems = this.getProduct().filter(clothing => clothing.category == param['category'] && clothing.gender == param['gender'])
      } else if (param.category == 'Hoodies & Sweats') {
        this.clothingFilterList[2].category = param['category']
        this.clothingItems = this.getProduct().filter(clothing => clothing.category == param['category'] && clothing.gender == param['gender'])
      } else if (param.category == 'Jacket') {
        this.clothingFilterList[2].category = param['category']
        this.clothingItems = this.getProduct().filter(shoe => shoe.category == param['category'] && shoe.gender == param['gender'])
      } else if (param.category == 'Polo') {
        this.clothingFilterList[2].category = param['category']
        this.clothingItems = this.getProduct().filter(shoe => shoe.category == param['category'] && shoe.gender == param['gender'])
      } else if (param.category == 'Pants') {
        this.clothingFilterList[2].category = param['category']
        this.clothingItems = this.getProduct().filter(shoe => shoe.category == param['category'] && shoe.gender == param['gender'])
      } else if (param.category == 'Shorts') {
        this.clothingFilterList[2].category = param['category']
        this.clothingItems = this.getProduct().filter(shoe => shoe.category == param['category'] && shoe.gender == param['gender'])
      } else if (param.category == 'Tights & Leggings') {
        this.clothingFilterList[2].category = param['category']
        this.clothingItems = this.getProduct().filter(shoe => shoe.category == param['category'] && shoe.gender == param['gender'])
      } else if (param.category == 'Sports Bra') {
        this.clothingFilterList[2].category = param['category']
        this.clothingItems = this.getProduct().filter(shoe => shoe.category == param['category'] && shoe.gender == param['gender'])
      }
    })
  }


  getProduct() {
    return this.productService.getProduct().filter(product => product.type == 'Clothing')
  }

  ngOnInit() {
  }

  filterBySize(size) {
    this.clothingFilterList[0].clothingSize = size
    this.clothingItems = this.getFilteredClothing()
    console.log(this.clothingFilterList)
    return '#bda4a4'
  }

  filterByBrand(brand) {
    this.clothingFilterList[1].brand = brand
    this.clothingItems = this.getFilteredClothing()
    console.log(this.clothingFilterList)
    return '#bda4a4'
  }

  getFilteredClothing() {
    return this.originalClothingItem.filter(clothing => {
      if (this.clothingFilterList[0].clothingSize != '' && this.clothingFilterList[1].brand != '' && this.clothingFilterList[2].category != '') {
        return clothing.category === this.clothingFilterList[2].category && clothing.size.includes(this.clothingFilterList[0].clothingSize) && this.clothingFilterList[1].brand === clothing.brand
      } else if (this.clothingFilterList[0].clothingSize != '' && this.clothingFilterList[2].category != '') {
        return clothing.category === this.clothingFilterList[2].category && clothing.size.includes(this.clothingFilterList[0].clothingSize)
      } else if (this.clothingFilterList[1].brand && this.clothingFilterList[2].category != '') {
        return clothing.category === this.clothingFilterList[2].category && this.clothingFilterList[1].brand === clothing.brand
      } else if (this.clothingFilterList[1].brand && this.clothingFilterList[0].clothingSize != '') {
        return clothing.size.includes(this.clothingFilterList[0].clothingSize) && this.clothingFilterList[1].brand === clothing.brand
      }
      else if (this.clothingFilterList[0].clothingSize != '') {
        return clothing.size.includes(this.clothingFilterList[0].clothingSize)
      }
      else if (this.clothingFilterList[1].brand != '') {
        return clothing.brand === this.clothingFilterList[1].brand
      }
      else if (this.clothingFilterList[2].category != '') {
        return clothing.category === this.clothingFilterList[2].category
      } else {
        return clothing
      }

    })
  }

}
