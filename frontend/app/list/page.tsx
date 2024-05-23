import Link from "next/link"

type Item = {
  id: number
  name: string
  bgg_url: string
  image_url: string
}

async function getData() {
  const res = await fetch("http://localhost:5000/api/games", {
    next: { revalidate: 0 },
  })

  if (!res.ok) {
    throw new Error("Failed to fetch data")
  }

  return await res.json()
}

export default async function ListPage() {
  const data = await getData()

  const items = data.map((item: Item) => (
    <li key={item.id}>
      <Link className="" href={`/boardgame/${item.id}`}>
        {item.name} id:{item.id}
      </Link>
    </li>
  ))

  return (
    <section className="prose prose-ul:list-none prose-ul:p-0">
      <h1>Board games</h1>
      <ul>{items}</ul>
    </section>
  )
}
