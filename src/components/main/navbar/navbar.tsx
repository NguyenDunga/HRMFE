import "./navbar.less";

function Navbar(props: NavbarProps) {

    const navClass = props.mode === 'top' ? 'page-navbar-top' : 'page-navbar-side';

    return <div
        className={`page-main-navbar ${navClass}`}
    >
    </div>
};

export default Navbar;

type NavbarProps = {
    mode: "top" | "side"
}