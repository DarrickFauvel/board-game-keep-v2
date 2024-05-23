"use client"

import React, { SyntheticEvent, useState } from "react"
import TextInputComponent from "./textInput"
import LabelComponent from "./label"

const gameModel = {
  name: "",
  bgg_url: "",
  image_url: "",
  location: "",
  is_favorite: false,
}

export default function FormComponent() {
  const [formData, setFormData] = useState(gameModel)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value =
      e.target.type === "checkbox" ? e.target.checked : e.target.value
    setFormData({
      ...formData,
      [e.target.name]: value,
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    try {
      const response = await fetch("http://localhost:5000/api/games", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })
      console.log(await response.json())
    } catch (err) {
      if (err) console.error("There was an error")
    }
  }

  return (
    <form className="flex flex-col gap-4" method="post" onSubmit={handleSubmit}>
      <label
        className="input input-bordered flex items-center gap-2"
        htmlFor="name">
        name
        <input
          className="grow"
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
        />
      </label>

      <label
        className="input input-bordered flex items-center gap-2"
        htmlFor="bgg_url">
        bgg_url
        <input
          className="grow"
          type="text"
          id="bgg_url"
          name="bgg_url"
          value={formData.bgg_url}
          onChange={handleChange}
        />
      </label>

      <label
        className="input input-bordered flex items-center gap-2"
        htmlFor="image_url">
        image_url
        <input
          className="grow"
          type="text"
          id="image_url"
          name="image_url"
          value={formData.image_url}
          onChange={handleChange}
        />
      </label>

      <label
        className="input input-bordered flex items-center gap-2"
        htmlFor="location">
        location
        <input
          className="grow"
          type="text"
          id="location"
          name="location"
          value={formData.location}
          onChange={handleChange}
        />
      </label>

      <label className="label cursor-pointer self-start gap-2">
        <input
          type="checkbox"
          className="checkbox checkbox-primary"
          name="is_favorite"
          checked={formData.is_favorite}
          onChange={handleChange}
        />
        <span className="label-text">Favorite game</span>
      </label>

      <button className="btn btn-primary">Submit</button>
    </form>
  )
}
