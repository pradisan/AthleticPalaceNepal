import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  getProduct() {
    return PRODUCTS;
  }




  constructor() { }
}

const PRODUCTS = [

  //Men Shoes items begins

  {
    id: 1,
    category: 'Sneaker',
    gender: 'Men',
    type: 'Shoes',
    name: 'Stan Smith Shoes',
    brand: 'Adidas',
    imageUrl: ['../assets/men-shoes/Stan Smith/Stan_Smith_Shoes_White.jpg', '../assets/men-shoes/Stan Smith/Stan_Smith_Shoes_White_4.jpg', '../assets/men-shoes/Stan Smith/Stan_Smith_Shoes_White_2.jpg'],
    size: ['8', '8.5', '9']
  },
  {
    id: 2,
    gender: 'Men',
    type: 'Shoes',
    category: 'Running',
    name: 'Air Max-97',
    brand: 'Nike',
    imageUrl: ['../assets/men-shoes/Air Max-97/air-max-97-mens-shoe.jpg'],
    size: ['8', '8.5', '9', '10']
  },
  {
    id: 3,
    gender: 'Men',
    type: 'Shoes',
    category: 'Running',
    name: 'NMD_R1',
    brand: 'Adidas',
    imageUrl: ['../assets/men-shoes/NMD R1/NMD_R1.jpg'],
    size: ['7', '8', '8.5', '9']
  },
  {
    id: 4,
    gender: 'Men',
    type: 'Shoes',
    category: 'Sneaker',
    name: 'Superstar',
    brand: 'Adidas',
    imageUrl: ['../assets/men-shoes/Superstar/Superstar_Shoes_White_1.jpg'],
    size: ['8', '8.5', '9', '10']
  },

  {
    id: 5,
    gender: 'Men',
    type: 'Shoes',
    category: 'Slide and Sandle',
    name: 'Kawa Men Slides',
    brand: 'Nike',
    imageUrl: ['../assets/men-shoes/Kawa/kawa-mens-slide.png'],
    size: ['8', '8.5', '9']
  },

  {
    id: 6,
    gender: 'Men',
    type: 'Shoes',
    category: 'Running',
    name: 'Ultraboost',
    brand: 'Adidas',
    imageUrl: ['../assets/men-shoes/Ultraboost/Ultraboost_20_Shoes_1.jpg'],
    size: ['8', '8.5', '9']
  },

  {
    id: 7,
    gender: 'Men',
    type: 'Shoes',
    category: 'Sneaker',
    name: 'Air Jordan 1 Mid',
    brand: 'Nike',
    imageUrl: ['../assets/men-shoes/Air Jordan 1/air-jordan-1-mid-shoe-1.jpg'],
    size: ['8', '8.5', '9']
  },

  {
    id: 8,
    gender: 'Men',
    type: 'Shoes',
    category: 'Sneaker',
    name: 'Air Jordan 4 Retro',
    brand: 'Nike',
    imageUrl: ['../assets/men-shoes/Air Jordan 4 Retro/air-jordan-4-retro-shoe.jpg'],
    size: ['8', '8.5', '9', '10']
  },

  {
    id: 9,
    gender: 'Men',
    type: 'Shoes',
    category: 'Slide and Sandle',
    name: 'Alphabounce Basketball Slides',
    brand: 'Adidas',
    imageUrl: ['../assets/men-shoes/Alphabounce/Alphabounce_Basketball_Slides_White.jpg'],
    size: ['8', '8.5', '9']
  },

  //CLothings Item Begin

  {
    id: 10,
    gender: 'Men',
    type: 'Clothing',
    category: 'Hoodies & Sweats',
    name: 'Nikelab Men Washed Hoodies',
    brand: 'Nike',
    imageUrl: ['../assets/clothings/nikelab-mens-washed-hoodie.jpg'],
    size: ['S', 'M', 'L', 'XL']
  },

  {
    id: 11,
    gender: 'Men',
    type: 'Clothing',
    category: 'Hoodies & Sweats',
    name: 'Adicolor Polar Fleece Crew Sweatshirt',
    brand: 'Adidas',
    imageUrl: ['../assets/clothings/Adicolor_Polar_Fleece_Crew_Sweatshirt_Black.jpg'],
    size: ['S', 'M', 'L', 'XL']
  },


  {
    id: 12,
    gender: 'Men',
    type: 'Clothing',
    category: 'Jacket',
    name: 'Adicolor Training Jacket',
    brand: 'Adidas',
    imageUrl: ['../assets/clothings/Adicolor_Track_Jacket_Red.jpg'],
    size: ['S', 'M']
  },

  {
    id: 13,
    gender: 'Men',
    type: 'Clothing',
    category: 'Hoodies & Sweats',
    name: 'Badge of Sport Fleece Sweatshirt',
    brand: 'Adidas',
    imageUrl: ['../assets/clothings/Badge_of_Sport_Fleece_Sweatshirt_Grey.jpg'],
    size: ['S', 'M', 'L']
  },

  {
    id: 14,
    gender: 'Men',
    type: 'Clothing',
    category: 'T-shirt',
    name: 'Badge of Sport Tee',
    brand: 'Adidas',
    imageUrl: ['../assets/clothings/Badge_of_Sport_Tee_Black.jpg'],
    size: ['S', 'M', 'L']
  },

  {
    id: 15,
    gender: 'Men',
    type: 'Clothing',
    category: 'T-shirt',
    name: 'Air Jordan 4 Retro',
    brand: 'Nike',
    imageUrl: ['../assets/clothings/dri-fit-mens-running-crew.jpg'],
    size: ['S', 'M', 'L']
  },

  {
    id: 16,
    gender: 'Men',
    type: 'Clothing',
    category: 'Hoodies & Sweats',
    name: 'Graphic Hoodies',
    brand: 'Adidas',
    imageUrl: ['../assets/clothings/Must_Haves_Graphic_Hoodie_Black.jpg'],
    size: ['S', 'M', 'L']
  },

  {
    id: 17,
    gender: 'Men',
    type: 'Clothing',
    category: 'Hoodies & Sweats',
    name: 'Sportswear Club Fleece Crew',
    brand: 'Nike',
    imageUrl: ['../assets/clothings/sportswear-club-fleece-crew.jpg'],
    size: ['S', 'M', 'L']
  },

  {
    id: 18,
    gender: 'Men',
    type: 'Clothing',
    category: 'Jacket',
    name: 'Thermal Training Jacket',
    brand: 'Nike',
    imageUrl: ['../assets/clothings/therma-mens-full-zip-training-jacket.jpg'],
    size: ['S', 'M', 'L']
  },


  {
    id: 19,
    gender: 'Men',
    type: 'Clothing',
    category: 'Pants',
    name: 'Z.N.E. AEROREADY Pants',
    brand: 'Adidas',
    imageUrl: ['../assets/clothings/adidas_Z.N.E._AEROREADY_Pants_Blue.jpg'],
    size: ['S', 'M', 'L']
  },


  {
    id: 20,
    gender: 'Men',
    type: 'Clothing',
    category: 'Pants',
    name: 'Sportswear Club Fleece',
    brand: 'Nike',
    imageUrl: ['../assets/clothings/sportswear-club-fleece-mens-pants.jpg'],
    size: ['S', 'L', 'XL']
  },


  {
    id: 21,
    gender: 'Men',
    type: 'Shorts',
    category: 'Pants',
    name: 'Alphaskin Long Tights',
    brand: 'Adidas',
    imageUrl: ['../assets/clothings/Alphaskin_Warm_Graphic_Long_Tights.jpg'],
    size: ['S', 'M', 'XL']
  },


  {
    id: 22,
    gender: 'Men',
    type: 'Clothing',
    category: 'Shorts',
    name: 'Flex Training Shorts',
    brand: 'Nike',
    imageUrl: ['../assets/clothings/flex-mens-training-shorts.jpg'],
    size: ['S', 'M', 'L']
  },

  {
    id: 23,
    gender: 'Men',
    type: 'Clothing',
    category: 'Polo',
    name: 'Men Football Polo',
    brand: 'Nike',
    imageUrl: ['../assets/clothings/mens-football-polo.jpg'],
    size: ['S', 'M', 'XL']
  },

  {
    id: 24,
    gender: 'Men',
    type: 'Clothing',
    category: 'Polo',
    name: 'Ultimate365 Solid Polo Shirt',
    brand: 'Adidas',
    imageUrl: ['../assets/clothings/Ultimate365_Solid_Polo_Shirt.jpg'],
    size: ['S', 'M']
  },

  //Women Shoes Begin

  {
    id: 25,
    gender: 'Women',
    type: 'Shoes',
    category: 'Sneaker',
    name: 'Stan Smith Shoes',
    brand: 'Adidas',
    imageUrl: ['../assets/women-shoes/Stan_Smith_Shoes_White.jpg'],
    size: ['8', '8.5', '9']
  },

  {
    id: 26,
    gender: 'Women',
    type: 'Shoes',
    category: 'Running',
    name: 'Air Zoom Pegasus-37',
    brand: 'Nike',
    imageUrl: ['../assets/women-shoes/air-zoom-pegasus-37.jpg'],
    size: ['7.5', '8', '8.5', '9']
  },

  {
    id: 27,
    gender: 'Women',
    type: 'Shoes',
    category: 'Sneaker',
    name: 'Edge Lux-4',
    brand: 'Adidas',
    imageUrl: ['../assets/women-shoes/Edge_Lux_4.jpg'],
    size: ['8', '8.5', '9', '10']
  },

  {
    id: 28,
    gender: 'Women',
    type: 'Shoes',
    category: 'Slide and Sandle',
    name: 'Benassi JDI',
    brand: 'Nike',
    imageUrl: ['../assets/women-shoes/benassi-jdi-womens-slide.jpg'],
    size: ['7.5', '8', '9',]
  },

  {
    id: 29,
    gender: 'Women',
    type: 'Shoes',
    category: 'Slide and Sandle',
    name: 'Adilette Shower Slides Pink',
    brand: 'Adidas',
    imageUrl: ['../assets/women-shoes/Adilette_Shower_Slides_Pink.jpg'],
    size: ['7', '8.5', '9',]
  },


  {
    id: 30,
    gender: 'Women',
    type: 'Clothing',
    category: 'Hoodies & Sweats',
    name: 'Sportswear Gym Vintage',
    brand: 'Nike',
    imageUrl: ['../assets/women-clothings/sportswear-gym-vintage.jpg'],
    size: ['S', 'M', 'L',]
  },


  {
    id: 31,
    gender: 'Women',
    type: 'Clothing',
    category: 'Hoodies & Sweats',
    name: 'Essentials 3-Stripes Cropped Hoodie',
    brand: 'Adidas',
    imageUrl: ['../assets/women-clothings/Essentials_3-Stripes_Cropped_Hoodie.jpg'],
    size: ['S', 'M', 'L',]
  },


  {
    id: 32,
    gender: 'Women',
    type: 'Clothing',
    category: 'Sports Bra',
    name: 'Dri Fit Swoosh Sports',
    brand: 'Nike',
    imageUrl: ['../assets/women-clothings/dri-fit-swoosh-sports-bra.jpg'],
    size: ['S', 'M', 'L',]
  },


  {
    id: 33,
    gender: 'Women',
    type: 'Clothing',
    category: 'Tights & Leggings',
    name: 'One Luxe Tights',
    brand: 'Nike',
    imageUrl: ['../assets/women-clothings/one-luxe-tights.jpg'],
    size: ['S', 'M', 'L',]
  },


  {
    id: 34,
    gender: 'Women',
    type: 'Clothing',
    category: 'Jacket',
    name: 'Terrex Agravic Rain Jacket',
    brand: 'Adidas',
    imageUrl: ['../assets/women-clothings/Terrex_Agravic_Rain_Jacket.jpg'],
    size: ['S', 'M', 'L',]
  },

  {
    id: 35,
    gender: 'Women',
    type: 'Clothing',
    category: 'T-shirt',
    name: 'Sportswear Essential T-shirt',
    brand: 'Nike',
    imageUrl: ['../assets/women-clothings/sportswear-essential-t-shirt.jpg'],
    size: ['S', 'M', 'L',]
  },

  {
    id: 36,
    gender: 'Women',
    type: 'Clothing',
    category: 'Sports Bra',
    name: 'Essentials Branded Bra Top',
    brand: 'Adidas',
    imageUrl: ['../assets/women-clothings/Essentials_Branded_Bra_Top.jpg'],
    size: ['S', 'M', 'L',]
  },





  //Women Clothing Begin
]