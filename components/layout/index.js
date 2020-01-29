import Head from 'next/head';
import Header from './Header.js';
import Footer from './Footer.js';
import "../../css/main.scss";

const Layout = props => {
    return (
    <div className="wrapper">
        <Head>
            <title>{props.config.title}</title>
            <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            <link rel="stylesheet" href="/assets/font/iconfont.css" />
        </Head>
        <Header title={props.config.title} />
        {props.children}
        <Footer />
    </div>
    );
};

export default Layout;