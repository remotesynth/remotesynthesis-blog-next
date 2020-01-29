import Link from 'next/link';

const  Header = props => {
    return (
    <nav class="navbar">
        <div class="container">
            <div class="navbar-header header-logo">
                <Link href="/"><a>{props.title}</a></Link>
            </div>
            <div class="menu navbar-right">
                <Link href="#"><a class="menu-item" title="Foo">Publications</a></Link>
                <Link href="#"><a class="menu-item" title="Foo">Presentations</a></Link>
                <Link href="#"><a class="menu-item" title="Foo">Categories</a></Link>
            </div>
        </div>
    </nav>
    );
};

export default Header;