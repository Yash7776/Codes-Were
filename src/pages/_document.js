import { Html, Head, Main, NextScript } from "next/document";
import NavBar from "../../components/NavBar";

export default function Document() {
  return (
    <Html lang="en">
      <link href="https://cdn.jsdelivr.net/npm/flowbite@3.1.2/dist/flowbite.min.css" rel="stylesheet" />
      <Head/>
      
      <body className="antialiased">
        <Main />
        <NextScript />
        <script src="https://cdn.jsdelivr.net/npm/flowbite@3.1.2/dist/flowbite.min.js"></script>
      </body>
    </Html>
  );
}
