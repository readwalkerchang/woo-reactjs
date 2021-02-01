import Layout from "../components/Layout";
import fetch from 'isomorphic-unfetch';
import Product from "../components/Product";
const clientConfig = {
	siteUrl: 'http://localhost:3000/'
};
const Index = ( props ) => {

	const { products } = props;

	return (
		<Layout>
			<div className="product-container">
				{ products.length ? (
					products.map( product => <Product key={ product.id } product={ product } /> )
				) : ''}
			</div>
		</Layout>
	)
};

Index.getInitialProps = async () => {
	const res = await fetch( `http://localhost:3000/products` );
	const productsData = await res.json();

return {
	products: productsData
}
};

export default Index;

