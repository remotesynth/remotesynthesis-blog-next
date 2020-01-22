import Header from './Header.js';
import Footer from './Footer.js';

const Layout = props => {
    //console.log(props.config);
    return (
    <div>
        <Header title={props.config.title} />
        {props.children}
        <Footer />
    </div>
    );
};

export default Layout;