import React from "react";
function Header(props) {
  console.warn(props.data);
  return (
    <div>
      <div className="add-to-cart">
        <span className="cart-count">{props.data.length}</span>
        <img src="https://png.pngtree.com/png-clipart/20190516/original/pngtree-add-to-cart--icon-design-png-image_4269419.jpg"></img>
      </div>
    </div>
  );
}

export default Header;
