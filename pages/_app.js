import "@/styles/globals.css";
import Toaster from "@/components/Toaster";

export default function App({ Component, pageProps }) {
  return (
    <div>
      <Component {...pageProps} />;
      <Toaster />
    </div>
  );
}
