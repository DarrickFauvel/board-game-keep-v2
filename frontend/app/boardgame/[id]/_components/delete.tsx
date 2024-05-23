"use client"

import { SyntheticEvent } from "react"

type PropsTypes = {
  id: number
  name: string
}

export default function DeleteComponent(props: PropsTypes) {
  const deleteGame = async (id: number) => {
    try {
      const response = await fetch(`http://localhost:5000/api/games/${id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      })

      if (!response.ok) {
        throw new Error("Network response was not okay")
      }

      // const data = await response.json()
      console.log(`Delete successful of ID: ${id}`)
    } catch (error) {
      console.error("There was a problem with the fetch operation", error)
    }
  }

  const handleClick = (e: SyntheticEvent) => {
    e.preventDefault()
    const deleteConfirmed = confirm(
      `Are you sure you want to remove ${props.name}?`
    )

    if (deleteConfirmed) {
      deleteGame(props.id)
    }
  }

  return (
    <a className="btn btn-error" href="#" onClick={handleClick}>
      Remove
    </a>
  )
}
