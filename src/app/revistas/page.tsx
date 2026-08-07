import Image from "next/image";
import Link from "next/link";
import styles from "./page.module.css";

const revistas = [
  {
    id: "edicion-1",
    nombre: "Edición 1",
    imagen: "/revistas/edicion1.jpg",
  },
  {
    id: "edicion-2",
    nombre: "Edición 2",
    imagen: "/revistas/edicion2.jpg",
  },
];


export default function Revistas() {
  return (
    <main className={styles.revistaPage}>
      <div className={styles.grid}>
        {revistas.map((revista) => (
          <Link
            key={revista.id}
            href={`/revistas/${revista.id}`}
            className={styles.revista}
          >
            <div className={styles.portada}>
              <Image
                src={revista.imagen}
                alt={revista.nombre}
                fill
                sizes="(max-width: 768px) 70vw, (max-width: 1024px) 40vw, 25vw"
                className={styles.imagen}
              />
            </div>

            <p className={styles.nombre}>{revista.nombre}</p>
          </Link>
        ))}
      </div>
    </main>
  );
}