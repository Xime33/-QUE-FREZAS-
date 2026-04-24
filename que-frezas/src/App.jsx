function App() {
  return (
    <main style={styles.page}>
      <header style={styles.header}>
  <svg
    viewBox="0 0 1440 220"
    preserveAspectRatio="none"
    style={styles.headerArch}
  >
    <path
      d="
        M0,0
        H1440
        V220
        Q720,20 0,220
        Z
      "
      fill="#FFEFE7"
    />
  </svg>

  <div style={styles.headerContent}>
    <img src="/logo.jpg" alt="¡Qué Frezaz!" style={styles.logoMini} />

    <nav style={styles.nav}>
      <a href="#inicio" style={styles.link}>Inicio</a>
      <a href="#menu" style={styles.link}>Menú</a>
      <a href="#ubicacion" style={styles.link}>Ubicación</a>
    </nav>
  </div>
</header>

      <section id="inicio" style={styles.hero}>
        <div style={styles.arch}>
          <img src="/logo.jpg" alt="Logo Qué Frezaz" style={styles.logoHero} />
        </div>

        <div style={styles.heroText}>
          <p style={styles.label}>ANTOJO FRESOSO Y CREMOSO</p>
          <h1 style={styles.title}>¡QUE FREZAZ!</h1>
          <p style={styles.description}>
            Fresas con crema, toppings, choco-berry, cheesecake deli y sodas italianas
            preparadas con frescura y mucho estilo.
          </p>

          <a href="#menu" style={styles.button}>Ver menú</a>
        </div>
      </section>

      <section id="menu" style={styles.section}>
        <h2 style={styles.sectionTitle}>Nuestro menú</h2>
        <p style={styles.sectionText}>
          Antojos fresosos, cremosos y preparados al momento.
        </p>

        <div style={styles.menuCard}>
          <img src="/menu.jpg" alt="Menú Qué Frezaz" style={styles.menuImage} />
        </div>
      </section>

      <section id="ubicacion" style={styles.storeSection}>
        <div style={styles.storeText}>
          <h2 style={styles.sectionTitle}>Visítanos</h2>
          <p style={styles.sectionText}>
            Un espacio rosa, dulce y fresco para disfrutar tu antojo favorito.
          </p>

          <a
            href="https://www.instagram.com/que.frezaz/"
            target="_blank"
            rel="noreferrer"
            style={styles.button}
          >
            Ir a Instagram
          </a>
        </div>

        <div style={styles.storeImageBox}>
          <img src="/tienda.jpg" alt="Entrada tienda Qué Frezaz" style={styles.storeImage} />
        </div>
      </section>
    </main>
  );
}

const styles = {
  page: {
    minHeight: "100vh",
    background: "#F9C9C9",
    color: "#E94B5D",
    fontFamily: "Arial, Helvetica, sans-serif",
  },

 header: {
  position: "sticky",
  top: 0,
  zIndex: 10,
  height: "170px",
  overflow: "hidden",
},

headerArch: {
  position: "absolute",
  inset: 0,
  width: "100%",
  height: "100%",
  zIndex: 0,
},


headerArch: {
  position: "absolute",
  inset: 0,
  width: "100%",
  height: "100%",
  zIndex: 0,
},

wave: {
  position: "absolute",
  bottom: 0,
  left: 0,
  width: "100%",
  height: "80px",
  zIndex: 1,
},

logoMini: {
  width: "95px",
},

nav: {
  display: "flex",
  gap: "28px",
},

link: {
  textDecoration: "none",
  color: "#E94B5D",
  fontWeight: "900",
  textTransform: "uppercase",
  fontSize: "14px",
  letterSpacing: "1px",
},

headerBlob: {
  position: "absolute",
  inset: 0,
  width: "100%",
  height: "100%",
  zIndex: 0,
},

logoMini: {
  width: "95px",
  height: "auto",
},

  hero: {
    minHeight: "90vh",
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    alignItems: "center",
    gap: "40px",
    padding: "40px 7% 90px",
  },

  arch: {
    width: "100%",
    maxWidth: "520px",
    height: "640px",
    margin: "0 auto",
    background: "#FFEFE7",
    borderRadius: "260px 260px 24px 24px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    boxShadow: "0 25px 60px rgba(196, 55, 70, 0.18)",
    border: "3px solid #E94B5D",
  },

  logoHero: {
    width: "78%",
    height: "auto",
  },

  heroText: {
    maxWidth: "560px",
  },

  label: {
    fontWeight: "900",
    letterSpacing: "2px",
    fontSize: "15px",
    marginBottom: "14px",
  },

  title: {
    fontSize: "clamp(54px, 8vw, 110px)",
    lineHeight: "0.9",
    fontWeight: "900",
    marginBottom: "24px",
  },

  description: {
    fontSize: "22px",
    lineHeight: "1.4",
    color: "#B93A48",
    marginBottom: "34px",
    fontWeight: "600",
  },

  button: {
    display: "inline-block",
    background: "#E94B5D",
    color: "#FFEFE7",
    textDecoration: "none",
    padding: "15px 30px",
    borderRadius: "999px",
    fontWeight: "900",
    textTransform: "uppercase",
    letterSpacing: "1px",
    boxShadow: "0 12px 25px rgba(233, 75, 93, 0.25)",
  },

  section: {
    padding: "90px 7%",
    background: "#FFEFE7",
    textAlign: "center",
  },

  sectionTitle: {
    fontSize: "clamp(42px, 6vw, 80px)",
    lineHeight: "1",
    fontWeight: "900",
    marginBottom: "16px",
    textTransform: "uppercase",
  },

  sectionText: {
    fontSize: "20px",
    color: "#B93A48",
    marginBottom: "38px",
    fontWeight: "600",
  },

  menuCard: {
    maxWidth: "620px",
    margin: "0 auto",
    background: "#F9C9C9",
    padding: "18px",
    borderRadius: "30px",
    boxShadow: "0 25px 60px rgba(196, 55, 70, 0.2)",
  },

  menuImage: {
    width: "100%",
    display: "block",
    borderRadius: "22px",
  },

  storeSection: {
    display: "grid",
    gridTemplateColumns: "0.8fr 1.2fr",
    gap: "50px",
    alignItems: "center",
    padding: "100px 7%",
  },

  storeText: {
    maxWidth: "460px",
  },

  storeImageBox: {
    borderRadius: "260px 260px 30px 30px",
    overflow: "hidden",
    border: "3px solid #E94B5D",
    boxShadow: "0 25px 60px rgba(196, 55, 70, 0.25)",
  },

  storeImage: {
    width: "100%",
    height: "650px",
    objectFit: "cover",
    display: "block",
  },
};

export default App;