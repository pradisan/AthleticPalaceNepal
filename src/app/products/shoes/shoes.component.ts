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
  brands = ['Nike', 'Adidas', 'Puma', 'Underarmour', 'Reebok', 'Levis']
  shoesItems: any[]
  type: string
  originalShoeItem: any[]
  shoesFilterList: any = [
    { 'shoeSize': '' },
    { 'brand': '' },
    { 'category': '' }
  ]

  constructor(private route: ActivatedRoute, private productService: ProductsService) {
    this.route.params.subscribe(param => {
      this.originalShoeItem = this.getProduct().filter(shoe => shoe.gender == param['gender'])
      this.shoesItems = this.originalShoeItem.map(shoe => shoe)
      if (param.category == 'Running') {
        this.shoesFilterList[2].category = param['category']
        this.shoesItems = this.getProduct().filter(shoe => shoe.category == param['category'] && shoe.gender == param['gender'])
      } else if (param.category == 'Sneaker') {
        this.shoesFilterList[2].category = param['category']
        this.shoesItems = this.getProduct().filter(shoe => shoe.category == param['category'] && shoe.gender == param['gender'])
      } else if (param.category == 'Slide and Sandle') {
        this.shoesFilterList[2].category = param['category']
        this.shoesItems = this.getProduct().filter(shoe => shoe.category == param['category'] && shoe.gender == param['gender'])
      }

    })
  }

  getProduct() {
    return this.productService.getProduct().filter(product => product.type == 'Shoes')
  }

  ngOnInit() {
  }

  filterBySize(size) {
    this.shoesFilterList[0].shoeSize = size
    this.shoesItems = this.getFilteredShoes()
    console.log(this.shoesFilterList)
    return '#bda4a4'
  }

  filterByBrand(brand) {
    this.shoesFilterList[1].brand = brand
    this.shoesItems = this.getFilteredShoes()
    console.log(this.shoesFilterList)
    return '#bda4a4'
  }

  getFilteredShoes() {
    return this.originalShoeItem.filter(shoe => {
      if (this.shoesFilterList[0].shoeSize != '' && this.shoesFilterList[1].brand != '' && this.shoesFilterList[2].category != '') {
        return shoe.category === this.shoesFilterList[2].category && shoe.size.includes(this.shoesFilterList[0].shoeSize) && this.shoesFilterList[1].brand === shoe.brand
      } else if (this.shoesFilterList[0].shoeSize != '' && this.shoesFilterList[2].category != '') {
        console.log('Inside Size')
        return shoe.category === this.shoesFilterList[2].category && shoe.size.includes(this.shoesFilterList[0].shoeSize)
      } else if (this.shoesFilterList[1].brand && this.shoesFilterList[2].category != '') {
        return shoe.category === this.shoesFilterList[2].category && this.shoesFilterList[1].brand === shoe.brand
      } else if (this.shoesFilterList[1].brand && this.shoesFilterList[0].shoeSize != '') {
        return shoe.size.includes(this.shoesFilterList[0].shoeSize) && this.shoesFilterList[1].brand === shoe.brand
      }
      else if (this.shoesFilterList[0].shoeSize != '') {
        return shoe.size.includes(this.shoesFilterList[0].shoeSize)
      }
      else if (this.shoesFilterList[1].brand != '') {
        return shoe.brand === this.shoesFilterList[1].brand
      }
      else if (this.shoesFilterList[2].category != '') {
        return shoe.category === this.shoesFilterList[2].category
      } else {
        return shoe
      }

    })
  }

}

// for (let i=0;i < a.length; i++){
//   console.log(Object.values(a[i])[0])
//   if(Object.values(a[i])[0] !== ''){
//       console.log('inside here')
//       b.push(a[i]);
//   }
// }

