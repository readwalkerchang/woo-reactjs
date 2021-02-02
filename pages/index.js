import Layout from "../components/Layout";
import fetch from 'isomorphic-unfetch';
import Product from "../components/Product";
import "../style.css"
const clientConfig = {
	siteUrl: 'http://localhost:3000/'
};
const Index = ( props ) => {

	const { products } = props;

	return (
		<Layout>
			<div className="contentSection">
				<h1>This is an example title</h1>
				<img src="https://images.unsplash.com/photo-1434648957308-5e6a859697e8?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=667&q=80"/>
				<p>This is an example page. It's different from a blog post because it will stay in one place and will show up in your site navigation (in most themes). Most people start with an About page that introduces them to potential site visitors. It might say something like this:
					Hi there! I'm a bike messenger by day, aspiring actor by night, and this is my website. I live in Los Angeles, have a great dog named Jack, and I like piña coladas. (And gettin' caught in the rain.)
					The XYZ Doohickey Company was founded in 1971, and has been providing quality doohickeys to the public ever since. Located in Gotham City, XYZ employs over 2,000 people and does all kinds of awesome things for the Gotham community.
				</p>
			</div>
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

