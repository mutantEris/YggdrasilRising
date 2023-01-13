import "../styles/globals.css";
import "./Components/index.css";

export default function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}
