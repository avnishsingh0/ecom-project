import React, { useEffect, useState } from 'react'
import {useSearchParams} from 'react-router-dom'
import '../CSS/Sidebar.css'
const Sidebar = () => {
  
  const [searchParams, setSearchParams] =useSearchParams()

  const initalCategory = searchParams.getAll("category");
  const intialBrand= searchParams.getAll('brand')
  const [category, setCategory] = useState(initalCategory || []);
  const [brand, setBrand]= useState(intialBrand || [])
  const initalSort = searchParams.getAll("sort");
  const [sort, setSort] = useState(initalSort[0] || "");

  const FilterCheckbox = (e) => {
    const newCategories = [...category];
    
    if (newCategories.includes(e.target.value)) {
      newCategories.splice(newCategories.indexOf(e.target.value), 1);
    } else {
      newCategories.push(e.target.value);
    }
    setCategory(newCategories);

    
  };
  
  const FilterBrand=(e)=>{
    const newBrand= [...brand]
    if (newBrand.includes(e.target.value)) {
      newBrand.splice(newBrand.indexOf(e.target.value), 1);
    } else {
      newBrand.push(e.target.value);
    }
    setBrand(newBrand);
  }




  const sortCheckbox = (e) => {
    setSort(e.target.value);
  };
  useEffect(() => {
    let params = {};
    params.category = category;
    params.brand= brand;
    sort && (params.sort = sort);
    setSearchParams(params);
  }, [category, setSearchParams, sort,brand]);







  return (
    <div className='main' style={{position:'sticky',top:'45px'}} >
    <div className='filter_h1'><h1>FILTERS </h1> <h1>CLEAR ALL</h1></div>
    <div className='main-sidebar-div' >
      <div className='radio-div'>
      <br />
        <input value="asc" name="sort" onChange={sortCheckbox}  type="radio" checked={sort.includes("asc")} />
        <label>Men</label>
        <br />
        <input value="desc" name="sort" onChange={sortCheckbox}  type="radio" checked={sort.includes("desc")} />
        <label>Women</label>
        <br />
        <input value="desc" name="sort" onChange={sortCheckbox}  type="radio" checked={sort.includes("desc")} />
        <label>Boys</label>
        <br />
        <input value="desc" name="sort" onChange={sortCheckbox}  type="radio" checked={sort.includes("desc")} />
        <label>Girl</label>
      </div>
      <hr/>
      <h1 className='filter-cat'>CATEGORIES</h1>
      <div className='catogery_div'>
      
      
      <div>
        <input type={'checkbox'} value="Shoes" onChange={FilterCheckbox} checked={category.includes("Shoes")}/>
        <label>Shoes</label>
      </div>
      <div>
        <input type={'checkbox'} value="Shirt" onChange={FilterCheckbox} checked={category.includes("Shirt")}/>
        <label>Shirt</label>
      </div>
      <div>
        <input type={'checkbox'} value="Jacket" onChange={FilterCheckbox} checked={category.includes("Jacket")}/>
        <label>Jacket</label>
      </div>
      <div>
        <input type={'checkbox'} value="SweatShirt" onChange={FilterCheckbox} checked={category.includes("SweatShirt")}/>
        <label>Sweatshirt</label>
      </div>
      <div>
        <input type={'checkbox'} value="Sweater" onChange={FilterCheckbox} checked={category.includes("Sweater")}/>
        <label>Sweater</label>
      </div>
      </div>


      <hr/>
      <h1 className='filter-cat'>BRAND</h1>
      <div className='catogery_div'>
        <input type={'checkbox'} value="Puma" onChange={FilterBrand} checked={brand.includes("Puma")}/>
        <label>Puma</label>
      </div>
      <div>
        <input type={'checkbox'} value="U.S. Polo Assn." onChange={FilterBrand} checked={brand.includes("U.S. Polo Assn.")}/>
        <label>US. Polo</label>
      </div>
      <div>
        <input type={'checkbox'} value="Roadster" onChange={FilterBrand} checked={brand.includes("Roadster")}/>
        <label>Roadster</label>
      </div>
      <div>
        <input type={'checkbox'} value="Nike" onChange={FilterBrand} checked={brand.includes("Nike")}/>
        <label>Nike</label>
      </div>
      <div>
        <input type={'checkbox'} value="Campus" onChange={FilterBrand} checked={brand.includes("Campus")}/>
        <label>Campus</label>
      </div>
    </div>
    </div>
  )
}

export default Sidebar