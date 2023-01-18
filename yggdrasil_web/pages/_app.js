import "../styles/globals.css";
import "./Components/index.css";
// import "tailwindcss/base";


export default function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}
