import HEAD from 'next/head';
const Layout = (props) => {
    return(
        <div>
            <HEAD>
                <title>Woocommerce React theme</title>
                <link rel= "stylesheet" href= "https://bootswatch.com/4/lux/bootstrap.min.css"/>
            </HEAD>
            {props.children}
        </div>
    );
}

export default Layout;