import { NavLink } from "react-router-dom";
import { ShoppingBagIcon } from '@heroicons/react/24/solid';

import { useShoppingCart } from "../../hooks/useShoppingCart";

export function Navbar() {
  const { cartProducts, setSearchByCategory } = useShoppingCart();
  const activeStyle = 'underline underline-offset-4';

  return (
    <nav className="flex justify-between items-center fixed z-10 top-0 w-full py-5 px-8 text-sm font-light bg-white">
      <ul className="flex items-center gap-3">
        <li className="font-semibold text-lg">
          <NavLink to='/'>
            Shopi
          </NavLink>
        </li>
        <li>
          <NavLink
            to='/'
            className={({ isActive }) => isActive ? activeStyle : undefined}
            onClick={() => setSearchByCategory('')}
          >
            All
          </NavLink>
        </li>
        <li>
          <NavLink
            to='/clothes'
            className={({ isActive }) => isActive ? activeStyle : undefined}
            onClick={() => setSearchByCategory('clothes')}
          >
            Clothes
          </NavLink>
        </li>
        <li>
          <NavLink
            to='/electronics'
            className={({ isActive }) => isActive ? activeStyle : undefined}
            onClick={() => setSearchByCategory('electronics')}
          >
            Electronics
          </NavLink>
        </li>
        <li>
          <NavLink
            to='/furniture'
            className={({ isActive }) => isActive ? activeStyle : undefined}
            onClick={() => setSearchByCategory('furniture')}
          >
            Furniture
          </NavLink>
        </li>
        <li>
          <NavLink
            to='/Shoes'
            className={({ isActive }) => isActive ? activeStyle : undefined}
            onClick={() => setSearchByCategory('shoes')}
          >
            Shoes
          </NavLink>
        </li>
      </ul>
      <ul className="flex items-center gap-3">
        <li className="text-black/60">
          correo@gmail.com
        </li>
        <li>
          <NavLink
            to='/my-orders'
            className={({ isActive }) => isActive ? activeStyle : undefined}
          >
            My Orders
          </NavLink>
        </li>
        <li>
          <NavLink
            to='/my-account'
            className={({ isActive }) => isActive ? activeStyle : undefined}
          >
            My Account
          </NavLink>
        </li>
        <li>
          <NavLink
            to='/sign-in'
            className={({ isActive }) => isActive ? activeStyle : undefined}
          >
            Sign In
          </NavLink>
        </li>
        <li className="flex items-center gap-1">
          <ShoppingBagIcon className='h-6 w-6 text-black' /> <span>{cartProducts.length}</span>
        </li>
      </ul>
    </nav>
  )
}
