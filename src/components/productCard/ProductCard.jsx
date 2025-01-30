import React from 'react'
import module from "./productCard.module.css";

const ProductCard = (props) => {
  return (
    <div className={module.menu}>
        <div className={module.menu_item}>
            <img src="https://static.vecteezy.com/system/resources/previews/022/911/694/non_2x/cute-cartoon-burger-icon-free-png.png" alt="برجر لحم" />
            <div className={module.item_info}>
                <h3> {props.data.title} </h3>
                {/* <p>لحم مشوي مع الجبن والخضار الطازجة</p> */}
                <span className={module.price}>{props.data.price} IQD</span>
            </div>
        </div>

    </div>
  )
}

export default ProductCard
