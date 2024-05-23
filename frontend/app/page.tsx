import Image from "next/image"

export default function Home() {
  return (
    <main>
      <div
        className="hero min-h-full py-16"
        style={{
          backgroundImage:
            "url(https://images.unsplash.com/photo-1549056572-75914d5d5fd4?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)",
        }}>
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md flex flex-col items-center">
            <svg
              className="text-6xl fill-accent"
              xmlns="http://www.w3.org/2000/svg"
              width="0.91em"
              height="1em"
              viewBox="0 0 256 283">
              <path
                fill=""
                d="M234.667 54.84L149.333 5.646a43.595 43.595 0 0 0-42.917 0L21.082 54.84C5.522 63.624 0 76.675 0 91.984v98.636c0 15.31 8.031 29.364 21.333 37.145l85.334 49.192a43.595 43.595 0 0 0 42.917 0l85.083-49.192C247.969 220.235 256 205.929 256 190.62V91.984c0-15.31-8.031-29.364-21.333-37.145m-57.224 158.368c0 2.51-1.757 4.267-4.016 4.267H82.824c-2.51 0-4.267-1.757-4.267-4.267v-18.573c0-2.259.753-4.266 2.51-6.023l10.792-10.541l6.525-60.738c.251-1.757-.502-3.262-1.757-4.266l-8.784-7.78c-1.757-1.507-2.51-3.765-2.51-6.024V69.647c0-2.51 1.757-4.518 4.267-4.518h13.302c2.259 0 4.518 2.008 4.518 4.267v6.777h11.043v-6.526a4.499 4.499 0 0 1 4.517-4.518h10.793c2.258 0 4.015 2.008 4.015 4.267v6.777h11.043v-6.275c0-2.51 2.51-4.769 5.02-4.769h13.051c2.259 0 4.769 2.008 4.769 4.267v30.62c0 2.008-1.004 3.764-2.26 5.27l-9.536 7.78c-1.255 1.005-1.757 2.51-1.757 4.016l6.776 60.989l10.792 11.043c1.255 1.255 1.757 2.76 1.757 4.517zm-49.192-63.75c-7.027-.25-12.549 6.024-12.549 12.8v26.103c0 1.506 1.255 2.76 2.76 2.76h18.824c1.506 0 3.012-1.505 3.012-3.011v-25.851c-.25-6.777-5.02-12.55-12.047-12.8"
              />
            </svg>
            <h1 className="mb-5 text-5xl font-bold">
              <span className="text-3xl">Welcome to</span> BoardGameKeep
            </h1>
            <p className="mb-5 text-balance">
              By thy wisdom, command your board game collection, diligently
              sorting and cataloging each, and bestowing order upon your domain.
            </p>
            <button className="btn btn-primary">Get Started</button>
          </div>
        </div>
      </div>
    </main>
  )
}
