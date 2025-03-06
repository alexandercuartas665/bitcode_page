import Link from "next/link";
import Image from "next/image";

export default function NotFound() {
  return (
    <>
      <div className="ptb-100">
        <div className="uk-container">
          <div style={{ textAlign: "center" }}>
            <Image
              src="/images/404-error.png"
              alt="error"
              width={460}
              height={450}
            />

            <h2>Página no encontrada</h2>

            <p>No podemos procesar tu solicitud</p>

            <Link href="/" className="uk-button uk-button-default">
              Volver al inicio
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
