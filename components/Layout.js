import HEAD from 'next/head';
import Header from './Header';
const Layout = (props) => {
    return(
        <div>
            <HEAD>
                <title>Woocommerce React theme</title>
                <link rel= "stylesheet" href= "https://maxcdn.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css"/>
                <Header/>
            </HEAD>
            {props.children}
        </div>
    );
}

export default Layout;