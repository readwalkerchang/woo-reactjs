import HEAD from 'next/head';
const Layout = (props) => {
    return(
        <div>
            <HEAD>
                <title>Woocommerce React theme</title>
                <link rel= "stylesheet" href= "https://maxcdn.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css"/>
            </HEAD>
            {props.children}
        </div>
    );
}

export default Layout;