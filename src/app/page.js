import Image from "next/image";
import styles from "./page.module.css";
import CuetPrepration from "./components/CuetPrepration";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Home() {
  return (
    <main>
      <div>
        <CuetPrepration />
      </div>
    </main>
  );
}
