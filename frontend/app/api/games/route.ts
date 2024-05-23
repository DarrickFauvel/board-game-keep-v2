export async function GET() {
  const response = await fetch("http://localhost:5000/api/games", {
    headers: {
      "Content-Type": "application/json",
    },
  })
  const data = await response.json()

  return Response.json({ data })
}

type Params = {
  slug: number
}

export async function DELETE(request: Request, context: { params: Params }) {
  const { slug } = context.params
  const response = await fetch(`http://localhost:5000/api/games/${slug}`, {
    method: "DELETE",
  })

  if (!response.ok) {
    throw new Error("Failed to delete game")
  }

  // const data = await response.json()
  console.log("Delete successful")
}
