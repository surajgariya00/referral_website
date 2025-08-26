import { Link } from 'react-router-dom'
export default function NotFound() {
  return (
    <main className="container-max py-24 text-center">
      <h1 className="text-5xl font-extrabold">404</h1>
      <p className="text-text/70 mt-2">We couldn’t find that page.</p>
      <Link to="/" className="btn mt-6">Back to dashboard</Link>
    </main>
  )
}
