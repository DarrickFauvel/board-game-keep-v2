import { create } from "domain"
import Link from "next/link"

export default function HeaderComponent() {
  return (
    <header>
      <div className="container w-11/12 m-auto flex justify-between">
        <span>
          <Link href="/">Board Game Keep</Link>
        </span>
        <nav>
          <ul className="flex gap-2">
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
      </div>
    </header>
  )
}
