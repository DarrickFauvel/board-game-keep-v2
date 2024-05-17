export default function AddPage() {
  return (
    <section>
      <h1>Add a game</h1>
      <form className="flex flex-col" method="post">
        <label htmlFor="name">name</label>
        <input type="text" id="name" name="name" />
        <label htmlFor="bgg_url">bgg_url</label>
        <input type="text" id="bgg_url" name="bgg_url" />
        <label htmlFor="image_url">image_url</label>
        <input type="text" id="image_url" name="image_url" />
        <button>Submit</button>
      </form>
    </section>
  )
}
