import Link from "next/link";

export default function Navbar() {
  return (
    <nav style={{ padding: "1rem", background: "#2a5298", color: "#fff" }}>
      <Link href="/" style={{ marginRight: "1rem" }}>Home</Link>
      <Link href="/about" style={{ marginRight: "1rem" }}>About</Link>
      <Link href="/contact">Contact</Link>
    </nav>
  );
}
