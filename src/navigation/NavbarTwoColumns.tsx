import { ReactNode } from 'react';

import Link from 'next/link';

type INavbarProps = {
  logo: ReactNode;
  children: ReactNode;
};

const NavbarTwoColumns = (props: INavbarProps) => (
  <>
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <a href="/" className="btn btn-ghost text-xl">
          {props.logo}
        </a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <Link href="/#Why">Why</Link>
          </li>
          <li>
            <Link href="/#How">How</Link>
          </li>
          <li>
            <Link href="/snapshots">Snapshots</Link>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        <a href="/#Join" className="btn">
          Get the app
        </a>
      </div>
    </div>
  </>
);

export { NavbarTwoColumns };
