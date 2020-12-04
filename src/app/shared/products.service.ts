import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  getShoesItems() {
    return SHOESITEMS;
  }

  getClothingItems() {
    return CLOTHINGS;
  }

  getProduct() {
    return PRODUCT;
  }

  constructor() { }
}

const SHOESITEMS = [

  {
    id: 1,
    category: 'Sneaker',
    gender: 'Men',
    type: 'Shoes',
    name: 'Stan Smith Shoes',
    brand: 'Adidas',
    imageUrl: ['../assets/shoes/Stan Smith/Stan_Smith_Shoes_White.jpg', '../assets/shoes/Stan Smith/Stan_Smith_Shoes_White_4.jpg', '../assets/shoes/Stan Smith/Stan_Smith_Shoes_White_2.jpg'],
    size: ['8', '8.5', '9']
  },
  {
    id: 2,
    gender: 'Men',
    type: 'Shoes',
    category: 'Running',
    name: 'Air Max-97',
    brand: 'Nike',
    imageUrl: ['../assets/shoes/Air Max-97/air-max-97-mens-shoe.jpg'],
    size: ['8', '8.5', '9', '10']
  },
  {
    id: 3,
    gender: 'Men',
    type: 'Shoes',
    category: 'Running',
    name: 'NMD_R1',
    brand: 'Adidas',
    imageUrl: ['../assets/shoes/NMD R1/NMD_R1.jpg'],
    size: ['8', '8.5', '9']
  },
  {
    id: 4,
    gender: 'Men',
    type: 'Shoes',
    category: 'Sneaker',
    name: 'Superstar',
    brand: 'Adidas',
    imageUrl: ['../assets/shoes/Superstar/Superstar_Shoes_White_1.jpg'],
    size: ['8', '8.5', '9', '10']
  },

  {
    id: 5,
    gender: 'Men',
    type: 'Shoes',
    category: 'Slide and Sandle',
    name: 'Kawa Men Slides',
    brand: 'Nike',
    imageUrl: ['../assets/shoes/Kawa/kawa-mens-slide.png'],
    size: ['8', '8.5', '9']
  },

  {
    id: 6,
    gender: 'Men',
    type: 'Shoes',
    category: 'Running',
    name: 'Ultraboost',
    brand: 'Adidas',
    imageUrl: ['../assets/shoes/Ultraboost/Ultraboost_20_Shoes_1.jpg'],
    size: ['8', '8.5', '9']
  },

  {
    id: 7,
    gender: 'Men',
    type: 'Shoes',
    category: 'Sneaker',
    name: 'Air Jordan 1 Mid',
    brand: 'Nike',
    imageUrl: ['../assets/shoes/Air Jordan 1/air-jordan-1-mid-shoe-1.jpg'],
    size: ['8', '8.5', '9']
  },

  {
    id: 8,
    gender: 'Men',
    type: 'Shoes',
    category: 'Sneaker',
    name: 'Air Jordan 4 Retro',
    brand: 'Nike',
    imageUrl: ['../assets/shoes/Air Jordan 4 Retro/air-jordan-4-retro-shoe.jpg'],
    size: ['8', '8.5', '9']
  },

  {
    id: 9,
    gender: 'Men',
    type: 'Shoes',
    category: 'Slide and Sandle',
    name: 'Alphabounce Basketball Slides',
    brand: 'Adidas',
    imageUrl: ['../assets/shoes/Alphabounce/Alphabounce_Basketball_Slides_White.jpg'],
    size: ['8', '8.5', '9']
  },

  {
    id: 10,
    gender: 'Men',
    type: 'Clothing',
    category: 'Hoodies & Sweats',
    name: 'Nikelab Men Washed Hoodies',
    brand: 'Clothing',
    imageUrl: ['../assets/tops/nikelab-mens-washed-hoodie.jpg'],
    size: ['S', 'M', 'L']
  },

  {
    id: 12,
    gender: 'Men',
    type: 'Clothing',
    category: 'Hoodies & Sweats',
    name: 'Adicolor Polar Fleece Crew Sweatshirt',
    brand: 'Adidas',
    imageUrl: ['../assets/tops/Adicolor_Polar_Fleece_Crew_Sweatshirt_Black.jpg'],
    size: ['S', 'M', 'L']
  }
]


const CLOTHINGS = [
  {
    id: 1,
    gender: 'Men',
    type: 'Clothing',
    category: 'Hoodies & Sweats',
    name: 'Nikelab Men Washed Hoodies',
    brand: 'Clothing',
    imageUrl: ['../assets/tops/nikelab-mens-washed-hoodie.jpg'],
    size: ['S', 'M', 'L']
  },
  {
    id: 2,
    gender: 'Men',
    type: 'Clothing',
    category: 'Hoodies & Sweats',
    name: 'Adicolor Polar Fleece Crew Sweatshirt',
    brand: 'Adidas',
    imageUrl: ['../assets/tops/Adicolor_Polar_Fleece_Crew_Sweatshirt_Black.jpg'],
    size: ['S', 'M', 'L']
  },
  {
    id: 3,
    gender: 'Men',
    type: 'Clothing',
    category: 'Hoodies & Sweats',
    name: 'Badge of Sport Fleece Sweatshirt',
    brand: 'Adidas',
    imageUrl: ['../assets/tops/Badge_of_Sport_Fleece_Sweatshirt_Grey.jpg'],
    size: ['S', 'M', 'L']
  },

  {
    id: 4,
    gender: 'Men',
    type: 'Shoes',
    category: 'T-shirt',
    name: 'Badge of Sport Tee',
    brand: 'Adidas',
    imageUrl: ['../assets/tops/Badge_of_Sport_Tee_Black.jpg'],
    size: ['S', 'M', 'L']
  },

  {
    id: 5,
    gender: 'Men',
    type: 'Shoes',
    category: 'T-shirt',
    name: 'Air Jordan 4 Retro',
    brand: 'Nike',
    imageUrl: ['../assets/tops/dri-fit-mens-running-crew.jpg'],
    size: ['S', 'M', 'L']
  },

  {
    id: 6,
    gender: 'Men',
    type: 'Shoes',
    category: 'Hoodies & Sweats',
    name: 'Graphic Hoodies',
    brand: 'Adidas',
    imageUrl: ['../assets/tops/Must_Haves_Graphic_Hoodie_Black.jpg'],
    size: ['S', 'M', 'L']
  },

  {
    id: 7,
    gender: 'Men',
    type: 'Shoes',
    category: 'Hoodies & Sweats',
    name: 'Sportswear Club Fleece Crew',
    brand: 'Nike',
    imageUrl: ['../assets/tops/sportswear-club-fleece-crew.jpg'],
    size: ['S', 'M', 'L']
  },

  {
    id: 8,
    gender: 'Men',
    type: 'Shoes',
    category: 'Jacket',
    name: 'Thermal Training Jacket',
    brand: 'Nike',
    imageUrl: ['../assets/tops/therma-mens-full-zip-training-jacket.jpg'],
    size: ['S', 'M', 'L']
  },
]



const PRODUCT = [

  {
    id: 1,
    category: 'Sneaker',
    gender: 'Men',
    type: 'Shoes',
    name: 'Stan Smith Shoes',
    brand: 'Adidas',
    imageUrl: ['../assets/shoes/Stan Smith/Stan_Smith_Shoes_White.jpg', '../assets/shoes/Stan Smith/Stan_Smith_Shoes_White_4.jpg', '../assets/shoes/Stan Smith/Stan_Smith_Shoes_White_2.jpg'],
    size: ['8', '8.5', '9']
  },
  {
    id: 2,
    gender: 'Men',
    type: 'Shoes',
    category: 'Running',
    name: 'Air Max-97',
    brand: 'Nike',
    imageUrl: ['../assets/shoes/Air Max-97/air-max-97-mens-shoe.jpg'],
    size: ['8', '8.5', '9', '10']
  },
  {
    id: 3,
    gender: 'Men',
    type: 'Shoes',
    category: 'Running',
    name: 'NMD_R1',
    brand: 'Adidas',
    imageUrl: ['../assets/shoes/NMD R1/NMD_R1.jpg'],
    size: ['8', '8.5', '9']
  },
  {
    id: 4,
    gender: 'Men',
    type: 'Shoes',
    category: 'Sneaker',
    name: 'Superstar',
    brand: 'Adidas',
    imageUrl: ['../assets/shoes/Superstar/Superstar_Shoes_White_1.jpg'],
    size: ['8', '8.5', '9', '10']
  },

  {
    id: 5,
    gender: 'Men',
    type: 'Shoes',
    category: 'Slide and Sandle',
    name: 'Kawa Men Slides',
    brand: 'Nike',
    imageUrl: ['../assets/shoes/Kawa/kawa-mens-slide.png'],
    size: ['8', '8.5', '9']
  },

  {
    id: 6,
    gender: 'Men',
    type: 'Shoes',
    category: 'Running',
    name: 'Ultraboost',
    brand: 'Adidas',
    imageUrl: ['../assets/shoes/Ultraboost/Ultraboost_20_Shoes_1.jpg'],
    size: ['8', '8.5', '9']
  },

  {
    id: 7,
    gender: 'Men',
    type: 'Shoes',
    category: 'Sneaker',
    name: 'Air Jordan 1 Mid',
    brand: 'Nike',
    imageUrl: ['../assets/shoes/Air Jordan 1/air-jordan-1-mid-shoe-1.jpg'],
    size: ['8', '8.5', '9']
  },

  {
    id: 8,
    gender: 'Men',
    type: 'Shoes',
    category: 'Sneaker',
    name: 'Air Jordan 4 Retro',
    brand: 'Nike',
    imageUrl: ['../assets/shoes/Air Jordan 4 Retro/air-jordan-4-retro-shoe.jpg'],
    size: ['8', '8.5', '9']
  },

  {
    id: 9,
    gender: 'Men',
    type: 'Shoes',
    category: 'Slide and Sandle',
    name: 'Alphabounce Basketball Slides',
    brand: 'Adidas',
    imageUrl: ['../assets/shoes/Alphabounce/Alphabounce_Basketball_Slides_White.jpg'],
    size: ['8', '8.5', '9']
  },

  {
    id: 10,
    gender: 'Men',
    type: 'Clothing',
    category: 'Hoodies & Sweats',
    name: 'Nikelab Men Washed Hoodies',
    brand: 'Clothing',
    imageUrl: ['../assets/tops/nikelab-mens-washed-hoodie.jpg'],
    size: ['S', 'M', 'L']
  },

  {
    id: 12,
    gender: 'Men',
    type: 'Clothing',
    category: 'Hoodies & Sweats',
    name: 'Adicolor Polar Fleece Crew Sweatshirt',
    brand: 'Adidas',
    imageUrl: ['../assets/tops/Adicolor_Polar_Fleece_Crew_Sweatshirt_Black.jpg'],
    size: ['S', 'M', 'L']
  }
]