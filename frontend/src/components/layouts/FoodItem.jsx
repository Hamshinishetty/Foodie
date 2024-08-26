import React from 'react'
import { LiaRupeeSignSolid } from "react-icons/lia";

export default function FoodItem() {
  return (
    <div className="col-sm-12 col-md-6 col-lg-3 my-3">
        <div className="card p-3 roubded">
            <img src="https://media-cdn.tripadvisor.com/media/photo-p/0f/4a/e3/2e/fajita-stuffed-chicken.jpg"
             alt="Chicken Tenders" className="card-img-top mx-auto" />
             <div className="card-body d-flex flex-column">
                <h5 className="card-title">
                    Chicken Tenders
                </h5>
                <p className="fooditem-des">Chicken Tenders served with gravy</p>
                <p className="card-text">
                <LiaRupeeSignSolid /> 180
                <br />
                </p>
                <button type="button" id="cart_btn" className="btn btn-primary d-inline ml-4">Add to Cart</button>
                <br />
                <p>Status:{" "} <span id = "stock_status"
                className={10>5 ? "greenColor" : "redColor"}
                >
                    {10 > 5 ? "In Stock" : "Out of Stock"}
                </span></p>
             </div>
        </div>
    </div>
  )
}
