import React from 'react'
import module from "./productCard.module.css";

const ProductCard = () => {
  return (
    <div className={module.menu}>
        <div className={module.menu_item}>
            <img src="https://static.vecteezy.com/system/resources/previews/022/911/694/non_2x/cute-cartoon-burger-icon-free-png.png" alt="برجر لحم" />
            <div className={module.item_info}>
                <h3>برجر لحم</h3>
                <p>لحم مشوي مع الجبن والخضار الطازجة</p>
                <span className={module.price}>4500 IQD</span>
            </div>
        </div>

    </div>
  )
}

export default ProductCard
