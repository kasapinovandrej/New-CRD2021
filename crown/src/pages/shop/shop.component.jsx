import React, { Component } from "react";
import SHOP_DATA from "../../data/shop.data";
import CollectionPreview from "../../components/preview-collection/collection-preview.component";

class ShopPage extends Component {
  constructor() {
    super();
    this.state = {
      collections: SHOP_DATA,
    };
  }
  render() {
    const { collections } = this.state;
    return (
      <div className="shop-page">
        {collections.map(({ id, ...otherCollection }) => (
          <CollectionPreview key={id} {...otherCollection} />
        ))}
      </div>
    );
  }
}

export default ShopPage;
