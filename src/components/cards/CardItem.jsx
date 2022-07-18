import React from 'react';
import { Link } from 'react-router-dom';
import './carditem.css';

function CardItem(props) {
  return (
    <>
      <li className = "cards__item">
        <Link className = "cards__item__link" to = {props.path}>
            <img src = {props.src} alt = "Project Preview" className = "cards__item__img"/>
        </Link>
      </li>
    </>
  )
}

export default CardItem;
