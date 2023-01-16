import Link from 'next/link';


export default function Navbar() {

  return (
    <nav className="navbar">
      <ul>
        <li>
          <Link href="/">
            <button className="btn-logo">Home</button>
          </Link>
        </li>

        <li>
          <Link href="/projects">
            <button className="btn-logo">Projects</button>
          </Link>
        </li>

        <li>
          <Link href="/about">
            <button className="btn-logo">About</button>
          </Link>
        </li>
      </ul>
    </nav>
  );
}