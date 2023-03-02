import React, { useState } from 'react'
import { FaCheck } from 'react-icons/fa';
import '../CSS/SingleProduct.css'
import styled from 'styled-components';
const SizeProduct = ({size}) => {
    const [color, setColor] = useState(size[0]);
  return (
    <Wrapper>
    <div className='size'>
    <p>
            Colors:
            {
                size.map((curColor,index)=>{
                    return (
                        <button
                key={index}
                
                style={{ backgroundColor: curColor }}
                className={color === curColor ? "btnStyle active" : "btnStyle"}
                onClick={() => setColor(curColor)}>
                {color === curColor ? <FaCheck className="checkStyle" /> : null}
              </button>
                    )
                   
                })
            }
        </p>
    </div>
    </Wrapper>
  )
}
const Wrapper = styled.section`
  .colors p {
    display: flex;
    justify-content: flex-start;
    align-items: center;
  }
  .btnStyle {
    width: 2rem;
    height: 2rem;
    background-color: #000;
    border-radius: 50%;
    margin-left: 1rem;
    border: none;
    outline: none;
    opacity: 0.5;
    cursor: pointer;
    &:hover {
      opacity: 1;
    }
  }
  .active {
    opacity: 1;
  }
  .checkStyle {
    font-size: 1.4rem;
    color: #fff;
    margin-left: 3px;
  }
`;
export default SizeProduct