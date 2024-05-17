"use client"
import { useEffect, useState } from "react"

type PropTypes = {
  id: number
  name: string
  bgg_url: string
  image_url: string
}

export default function FormComponent(props: PropTypes) {
  const [formData, setFormData] = useState({
    id: props.id,
    name: props.name,
    bgg_url: props.bgg_url,
    image_url: props.image_url,
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => {
      return {
        ...prev,
        [name]: value,
      }
    })
  }

  return (
    <form className="flex flex-col" method="post">
      <input type="hidden" name="id" value={formData.id} />
      <label htmlFor="name">name</label>
      <input
        type="text"
        id="name"
        name="name"
        value={formData.name}
        onChange={handleChange}
      />
      <label htmlFor="bgg_url">bgg_url</label>
      <input
        type="text"
        id="bgg_url"
        name="bgg_url"
        value={formData.bgg_url}
        onChange={handleChange}
      />
      <label htmlFor="image_url">image_url</label>
      <input
        type="text"
        id="image_url"
        name="image_url"
        value={formData.image_url}
        onChange={handleChange}
      />
      <button>Submit</button>
    </form>
  )
}
