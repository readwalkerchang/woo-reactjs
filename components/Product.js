import Media from 'react-bootstrap/Media'
import "../style.css"
const Product = ( props ) => {
	
	const { product } = props;
	return (
		<div  className= "productContainer">
			<Media>
			<img  className= "productImg"
				width={160}
				height={160}
				className=""
			     src={ product.images[0].src }
			     alt="Product image"/>
			  <Media.Body  className= "productDespription">
			  <h3 className="">{product.name}</h3>
			  <h6 className="">${ product.price }</h6>
			  <a href="" className="btn btn-secondary">View</a>
				<p>
				Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque
				ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at,
				tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla.
				Donec lacinia congue felis in faucibus.
				</p>
			</Media.Body>
			</Media>
		</div>
	);
}

export default Product;