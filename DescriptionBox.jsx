import React from 'react'
import './DescriptionBox.css'

const DescriptionBox = () => {
  return (
    <div className='descriptionbox'>
      <div className="descriptionbox-navigator">
        <div className="descriptionbox-nav-box">Description</div>
        <div className="descriptionbox-nav-box">Reviews(122)</div>
      </div>
      <div className="descriptionbox-description">
        <p>An E-commerce website is a digital platform for buying and selling goods and services online, connecting businesses with global consumers. It features product listings, descriptions, images, customer reviews, and secure payment gateways to enhance convenience and efficiency. With responsive designs, personalized recommendations, and marketing tools like discounts and loyalty programs, E-commerce offers flexible shopping anytime, empowering businesses to reach wider audiences.</p>
        <p>An E-commerce website showcases products in a visually organized way, featuring categories, thumbnails, prices, and ratings for easy browsing. Each product includes a detailed page with descriptions, images, and reviews. Search bars and filters help users find items quickly, while banners highlight discounts and trends. Responsive design ensures seamless viewing across all devices.</p>
      </div>
    </div>
  )
}

export default DescriptionBox
