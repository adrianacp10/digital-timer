import "@/styles/globals.css";
import '../styles/style.css';  // Asegúrate de que la ruta sea correcta

export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />;
}
