import FormComponent from "./component/form"

async function getData(id: string) {
  const res = await fetch(`http://localhost:5000/api/games/${id}`)

  if (!res.ok) {
    throw new Error("Faled to fetch data")
  }

  return res.json()
}

export default async function Update({ params }: { params: { id: string } }) {
  const data = await getData(params.id)

  // const { id, name, bgg_url, image_url } = data[0]

  return (
    <section>
      <h1>Update a game</h1>
      <FormComponent {...data[0]} />
    </section>
  )
}
