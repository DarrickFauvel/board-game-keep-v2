import { create } from "domain"
import Image from "next/image"
import Link from "next/link"

export default function HeaderComponent() {
  return (
    <header>
      <div className="navbar bg-base-100">
        <span className="flex-1">
          <Link className="btn btn-ghost text-xl" href="/">
            Board Game Keep
          </Link>
        </span>

        <div className="flex-none gap-2">
          <div className="form-control">
            <input
              type="text"
              placeholder="Search"
              className="input input-bordered w-24 md:w-auto"
            />
          </div>
          <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                <Image
                  src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
                  alt="Tailwind CSS Navbar component"
                  width={500}
                  height={500}
                />
              </div>
            </div>
            <ul
              tabIndex={0}
              className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
              <li>
                <a className="justify-between">
                  Profile
                  <span className="badge">New</span>
                </a>
              </li>
              <li>
                <a>Settings</a>
              </li>
              <li>
                <a>Logout</a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <nav className="flex-none">
        <ul className="menu menu-horizontal">
          <li>
            <Link className="hover:underline" href="/list">
              List
            </Link>
          </li>
          <li>
            <Link className="hover:underline" href="/add">
              Add
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}
