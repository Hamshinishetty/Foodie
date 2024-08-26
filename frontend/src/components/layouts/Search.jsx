import React from 'react'
import { MdOutlineSearch } from "react-icons/md";

export default function Search() {
  return (
    <form>
        <div className="input-group">
        <input type="text" placeholder="Search your favourite resturant" id="search_field" className="form-control" />
        <div className="input-group-append">
            <button id="search_btn" className="btn">
                <MdOutlineSearch className="fa fa-search"/>
            </button>
        </div>
    </div>
  </form>
  );
}
