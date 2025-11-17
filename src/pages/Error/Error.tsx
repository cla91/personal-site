import WrapperLayout from "@/components/layout/WrapperLayout/WrapperLayout";
import { isRouteErrorResponse, useRouteError } from "react-router-dom";

export default function Error() {
  const error = useRouteError();
  if (isRouteErrorResponse(error)) {
    return (
      <WrapperLayout>
        <main>
          <h1>
            Errore {error.status}: {error.statusText}
          </h1>
          <p>{error.data}</p>
        </main>
      </WrapperLayout>
    );
  } else {
    return (
      <WrapperLayout>
        <h1>Errore Sconosciuto</h1>
        <p>
          E' avvenuto un errore inaspettato, controlla la tua connessione o
          prova di nuovo.
        </p>
      </WrapperLayout>
    );
  }
}
