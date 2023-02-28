import React, { useEffect } from 'react'
import "../CSS/Navbar.css"
import image1 from '../Asset/img/p1.jpg'
import image2 from '../Asset/img/p2.jpg'
import image32 from '../Asset/img/p3.jpg'
import image34 from '../Asset/img/p4.jpg'
import shop from '../Asset/img/shop1.jpg'
import pd from '../Asset/img/pd.png'
import { FaUserAlt } from 'react-icons/fa';
import { BsFillHeartFill,BsBagCheckFill } from 'react-icons/bs';
import { Link,NavLink } from 'react-router-dom';

const Navbar = () => {
  useEffect(()=>{
    const menu = document.querySelector(".menu");
    const menuMain = menu.querySelector(".menu-main");
    const goBack = menu.querySelector(".go-back");
    const menuTrigger = document.querySelector(".mobile-menu-trigger");
    const closeMenu = menu.querySelector(".mobile-menu-close");
    let subMenu;
    menuMain.addEventListener("click",(e) =>{
      if(!menu.classList.contains("active")){
        return;
      }
      if(e.target.closest(".menu-item-has-children")){
         const hasChildren = e.target.closest(".menu-item-has-children");
         showSubMenu(hasChildren);
      }
    });
    goBack.addEventListener("click",() =>{
       hideSubMenu();
    })
    menuTrigger.addEventListener("click",() =>{
       toggleMenu();
    })
    closeMenu.addEventListener("click",() =>{
       toggleMenu();
    })
    document.querySelector(".menu-overlay").addEventListener("click",() =>{
      toggleMenu();
    })
    function toggleMenu(){
      menu.classList.toggle("active");
      document.querySelector(".menu-overlay").classList.toggle("active");
    }
    function showSubMenu(hasChildren){
       subMenu = hasChildren.querySelector(".sub-menu");
       subMenu.classList.add("active");
       subMenu.style.animation = "slideLeft 0.5s ease forwards";
       const menuTitle = hasChildren.querySelector("i").parentNode.childNodes[0].textContent;
       menu.querySelector(".current-menu-title").innerHTML=menuTitle;
       menu.querySelector(".mobile-menu-head").classList.add("active");
    }
    function  hideSubMenu(){  
       subMenu.style.animation = "slideRight 0.5s ease forwards";
       setTimeout(() =>{
          subMenu.classList.remove("active");	
       },300); 
       menu.querySelector(".current-menu-title").innerHTML="";
       menu.querySelector(".mobile-menu-head").classList.remove("active");
    }
    window.onresize = function(){
      if(this.innerWidth >991){
        if(menu.classList.contains("active")){
          toggleMenu();
        }
      }
    }
   
   
    
  },[])
  return (
    <>
    <div className='nav1'>
     <header className="header">
        <div className="container">
          <div className="row v-center">
            <div className="header-item item-left ">
              <div  className="logo">
                <Link to={"/"}><img className='myntra' src={pd}/></Link>
              </div>
            </div>
            {/* menu start here */}
            <div className="header-item item-center">
              <div className="menu-overlay">
              </div>
              <nav className="menu">
                <div className="mobile-menu-head">
                  <div className="go-back"><i className="fa fa-angle-left" /></div>
                  <div className="current-menu-title" />
                  <div className="mobile-menu-close">×</div>
                </div>
                <ul className="menu-main">
                  <li>
                    
                    <Link to={"/"}>Home</Link>
                    
                  </li>
                  <li className="menu-item-has-children">
                    <a href="#">Categories <i className="fa fa-angle-down" /></a>
                    <div className="sub-menu mega-menu mega-menu-column-4">
                      <div className="list-item text-center">
                        <Link to={"/winter"}>
                          <img src={image1} alt="new Product" />
                          <h4 className="title">Winter</h4>
                        </Link>
                      </div>
                      <div className="list-item text-center">
                        <a href="#">
                          <img src={image2} alt="new Product" />
                          <h4 className="title">Summer</h4>
                        </a>
                      </div>
                      <div className="list-item text-center">
                        <a href="#">
                          <img src={image32} alt="new Product" />
                          <h4 className="title">Fastivals</h4>
                        </a>
                      </div>
                      <div className="list-item text-center">
                        <a href="#">
                          <img src={image34} alt="new Product" />
                          <h4 className="title">Trends</h4>
                        </a>
                      </div>
                    </div>
                  </li>
                  <li className="menu-item-has-children">
                    <a href="#">Mens <i className="fa fa-angle-down" /></a>
                    <div className="sub-menu mega-menu mega-menu-column-4">
                      <div className="list-item">
                        <h4 className="title">Topwear</h4>
                        <ul>
                          <li><a href="#">T-Shirts</a></li>
                          <li><a href="#">Casual Shirts</a></li>
                          <li><a href="#">Formal Shirts</a></li>
                          <li><a href="#">Sweatshirts</a></li>
                          <li><a href="#">Sweaters</a></li>
                        </ul>
                        <h4 className="title">Bottomwear</h4>
                        <ul>
                          <li><a href="#">Jeans</a></li>
                          <li><a href="#">Casual Trousers</a></li>
                          <li><a href="#">Formal Trousers</a></li>
                        </ul>
                      </div>
                      <div className="list-item">
                        <h4 className="title">Footwear</h4>
                        <ul>
                          <li><a href="#">Casual Shoes</a></li>
                          <li><a href="#">Sports Shoes</a></li>
                          <li><a href="#">Formal Shoes</a></li>
                          <li><a href="#">Sneakers</a></li>
                        </ul>
                        <h4 className="title">Gadgets</h4>
                        <ul>
                          <li><a href="#">Smart Wearables</a></li>
                          <li><a href="#">Fitness Gadgets</a></li>
                          <li><a href="#">Headphones</a></li>
                          <li><a href="#">Speakers</a></li>
                        </ul>
                      </div>
                      <div className="list-item">
                        <h4 className="title">Fashion Accessories</h4>
                        <ul>
                          <li><a href="#">Rings & Wristwear</a></li>
                          <li><a href="#">Wallets</a></li>
                          <li><a href="#">Belts</a></li>
                          <li><a href="#">Perfumes & Body Mists</a></li>
                          <li><a href="#">Trimmers</a></li>
                          <li><a href="#">Deodorants</a></li>
                          <li><a href="#">Caps & Hats</a></li>
                          <li><a href="#">Phone Cases</a></li>
                          <li><a href="#">Helmets</a></li>
                        </ul>
                      </div>
                      <div className="list-item">
                        <img src={shop} alt="shop" />
                      </div>
                    </div>
                  </li>
                  <li className="menu-item-has-children">
                    <a href="#">Womens <i className="fa fa-angle-down" /></a>
                    <div className="sub-menu mega-menu mega-menu-column-4">
                      <div className="list-item">
                        <h4 className="title">Topwear</h4>
                        <ul>
                          <li><a href="#">T-Shirts</a></li>
                          <li><a href="#">Casual Shirts</a></li>
                          <li><a href="#">Formal Shirts</a></li>
                          <li><a href="#">Sweatshirts</a></li>
                          <li><a href="#">Sweaters</a></li>
                        </ul>
                        <h4 className="title">Bottomwear</h4>
                        <ul>
                          <li><a href="#">Jeans</a></li>
                          <li><a href="#">Casual Trousers</a></li>
                          <li><a href="#">Formal Trousers</a></li>
                        </ul>
                      </div>
                      <div className="list-item">
                        <h4 className="title">Footwear</h4>
                        <ul>
                          <li><a href="#">Casual Shoes</a></li>
                          <li><a href="#">Sports Shoes</a></li>
                          <li><a href="#">Formal Shoes</a></li>
                          <li><a href="#">Sneakers</a></li>
                        </ul>
                        <h4 className="title">Gadgets</h4>
                        <ul>
                          <li><a href="#">Smart Wearables</a></li>
                          <li><a href="#">Fitness Gadgets</a></li>
                          <li><a href="#">Headphones</a></li>
                          <li><a href="#">Speakers</a></li>
                        </ul>
                      </div>
                      <div className="list-item">
                        <h4 className="title">Fashion Accessories</h4>
                        <ul>
                          <li><a href="#">Rings & Wristwear</a></li>
                          <li><a href="#">Wallets</a></li>
                          <li><a href="#">Belts</a></li>
                          <li><a href="#">Perfumes & Body Mists</a></li>
                          <li><a href="#">Trimmers</a></li>
                          <li><a href="#">Deodorants</a></li>
                          <li><a href="#">Caps & Hats</a></li>
                          <li><a href="#">Phone Cases</a></li>
                          <li><a href="#">Helmets</a></li>
                        </ul>
                      </div>
                      <div className="list-item">
                        <h4 className="title">Fashion Accessories</h4>
                        <ul>
                          <li><a href="#">Rings & Wristwear</a></li>
                          <li><a href="#">Wallets</a></li>
                          <li><a href="#">Belts</a></li>
                          <li><a href="#">Perfumes & Body Mists</a></li>
                          <li><a href="#">Trimmers</a></li>
                          <li><a href="#">Deodorants</a></li>
                          <li><a href="#">Caps & Hats</a></li>
                          <li><a href="#">Phone Cases</a></li>
                          <li><a href="#">Helmets</a></li>
                        </ul>
                      </div>
                    </div>
                  </li>
                  
                  <li className="menu-item-has-children">
                    <a href="#">Kids <i className="fa fa-angle-down" /></a>
                    <div className="sub-menu mega-menu mega-menu-column-4">
                      <div className="list-item">
                        <h4 className="title">Topwear</h4>
                        <ul>
                          <li><a href="#">T-Shirts</a></li>
                          <li><a href="#">Casual Shirts</a></li>
                          <li><a href="#">Formal Shirts</a></li>
                          <li><a href="#">Sweatshirts</a></li>
                          <li><a href="#">Sweaters</a></li>
                        </ul>
                        <h4 className="title">Bottomwear</h4>
                        <ul>
                          <li><a href="#">Jeans</a></li>
                          <li><a href="#">Casual Trousers</a></li>
                          <li><a href="#">Formal Trousers</a></li>
                        </ul>
                      </div>
                      <div className="list-item">
                        <h4 className="title">Footwear</h4>
                        <ul>
                          <li><a href="#">Casual Shoes</a></li>
                          <li><a href="#">Sports Shoes</a></li>
                          <li><a href="#">Formal Shoes</a></li>
                          <li><a href="#">Sneakers</a></li>
                        </ul>
                        <h4 className="title">Gadgets</h4>
                        <ul>
                          <li><a href="#">Smart Wearables</a></li>
                          <li><a href="#">Fitness Gadgets</a></li>
                          <li><a href="#">Headphones</a></li>
                          <li><a href="#">Speakers</a></li>
                        </ul>
                      </div>
                      <div className="list-item">
                        <h4 className="title">Fashion Accessories</h4>
                        <ul>
                          <li><a href="#">Rings & Wristwear</a></li>
                          <li><a href="#">Wallets</a></li>
                          <li><a href="#">Belts</a></li>
                          <li><a href="#">Perfumes & Body Mists</a></li>
                          <li><a href="#">Trimmers</a></li>
                          <li><a href="#">Deodorants</a></li>
                          <li><a href="#">Caps & Hats</a></li>
                          <li><a href="#">Phone Cases</a></li>
                          <li><a href="#">Helmets</a></li>
                        </ul>
                      </div>
                      <div className="list-item">
                        <h4 className="title">Fashion Accessories</h4>
                        <ul>
                          <li><a href="#">Rings & Wristwear</a></li>
                          <li><a href="#">Wallets</a></li>
                          <li><a href="#">Belts</a></li>
                          <li><a href="#">Perfumes & Body Mists</a></li>
                          <li><a href="#">Trimmers</a></li>
                          <li><a href="#">Deodorants</a></li>
                          <li><a href="#">Caps & Hats</a></li>
                          <li><a href="#">Phone Cases</a></li>
                          <li><a href="#">Helmets</a></li>
                        </ul>
                      </div>
                    </div>
                  </li>
                </ul>
              </nav>
            </div>
            <div>






              <input 
              className='input' 
              placeholder='Search for products, brands and more'
              type='text'
              autoComplete='off'
              />
            </div>
           

            <div className="header-item item-right">
              <a href="#"><FaUserAlt/></a>
              <a href="#"><BsFillHeartFill/></a>
              <a href="#"><BsBagCheckFill/></a>
              {/* mobile menu trigger */}
              <div className="mobile-menu-trigger">
                <span />
              </div>
            </div>
          </div>
        </div>

      </header>
      
    </div>
    </>
  )
}

export default Navbar