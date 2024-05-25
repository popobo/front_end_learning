import { Component } from "react";
import "./category-item.styles.scss";

class CategoryItem extends Component {
  render() {
    const { title, imageUrl } = this.props.category;

    console.log(title, imageUrl);

    return (
      <div className="category-container">
        <div
          className="background-image"
          style={{
            backgroundImage: `url(${imageUrl})`,
          }}
        ></div>
        <div className="category-body-container">
          <h2>{title}</h2>
          <p>Shop Now</p>
        </div>
      </div>
    );
  }
}

export default CategoryItem;
