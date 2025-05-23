import Link from "next/link"

const NotFound = () => {
  return (
    <div className="text-center">
      <h1>Not Found</h1>
      <p className="my-5">
        Sorry, we could not find the page you&apos;re looking for.
      </p>
      <Link className="text-sm underline" href="/">
        Return Home
      </Link>
    </div>
  )
}

export default NotFound
