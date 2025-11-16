export default function Home() {
  return (
    <main
      style={{
        minHeight: "100vh",
        background: "linear-gradient(to right, #1e3c72, #2a5298)",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        color: "#fff",
        fontFamily: "Segoe UI, sans-serif",
        padding: "2rem",
        textAlign: "center",
      }}
    >
      <h1 style={{ fontSize: "3rem", marginBottom: "1rem" }}>
        🚀 Welcome to Conclude AI
      </h1>
      <p style={{ fontSize: "1.5rem", maxWidth: "600px" }}>
        This is my first Next.js project — deployed live with GitHub and Vercel.
      </p>
    </main>
  );
}



