import React, { useEffect, useState } from 'react'
import {useSearchParams} from 'react-router-dom'
import '../CSS/Sidebar.css'
const Sidebar = () => {
  
  const [searchParams, setSearchParams] =useSearchParams()

  const initalCategory = searchParams.getAll("category");
  const [category, setCategory] = useState(initalCategory || []);
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
  const sortCheckbox = (e) => {
    setSort(e.target.value);
  };
  useEffect(() => {
    let params = {};
    params.category = category;
    sort && (params.sort = sort);
    setSearchParams(params);
  }, [category, setSearchParams, sort]);







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
        <input type={'checkbox'} value="Puma" onChange={FilterCheckbox} checked={category.includes("Puma")}/>
        <label>Puma</label>
      </div>
      <div>
        <input type={'checkbox'} value="U.S. Polo Assn." onChange={FilterCheckbox} checked={category.includes("U.S. Polo Assn.")}/>
        <label>US. Polo</label>
      </div>
      <div>
        <input type={'checkbox'} value="Roadster" onChange={FilterCheckbox} checked={category.includes("Roadster")}/>
        <label>Roadster</label>
      </div>
      <div>
        <input type={'checkbox'} value="Nike" onChange={FilterCheckbox} checked={category.includes("Nike")}/>
        <label>Nike</label>
      </div>
      <div>
        <input type={'checkbox'} value="Campus" onChange={FilterCheckbox} checked={category.includes("Campus")}/>
        <label>Campus</label>
      </div>
    </div>
    </div>
  )
}

export default Sidebar