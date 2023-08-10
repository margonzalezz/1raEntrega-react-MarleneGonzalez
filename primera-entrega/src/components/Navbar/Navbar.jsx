import CartWidget from "../CartWidget/CartWidget";
const Navbar = () => {
    return <nav>
        {/* BRAND */}
        <h1>Coffee House</h1>

        {/* LINKS */}
        <ul>
            <li>
                <a href="#">Desayunos y meriendas</a>
            </li>
            <li>
                <a href="#">Nuestro café de especialidad</a>
            </li>
            <li>
                <a href="#">Promociones</a>
            </li>
        </ul>
        <CartWidget/>
    </nav>
};

export default Navbar;


