import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom'
import PayPalButton from './PaypalButton';

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    fetchProductDetails();
  }, []);

  const fetchProductDetails = async () => {
    try {
      const response = await fetch(`https://fakestoreapi.com/products/${id}`);
      const data = await response.json();
      setProduct(data);
    } catch (error) {
      console.error("Error fetching product details:", error);
    }
  };

  if (!product) {
    return <div>Loading product details...</div>;
  }

  return (
    <>
      <div>
        <div id="page">
          <nav className="colorlib-nav" role="navigation">
            <div className="top-menu">
              <div className="container">
                <div className="row">
                  <div className="col-sm-7 col-md-9">
                    <div id="colorlib-logo"><a href="index.html">Footwear</a></div>
                  </div>
                  <div className="col-sm-5 col-md-3">
                    <form action="#" className="search-wrap">
                      <div className="form-group">
                        <input type="search" className="form-control search" placeholder="Search"/>
                        <button className="btn btn-primary submit-search text-center" type="submit"><i className="icon-search"></i></button>
                      </div>
                    </form>
                  </div>
                </div>
                <div className="row">
                  <div className="col-sm-12 text-left menu-1">
                    <ul>
                      <li><Link to="/home">Home</Link></li>
                      <li className="has-dropdown active">
                        <Link to="/men">Men</Link>
                        <ul className="dropdown">
                          <li><Link to="/productdetail">ProductDetail</Link></li>
                          <li><Link to="/cart">Cart</Link></li>
                          <li><Link to="/checkout">Checkout</Link></li>
                          <li><Link to="/ordercomplete">OrderComplete</Link></li>
                          <li><Link to="/addtowishlist">AddWishlist</Link></li>
                        </ul>
                      </li>
                      {/* <li><Link to="/women">Women</Link></li> */}
                      <li><Link to="/about">About</Link></li>
                      <li><a href="/contact">Contact</a></li>
                      <li className="cart"><Link to="/cart"><i className="icon-shopping-cart"></i> Cart [0]</Link></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="sale">
              <div className="container">
                <div className="row">
                  <div className="col-sm-8 offset-sm-2 text-center">
                    <div className="row">
                      <div className="owl-carousel2">
                        <div className="item">
                          <div className="col">
                            <h3><a href="#">25% off (Almost) Everything! Use Code: Summer Sale</a></h3>
                          </div>
                        </div>
                        <div className="item">
                          <div className="col">
                            <h3><a href="#">Our biggest sale yet 50% off all summer shoes</a></h3>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </nav>

          <div className="breadcrumbs">
            <div className="container">
              <div className="row">
                <div className="col">
                  <p className="bread"><span><a href="index.html">Home</a></span> / <span>Product Details</span></p>
                </div>
              </div>
            </div>
          </div>

          <div className="colorlib-product">
            <div className="container">
              <div className="row row-pb-lg product-detail-wrap">
                <div>
                <img style={{ width: "700px", height: "600px" }} src={product.image} alt="" />
                </div>
                <div className="col-sm-4">
                  <div className="product-desc">
                    <h3>{product.title}</h3>
                    <p className="price">
                      <span>${product.price}</span> 
                      <span className="rate">
                        <i className="icon-star-full"></i>
                        <i className="icon-star-full"></i>
                        <i className="icon-star-full"></i>
                        <i className="icon-star-full"></i>
                        <i className="icon-star-half"></i>
                        (74 Rating)
                      </span>
                    </p>
                    <p>{product.description}</p>
                    <div className="size-wrap">
                      <div className="block-26 mb-2">
                        <h4>Size</h4>
                        <ul>
                          <li><a href="#">7</a></li>
                          <li><a href="#">7.5</a></li>
                          <li><a href="#">8</a></li>
                          <li><a href="#">8.5</a></li>
                          <li><a href="#">9</a></li>
                          <li><a href="#">9.5</a></li>
                          <li><a href="#">10</a></li>
                        </ul>
                      </div>
                    </div>
                    <div className="input-group mb-4">
                      <span className="input-group-btn">
                        <button type="button" className="quantity-left-minus btn" data-type="minus" data-field="">
                          <i className="icon-minus2"></i>
                        </button>
                      </span>
                      <input type="text" id="quantity" name="quantity" className="form-control input-number" value="1" min="1" max="100" />
                      <span className="input-group-btn ml-1">
                        <button type="button" className="quantity-right-plus btn" data-type="plus" data-field="">
                          <i className="icon-plus2"></i>
                        </button>
                      </span>
                    </div>
                    <div className="row">
                      <div className="col-sm-12 text-center">
                        <p className="addtocart">
                          <a href="cart.html" className="btn btn-primary btn-addtocart">
                            <i className="icon-shopping-cart"></i> Add to Cart
                          </a>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div style={{ display: "flex", justifyContent: "flex-end", paddingRight: "420px"}}>
  <PayPalButton price={product.price} productName={product.title} />
</div>

          </div>
        </div>
      </div>
    </>
  );
};

export default ProductDetail;
