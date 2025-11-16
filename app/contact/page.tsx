export default function Contact() {
  return (
    <main style={{ padding: "2rem" }}>
      <h1>Contact Me</h1>
      <form>
        <input
          type="text"
          placeholder="Your name"
          style={{ display: "block", margin: "1rem 0", padding: "0.5rem" }}
        />
        <input
          type="email"
          placeholder="Your email"
          style={{ display: "block", margin: "1rem 0", padding: "0.5rem" }}
        />
        <textarea
          placeholder="Message"
          style={{ display: "block", margin: "1rem 0", padding: "0.5rem" }}
        />
        <button type="submit" style={{ padding: "0.5rem 1rem" }}>
          Send
        </button>
      </form>
    </main>
  );
}
