import React from 'react'
import Carousel from "react-elastic-carousel";
import Card from './Card';
import Item from './item';
const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 3 },
    { width: 768, itemsToShow: 4 },
    { width: 1200, itemsToShow: 5},
  ];
const Slider = () => {
  return (
    <div>
      <div className='widthset'>
        <Carousel breakPoints={breakPoints}>
          <Item>
          <Card/>
            {/* <img className="img" src="https://in.sugarcosmetics.com/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0906%2F2558%2Fproducts%2F463817256-smnl-mini-box-shades-of-pink-wbg.jpg%3Fv%3D1673971608&w=256&q=75"/> */}
          </Item>
          <Item>
          {/* <img src="https://in.sugarcosmetics.com/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0906%2F2558%2Fproducts%2F1_529c20ee-c872-4029-9702-8580d7b9a66f.jpg%3Fv%3D1640178644&w=256&q=75"/> */}
          <Card/>
          </Item>
          <Item>
          <Card/>
          {/* <img src="https://in.sugarcosmetics.com/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0906%2F2558%2Fproducts%2F1_529c20ee-c872-4029-9702-8580d7b9a66f.jpg%3Fv%3D1640178644&w=256&q=75"/> */}
          </Item>
          <Item>
          <Card/>
          {/* <img src="https://in.sugarcosmetics.com/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0906%2F2558%2Fproducts%2F1_529c20ee-c872-4029-9702-8580d7b9a66f.jpg%3Fv%3D1640178644&w=256&q=75"/> */}
          </Item>
          <Item>
          <Card/>
          {/* <img src="https://in.sugarcosmetics.com/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0906%2F2558%2Fproducts%2F1_529c20ee-c872-4029-9702-8580d7b9a66f.jpg%3Fv%3D1640178644&w=256&q=75"/> */}
          </Item>
          <Item>
          <Card/>
          {/* <img src="https://in.sugarcosmetics.com/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0906%2F2558%2Fproducts%2F1_529c20ee-c872-4029-9702-8580d7b9a66f.jpg%3Fv%3D1640178644&w=256&q=75"/> */}
          </Item>
          <Item>
          <Card/>
          {/* <img src="https://in.sugarcosmetics.com/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0906%2F2558%2Fproducts%2F1_529c20ee-c872-4029-9702-8580d7b9a66f.jpg%3Fv%3D1640178644&w=256&q=75"/> */}
          </Item>
          <Item>
          <Card/>
          {/* <img src="https://in.sugarcosmetics.com/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0906%2F2558%2Fproducts%2F1_529c20ee-c872-4029-9702-8580d7b9a66f.jpg%3Fv%3D1640178644&w=256&q=75"/> */}
          </Item>
        </Carousel>
      </div>
    </div>
  )
}

export default Slider