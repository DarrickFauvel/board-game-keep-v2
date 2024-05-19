import Image from "next/image"
import Link from "next/link"

type PropsType = {
  id: number
}

async function getData(id: string) {
  const res = await fetch(`http://localhost:5000/api/games/${id}`)

  if (!res.ok) {
    throw new Error("Failed to fetch data")
  }

  return res.json()
}

export default async function GamePage({ params }: { params: { id: string } }) {
  const data = await getData(params.id)

  const { id, name, bgg_url, image_url } = data[0]

  return (
    <section className="prose">
      <h1>Game page</h1>
      <h2>{name}</h2>
      <Image src={image_url} alt={name} width={100} height={100} />

      <a className="btn btn-link" href={bgg_url} target="_blank">
        Board Game Geek page
      </a>

      <Link className="btn btn-accent" href={`/update/${id}`}>
        Update
      </Link>
    </section>
  )
}
