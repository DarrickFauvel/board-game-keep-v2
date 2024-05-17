import Link from "next/link"

type Item = {
  id: number
  name: string
  bgg_url: string
  image_url: string
}

async function getData() {
  const res = await fetch("http://localhost:5000/api/games")

  if (!res.ok) {
    throw new Error("Failed to fetch data")
  }

  return res.json()
}

export default async function ListPage() {
  const data = await getData()

  const items = data.map((item: Item) => (
    <li key={item.id}>
      <Link href={`/boardgame/${item.id}`}>{item.name}</Link>
    </li>
  ))

  return (
    <section>
      <h1>Read games</h1>
      <ul>{items}</ul>
    </section>
  )
}
