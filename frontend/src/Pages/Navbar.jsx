import React, { useEffect } from "react";
import "../CSS/Navbar.css";
import image1 from "../Asset/img/p1.jpg";
import image2 from "../Asset/img/p2.jpg";
import image32 from "../Asset/img/p3.jpg";
import image34 from "../Asset/img/p4.jpg";
import shop from "../Asset/img/shop1.jpg";
import pd from "../Asset/img/pd.png";
import { FaUserAlt } from "react-icons/fa";
import { BsFillHeartFill, BsBagCheckFill } from "react-icons/bs";
import { Link, NavLink, useNavigate } from "react-router-dom";
import {
  Box,
  Hide,
  Input,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Show,
  Text,
} from "@chakra-ui/react";
import { BiCart, BiCategory, BiHomeAlt } from "react-icons/bi";
import { AiOutlineHeart } from "react-icons/ai";
import { CgProfile } from "react-icons/cg";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../Redux/Auth/action";

const Navbar = () => {
  useEffect(() => {
    const menu = document.querySelector(".menu");
    const menuMain = menu.querySelector(".menu-main");
    const goBack = menu.querySelector(".go-back");
    const menuTrigger = document.querySelector(".mobile-menu-trigger");
    const closeMenu = menu.querySelector(".mobile-menu-close");
    let subMenu;
    menuMain.addEventListener("click", (e) => {
      if (!menu.classList.contains("active")) {
        return;
      }
      if (e.target.closest(".menu-item-has-children")) {
        const hasChildren = e.target.closest(".menu-item-has-children");
        showSubMenu(hasChildren);
      }
    });
    goBack.addEventListener("click", () => {
      hideSubMenu();
    });
    menuTrigger.addEventListener("click", () => {
      toggleMenu();
    });
    closeMenu.addEventListener("click", () => {
      toggleMenu();
    });
    document.querySelector(".menu-overlay").addEventListener("click", () => {
      toggleMenu();
    });
    function toggleMenu() {
      menu.classList.toggle("active");
      document.querySelector(".menu-overlay").classList.toggle("active");
    }
    function showSubMenu(hasChildren) {
      subMenu = hasChildren.querySelector(".sub-menu");
      subMenu.classList.add("active");
      subMenu.style.animation = "slideLeft 0.5s ease forwards";
      const menuTitle =
        hasChildren.querySelector("i").parentNode.childNodes[0].textContent;
      menu.querySelector(".current-menu-title").innerHTML = menuTitle;
      menu.querySelector(".mobile-menu-head").classList.add("active");
    }
    function hideSubMenu() {
      subMenu.style.animation = "slideRight 0.5s ease forwards";
      setTimeout(() => {
        subMenu.classList.remove("active");
      }, 300);
      menu.querySelector(".current-menu-title").innerHTML = "";
      menu.querySelector(".mobile-menu-head").classList.remove("active");
    }
    window.onresize = function () {
      if (this.innerWidth > 991) {
        if (menu.classList.contains("active")) {
          toggleMenu();
        }
      }
    };
  }, []);
  const dispatch = useDispatch();
  const userLogin = useSelector((store) => store.userLoginReducer);
  const { userInfo } = userLogin;
  const navigate = useNavigate();
  const handleRedirect = () => {
    navigate("/profile");
  };
  const logoutHandler = () => {
    dispatch(logout());
  };
  return (
    <>
      <div className="nav1">
        <header className="header">
          <div className="container">
            <div className="row v-center">
              <div className="header-item item-left ">
                <div className="logo">
                  <Link to={"/"}>
                    <img className="myntra" src={pd} />
                  </Link>
                </div>
              </div>
              {/* menu start here */}
              <div className="header-item item-center">
                <div className="menu-overlay "></div>
                <nav className="menu">
                  <div className="mobile-menu-head menu-mai">
                    <div className="go-back">
                      <i className="fa fa-angle-left" />
                    </div>
                    <div className="current-menu-title" />
                    <div className="mobile-menu-close">×</div>
                  </div>
                  <ul className="menu-main">
                    <li>
                      <Link to={"/"}>Home</Link>
                    </li>
                    <li className="menu-item-has-children">
                      <Link to={"/winter"}>
                        Categories <i className="fa fa-angle-down" />
                      </Link>
                      <div className="sub-menu mega-menu mega-menu-column-4">
                        <div className="list-item text-center">
                          <Link to={"/winter"}>
                            <img src={image1} alt="new Product" />
                            <h4 className="title">Winter</h4>
                          </Link>
                        </div>
                        <div className="list-item text-center">
                          <Link to={"/winter"}>
                            <img src={image2} alt="new Product" />
                            <h4 className="title">Summer</h4>
                          </Link>
                        </div>
                        <div className="list-item text-center">
                          <Link to={"/winter"}>
                            <img src={image32} alt="new Product" />
                            <h4 className="title">Fastivals</h4>
                          </Link>
                        </div>
                        <div className="list-item text-center">
                          <Link to={"/winter"}>
                            <img src={image34} alt="new Product" />
                            <h4 className="title">Trends</h4>
                          </Link>
                        </div>
                      </div>
                    </li>
                    <li className="menu-item-has-children">
                      <Link to={"/winter"}>
                        Mens <i className="fa fa-angle-down" />
                      </Link>
                      <div className="sub-menu mega-menu mega-menu-column-4">
                        <div className="list-item">
                          <h4 className="title">Topwear</h4>
                          <ul>
                            <li>
                              <Link to={"/winter"}>T-Shirts</Link>
                            </li>
                            <li>
                              <Link to={"/winter"}>Casual Shirts</Link>
                            </li>
                            <li>
                              <Link to={"/winter"}>Formal Shirts</Link>
                            </li>
                            <li>
                              <Link to={"/winter"}>Sweatshirts</Link>
                            </li>
                            <li>
                              <Link to={"/winter"}>Sweaters</Link>
                            </li>
                          </ul>
                          <h4 className="title">Bottomwear</h4>
                          <ul>
                            <li>
                              <Link to={"/winter"}>Jeans</Link>
                            </li>
                            <li>
                              <Link to={"/winter"}>Casual Trousers</Link>
                            </li>
                            <li>
                              <Link to={"/winter"}>Formal Trousers</Link>
                            </li>
                          </ul>
                        </div>
                        <div className="list-item">
                          <h4 className="title">Footwear</h4>
                          <ul>
                            <li>
                              <Link to={"/winter"}>Casual Shoes</Link>
                            </li>
                            <li>
                              <Link to={"/winter"}>Sports Shoes</Link>
                            </li>
                            <li>
                              <Link to={"/winter"}>Formal Shoes</Link>
                            </li>
                            <li>
                              <Link to={"/winter"}>Sneakers</Link>
                            </li>
                          </ul>
                          <h4 className="title">Gadgets</h4>
                          <ul>
                            <li>
                              <Link to={"/winter"}>Smart Wearables</Link>
                            </li>
                            <li>
                              <Link to={"/winter"}>Fitness Gadgets</Link>
                            </li>
                            <li>
                              <Link to={"/winter"}>Headphones</Link>
                            </li>
                            <li>
                              <Link to={"/winter"}>Speakers</Link>
                            </li>
                          </ul>
                        </div>
                        <div className="list-item">
                          <h4 className="title">Fashion Accessories</h4>
                          <ul>
                            <li>
                              <Link to={"/winter"}>Rings & Wristwear</Link>
                            </li>
                            <li>
                              <Link to={"/winter"}>Wallets</Link>
                            </li>
                            <li>
                              <Link to={"/winter"}>Belts</Link>
                            </li>
                            <li>
                              <Link to={"/winter"}>Perfumes & Body Mists</Link>
                            </li>
                            <li>
                              <Link to={"/winter"}>Trimmers</Link>
                            </li>
                            <li>
                              <Link to={"/winter"}>Deodorants</Link>
                            </li>
                            <li>
                              <Link to={"/winter"}>Caps & Hats</Link>
                            </li>
                            <li>
                              <Link to={"/winter"}>Phone Cases</Link>
                            </li>
                            <li>
                              <Link to={"/winter"}>Helmets</Link>
                            </li>
                          </ul>
                        </div>
                        <div className="list-item">
                          <img src={shop} alt="shop" />
                        </div>
                      </div>
                    </li>
                    <li className="menu-item-has-children">
                      <Link to={"/winter"}>
                        Womens <i className="fa fa-angle-down" />
                      </Link>
                      <div className="sub-menu mega-menu mega-menu-column-4">
                        <div className="list-item">
                          <h4 className="title">Topwear</h4>
                          <ul>
                            <li>
                              <Link to={"/winter"}>T-Shirts</Link>
                            </li>
                            <li>
                              <Link to={"/winter"}>Casual Shirts</Link>
                            </li>
                            <li>
                              <Link to={"/winter"}>Formal Shirts</Link>
                            </li>
                            <li>
                              <Link to={"/winter"}>Sweatshirts</Link>
                            </li>
                            <li>
                              <Link to={"/winter"}>Sweaters</Link>
                            </li>
                          </ul>
                          <h4 className="title">Bottomwear</h4>
                          <ul>
                            <li>
                              <Link to={"/winter"}>Jeans</Link>
                            </li>
                            <li>
                              <Link to={"/winter"}>Casual Trousers</Link>
                            </li>
                            <li>
                              <Link to={"/winter"}>Formal Trousers</Link>
                            </li>
                          </ul>
                        </div>
                        <div className="list-item">
                          <h4 className="title">Footwear</h4>
                          <ul>
                            <li>
                              <Link to={"/winter"}>Casual Shoes</Link>
                            </li>
                            <li>
                              <Link to={"/winter"}>Sports Shoes</Link>
                            </li>
                            <li>
                              <Link to={"/winter"}>Formal Shoes</Link>
                            </li>
                            <li>
                              <Link to={"/winter"}>Sneakers</Link>
                            </li>
                          </ul>
                          <h4 className="title">Gadgets</h4>
                          <ul>
                            <li>
                              <Link to={"/winter"}>Smart Wearables</Link>
                            </li>
                            <li>
                              <Link to={"/winter"}>Fitness Gadgets</Link>
                            </li>
                            <li>
                              <Link to={"/winter"}>Headphones</Link>
                            </li>
                            <li>
                              <Link to={"/winter"}>Speakers</Link>
                            </li>
                          </ul>
                        </div>
                        <div className="list-item">
                          <h4 className="title">Fashion Accessories</h4>
                          <ul>
                            <li>
                              <Link to={"/winter"}>Rings & Wristwear</Link>
                            </li>
                            <li>
                              <Link to={"/winter"}>Wallets</Link>
                            </li>
                            <li>
                              <Link to={"/winter"}>Belts</Link>
                            </li>
                            <li>
                              <Link to={"/winter"}>Perfumes & Body Mists</Link>
                            </li>
                            <li>
                              <Link to={"/winter"}>Trimmers</Link>
                            </li>
                            <li>
                              <Link to={"/winter"}>Deodorants</Link>
                            </li>
                            <li>
                              <Link to={"/winter"}>Caps & Hats</Link>
                            </li>
                            <li>
                              <Link to={"/winter"}>Phone Cases</Link>
                            </li>
                            <li>
                              <Link to={"/winter"}>Helmets</Link>
                            </li>
                          </ul>
                        </div>
                        <div className="list-item">
                          <h4 className="title">Fashion Accessories</h4>
                          <ul>
                            <li>
                              <Link to={"/winter"}>Rings & Wristwear</Link>
                            </li>
                            <li>
                              <Link to={"/winter"}>Wallets</Link>
                            </li>
                            <li>
                              <Link to={"/winter"}>Belts</Link>
                            </li>
                            <li>
                              <Link to={"/winter"}>Perfumes & Body Mists</Link>
                            </li>
                            <li>
                              <Link to={"/winter"}>Trimmers</Link>
                            </li>
                            <li>
                              <Link to={"/winter"}>Deodorants</Link>
                            </li>
                            <li>
                              <Link to={"/winter"}>Caps & Hats</Link>
                            </li>
                            <li>
                              <Link to={"/winter"}>Phone Cases</Link>
                            </li>
                            <li>
                              <Link to={"/winter"}>Helmets</Link>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </li>
                    <li className="menu-item-has-children">
                      <Link to={"/winter"}>
                        Kids <i className="fa fa-angle-down" />
                      </Link>
                      <div className="sub-menu mega-menu mega-menu-column-4">
                        <div className="list-item">
                          <h4 className="title">Topwear</h4>
                          <ul>
                            <li>
                              <Link to={"/winter"}>T-Shirts</Link>
                            </li>
                            <li>
                              <Link to={"/winter"}>Casual Shirts</Link>
                            </li>
                            <li>
                              <Link to={"/winter"}>Formal Shirts</Link>
                            </li>
                            <li>
                              <Link to={"/winter"}>Sweatshirts</Link>
                            </li>
                            <li>
                              <Link to={"/winter"}>Sweaters</Link>
                            </li>
                          </ul>
                          <h4 className="title">Bottomwear</h4>
                          <ul>
                            <li>
                              <Link to={"/winter"}>Jeans</Link>
                            </li>
                            <li>
                              <Link to={"/winter"}>Casual Trousers</Link>
                            </li>
                            <li>
                              <Link to={"/winter"}>Formal Trousers</Link>
                            </li>
                          </ul>
                        </div>
                        <div className="list-item">
                          <h4 className="title">Footwear</h4>
                          <ul>
                            <li>
                              <Link to={"/winter"}>Casual Shoes</Link>
                            </li>
                            <li>
                              <Link to={"/winter"}>Sports Shoes</Link>
                            </li>
                            <li>
                              <Link to={"/winter"}>Formal Shoes</Link>
                            </li>
                            <li>
                              <Link to={"/winter"}>Sneakers</Link>
                            </li>
                          </ul>
                          <h4 className="title">Gadgets</h4>
                          <ul>
                            <li>
                              <Link to={"/winter"}>Smart Wearables</Link>
                            </li>
                            <li>
                              <Link to={"/winter"}>Fitness Gadgets</Link>
                            </li>
                            <li>
                              <Link to={"/winter"}>Headphones</Link>
                            </li>
                            <li>
                              <Link to={"/winter"}>Speakers</Link>
                            </li>
                          </ul>
                        </div>
                        <div className="list-item">
                          <h4 className="title">Fashion Accessories</h4>
                          <ul>
                            <li>
                              <Link to={"/winter"}>Rings & Wristwear</Link>
                            </li>
                            <li>
                              <Link to={"/winter"}>Wallets</Link>
                            </li>
                            <li>
                              <Link to={"/winter"}>Belts</Link>
                            </li>
                            <li>
                              <Link to={"/winter"}>Perfumes & Body Mists</Link>
                            </li>
                            <li>
                              <Link to={"/winter"}>Trimmers</Link>
                            </li>
                            <li>
                              <Link to={"/winter"}>Deodorants</Link>
                            </li>
                            <li>
                              <Link to={"/winter"}>Caps & Hats</Link>
                            </li>
                            <li>
                              <Link to={"/winter"}>Phone Cases</Link>
                            </li>
                            <li>
                              <Link to={"/winter"}>Helmets</Link>
                            </li>
                          </ul>
                        </div>
                        <div className="list-item">
                          <h4 className="title">Fashion Accessories</h4>
                          <ul>
                            <li>
                              <Link to={"/winter"}>Rings & Wristwear</Link>
                            </li>
                            <li>
                              <Link to={"/winter"}>Wallets</Link>
                            </li>
                            <li>
                              <Link to={"/winter"}>Belts</Link>
                            </li>
                            <li>
                              <Link to={"/winter"}>Perfumes & Body Mists</Link>
                            </li>
                            <li>
                              <Link to={"/winter"}>Trimmers</Link>
                            </li>
                            <li>
                              <Link to={"/winter"}>Deodorants</Link>
                            </li>
                            <li>
                              <Link to={"/winter"}>Caps & Hats</Link>
                            </li>
                            <li>
                              <Link to={"/winter"}>Phone Cases</Link>
                            </li>
                            <li>
                              <Link to={"/winter"}>Helmets</Link>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </li>
                  </ul>
                </nav>
              </div>
              <div className="menu-mai">
                <input
                  className="input"
                  placeholder="    Search for products, brands and more"
                  type="text"
                  autoComplete="off"
                />
              </div>
              <div className="header-item item-right">
                <Hide breakpoint="(max-width: 1186px)">
                
                  <>
                    {userInfo ? (
                      <Box className="alt">
                        <FaUserAlt />
                        <Menu>
                          <MenuButton fontSize={"15px"} fontWeight={"500"}>
                            {userInfo.name}
                          </MenuButton>
                          <MenuList>
                            <MenuItem onClick={handleRedirect}>
                              Profile
                            </MenuItem>

                            <MenuItem onClick={logoutHandler}>Logout</MenuItem>
                          </MenuList>
                        </Menu>
                      </Box>
                    ) : (
                      <Link className="alt" to={"/login"}>
                        <FaUserAlt />
                        <br />
                        <Text mt={"-25px"} fontWeight={"500"}>
                          Login
                        </Text>
                      </Link>
                    )}

                    <Link className="alt" to="/login">
                      <BsFillHeartFill />
                      <br />
                      <Text mt={"-25px"} fontWeight={"500"}>
                        Wishlist
                      </Text>
                    </Link>
                    <Link className="alt" to={"/cart/bag"}>
                      <BsBagCheckFill />
                      <br />
                      <Text mt={"-25px"} fontWeight={"500"}>
                        Cart
                      </Text>
                    </Link>
                  </>
                </Hide>

                <div className="mobile-menu-trigger">
                  <span />
                </div>
              </div>
            </div>
          </div>
        </header>
      </div>
      <Show breakpoint="(max-width: 1186px)">
        <div className="mb_downNav">
          <button className="btn">
            <Link to={"/"}>
              <Text>
                <BiHomeAlt className="icon" />
              </Text>
            </Link>

            <p>Home</p>
          </button>

          <button className="btn">
            <Link to={"/winter"}>
              <Text>
                <BiCategory className="icon" />
              </Text>
            </Link>
            <p>Category</p>
          </button>

          <button className="btn">
            <Link to={"/cart/bag"}>
              <Text>
                <BiCart className="icon" />
              </Text>
              <p>Cart</p>
            </Link>
          </button>

          <button className="btn">
            <Text>
              <AiOutlineHeart className="icon" />
            </Text>
            <p>Wishlist</p>
          </button>

          {userInfo ? (
            <button className="btn">
            <Link to={"/profile"}>
              <Text>
                <CgProfile className="icon" />
              </Text>
              <p>Profile</p>
            </Link>
          </button>
          ) : (
            <Link to={"/login"}>
              <Text>
                <CgProfile className="icon" />
              </Text>
              <p>Profile</p>
            </Link>
          )}
         
        </div>
      </Show>
    </>
  );
};

export default Navbar;
