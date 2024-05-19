export default function AddPage() {
  return (
    <section className="prose">
      <h1>Add a game</h1>
      <form className="flex flex-col gap-4" method="post">
        <label
          className="input input-bordered flex items-center gap-2"
          htmlFor="name">
          name
          <input className="grow" type="text" id="name" name="name" />
        </label>
        <label
          className="input input-bordered flex items-center gap-2"
          htmlFor="bgg_url">
          bgg_url
          <input className="grow" type="text" id="bgg_url" name="bgg_url" />
        </label>
        <label
          className="input input-bordered flex items-center gap-2"
          htmlFor="image_url">
          image_url
          <input className="grow" type="text" id="image_url" name="image_url" />
        </label>
        <button className="btn btn-primary">Submit</button>
      </form>
    </section>
  )
}
