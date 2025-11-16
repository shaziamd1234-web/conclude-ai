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
        This is my first Next.js project — deployed live with GitHub and Vercel. I'm just getting started!
      </p>
      <a
        href="https://github.com/shaziamd1234-web/conclude-ai"
        target="_blank"
        rel="noopener noreferrer"
        style={{
          marginTop: "2rem",
          padding: "0.75rem 1.5rem",
          backgroundColor: "#ffffff22",
          borderRadius: "8px",
          color: "#fff",
          textDecoration: "none",
          fontWeight: "bold",
          transition: "background 0.3s",
        }}
        onMouseOver={(e) => {
          e.currentTarget.style.backgroundColor = "#ffffff44";
        }}
        onMouseOut={(e) => {
          e.currentTarget.style.backgroundColor = "#ffffff22";
        }}
      >
        View on GitHub
      </a>
    </main>
  );
}

