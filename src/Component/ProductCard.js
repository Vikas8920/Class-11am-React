import React from 'react'

const ProductCard = ({product, addToCart}) => {
    return (
        <>
            <div className='col-md-3 mb-3'>
            <div class="card" style={{width: '18rem'}}>
                <img src={product.thumbnail} class="card-img-top" alt="products" width={'354px'} height={'200px'}/>
                <div class="card-body">
                    <h5 class="card-title">{(product.title.length>20)?product.title.slice(0,20)+'...': product.title}</h5>
                    <p class="card-text">{(product.description.length>45)? product.description.slice(0,45)+'...': product.description}</p>
                    <h5 class="card-title">$ {product.price}</h5>
                    <h5 class="card-title">Rating: {product.rating}</h5>
                    <h5 class="card-title">Category: {product.category}</h5>
                    <button className='btn btn-primary' onClick={()=> addToCart(product)}>Add to Cart</button>
                </div>
            </div>
            </div>
        </>
    )
}

export default ProductCard
