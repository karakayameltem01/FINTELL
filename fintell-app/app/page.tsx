export default function Home() {
  return (
    <main
      style={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "#f4f7fb",
      }}
    >
      <div
        style={{
          background: "white",
          padding: "50px",
          borderRadius: "20px",
          boxShadow: "0 10px 30px rgba(0,0,0,0.15)",
          width: "400px",
          textAlign: "center",
        }}
      >
        <h1
          style={{
            color: "#1d4ed8",
            marginBottom: "10px",
          }}
        >
          FINTELL
        </h1>

        <p>Yapay Zeka Destekli Muhasebe Yazılımı</p>

        <button
          style={{
            marginTop: "25px",
            padding: "12px 30px",
            background: "#2563eb",
            color: "white",
            border: "none",
            borderRadius: "10px",
            cursor: "pointer",
            fontSize: "16px",
          }}
        >
          Giriş Yap
        </button>
      </div>
    </main>
  );
}