import { useLocation } from "react-router-dom";
import { Td, Th } from "../components/ui";

function CompletedForm() {
  const { state } = useLocation();
  return (
    <div className="min-h-screen flex flex-col justify-center sm:items-center overflox-x-autos">
      <h1 className="text-xl italic font-semibold leading-10 text-center">
        Mostrando los Datos del Formulario diligenciado
      </h1>
      {state ? (
        <table className="min-w-min table-auto border-collapse sm:border-separate">
          <tbody>
            <tr>
              <Th>Nombre: </Th>
              <Td>{state?.userData?.nombre}</Td>
            </tr>
            <tr>
              <Th>Segundo Nombre: </Th>
              <Td>{state?.userData?.segundoNombre}</Td>
            </tr>
            <tr>
              <Th>Apellido: </Th>
              <Td>{state?.userData?.apellido}</Td>
            </tr>
            <tr>
              <Th>Fecha de Nacimiento: </Th>
              <Td>{state?.userData?.fechaNacimiento}</Td>
            </tr>
            <tr>
              <Th>Género: </Th>
              <Td>{state?.userData?.genero}</Td>
            </tr>
            <tr>
              <Th>Dirección: </Th>
              <Td>{state?.userData?.direccion}</Td>
            </tr>
            <tr>
              <Th>Dirección de la calle Línea 2: </Th>
              <Td>{state?.userData?.direccionCalleLinea}</Td>
            </tr>
            <tr>
              <Th>Ciudad: </Th>
              <Td>{state?.userData?.ciudad}</Td>
            </tr>
            <tr>
              <Th>Estado/Provincia: </Th>
              <Td>{state?.userData?.estadoProvincia}</Td>
            </tr>
            <tr>
              <Th>Código Postal: </Th>
              <Td>{state?.userData?.codigoPostal}</Td>
            </tr>
            <tr>
              <Th>Email: </Th>
              <Td>{state?.userData?.email}</Td>
            </tr>
            <tr>
              <Th>Número de teléfono: </Th>
              <Td>{state?.userData?.numeroTelefono}</Td>
            </tr>
            <tr>
              <Th>Ha recibido otros cursos Anteriormente: </Th>
              <Td>{state?.userData?.cursosAnteriormente}</Td>
            </tr>
            <tr>
              <Th>Empresa: </Th>
              <Td>{state?.userData?.empresa}</Td>
            </tr>
            <tr>
              <Th>Cursos: </Th>
              <Td>{state?.userData?.cursos}</Td>
            </tr>
            <tr>
              <Th>Comentarios adicionales: </Th>
              <Td>{state?.userData?.comentariosAdicionales}</Td>
            </tr>
          </tbody>
        </table>
      ) : (
        <p>No ha recibido nada aún</p>
      )}
    </div>
  );
}

export default CompletedForm;
