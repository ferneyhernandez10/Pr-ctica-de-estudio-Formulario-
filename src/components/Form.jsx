import { useForm, Controller } from "react-hook-form";
import {
  Input,
  Select,
  TexTarea,
  Button,
  InputRadio,
  Label1,
  Label2,
} from "./ui";
import { useRef } from "react";

const Form = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const ref = useRef(null);

  const onSubmit = handleSubmit((data) => {
    console.log(data);
    ref.current.focus();
  });
  return (
    <>
      <form
        onSubmit={onSubmit}
        className="rounded-lg border-2 border-inherit px-7 py-5 sm:px-14 sm:py-10"
      >
        <div className="pb-5 border-b-2 border-slate-200">
          <p className="text-xl font-bold text-center sm:text-4xl">
            Formulario de Inscripción Curso
          </p>
          <p className="text-base italic font-medium text-center sm:text-lg">
            Rellene cuidadosamente el formulario de inscripción
          </p>
        </div>

        <div className="my-5 sm:my-10">
          <Label1>Nombre del alumno</Label1>
          <div className="flex flex-col gap-y-4 sm:flex-row sm:gap-x-8">
            <div className="flex flex-col">
              <Controller
                name="nombre"
                rules={{
                  required: "es requerido",
                  minLength: {
                    value: 2,
                    message: "debe tener al menos 2 caracteres",
                  },
                  maxLength: {
                    value: 20,
                    message: "debe tener máximo 20 caracteres",
                  },
                }}
                control={control}
                render={({ field }) => (
                  <Input {...field} type="text" ref={ref} />
                )}
              />
              <Label2>
                Nombre{" "}
                {errors?.nombre?.message && (
                  <span className="text-red-600">
                    {errors?.nombre?.message}
                  </span>
                )}
              </Label2>
            </div>
            <div className="flex flex-col">
              <Controller
                name="segundoNombre"
                rules={{
                  minLength: {
                    value: 2,
                    message: "debe tener al menos 2 caracteres",
                  },
                  maxLength: {
                    value: 20,
                    message: "debe tener máximo 20 caracteres",
                  },
                }}
                control={control}
                render={({ field }) => (
                  <Input {...field} type="text" ref={ref} />
                )}
              />
              <Label2>
                Segundo Nombre{" "}
                {errors?.segundoNombre?.message && (
                  <span className="text-red-600">
                    {errors?.segundoNombre?.message}
                  </span>
                )}
              </Label2>
            </div>
            <div className="flex flex-col">
              <Controller
                name="apellido"
                rules={{
                  required: "es requerido",
                  minLength: {
                    value: 2,
                    message: "debe tener al menos 2 caracteres",
                  },
                  maxLength: {
                    value: 20,
                    message: "debe tener máximo 20 caracteres",
                  },
                }}
                control={control}
                render={({ field }) => (
                  <Input {...field} type="text" ref={ref} />
                )}
              />
              <Label2>
                Apellido{" "}
                {errors?.apellido?.message && (
                  <span className="text-red-600">
                    {errors?.apellido?.message}
                  </span>
                )}
              </Label2>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-y-4 mb-5 sm:flex-row sm:gap-x-8 sm:mb-10">
          <div className="flex flex-col sm:w-1/2">
            <Label1>Fecha de nacimiento</Label1>
            <Controller
              name="fechaNacimiento"
              rules={{
                required: "de nacimiento es requerida",
              }}
              control={control}
              render={({ field }) => <Input {...field} type="date" ref={ref} />}
            />
            <Label2>
              Fecha{" "}
              {errors?.fechaNacimiento?.message && (
                <span className="text-red-600">
                  {errors?.fechaNacimiento?.message}
                </span>
              )}
            </Label2>
          </div>
          <div className="flex flex-col sm:w-1/2">
            <Label1>Género</Label1>
            <Controller
              name="genero"
              rules={{
                required: "Este campo es obligatorio",
              }}
              control={control}
              render={({ field }) => (
                <Select {...field} ref={ref}>
                  <option value="">Please Select</option>
                  <option value="M">Masculino</option>
                  <option value="F">Femenino</option>
                  <option value="NA">N/A</option>
                </Select>
              )}
            />
            <Label2>
              {errors?.genero?.message && (
                <span className="text-red-600">{errors?.genero?.message}</span>
              )}
            </Label2>
          </div>
        </div>

        <div className="flex flex-col mb-5 sm:mb-10">
          <Label1>Dirección</Label1>
          <Controller
            name="direccion"
            rules={{
              required: "es requerida",
            }}
            control={control}
            render={({ field }) => <Input {...field} type="text" ref={ref} />}
          />
          <Label2>
            Dirección de la calle{" "}
            {errors?.direccion?.message && (
              <span className="text-red-600">{errors?.direccion?.message}</span>
            )}
          </Label2>
          <Controller
            name="direccionCalleLinea"
            control={control}
            render={({ field }) => <Input {...field} type="text" ref={ref} />}
          />
          <Label2>Dirección de la calle Línea 2</Label2>
          <div className="flex flex-col sm:flex-row sm:gap-x-8">
            <div className="flex flex-col sm:w-1/2">
              <Controller
                name="ciudad"
                rules={{
                  required: "es requerida",
                }}
                control={control}
                render={({ field }) => (
                  <Input {...field} type="text" ref={ref} />
                )}
              />
              <Label2>
                Ciudad{" "}
                {errors?.ciudad?.message && (
                  <span className="text-red-600">
                    {errors?.ciudad?.message}
                  </span>
                )}
              </Label2>
            </div>
            <div className="flex flex-col sm:w-1/2">
              <Controller
                name="estadoProvincia"
                rules={{
                  required: "es requerida",
                }}
                control={control}
                render={({ field }) => (
                  <Input {...field} type="text" ref={ref} />
                )}
              />
              <Label2>
                Estado/Provincia{" "}
                {errors?.estadoProvincia?.message && (
                  <span className="text-red-600">
                    {errors?.estadoProvincia?.message}
                  </span>
                )}
              </Label2>
            </div>
          </div>
          <Controller
            name="codigoPostal"
            rules={{
              required: "es requerida",
            }}
            control={control}
            render={({ field }) => (
              <Input {...field} type="numbers" ref={ref} />
            )}
          />
          <Label2>
            Código Postal{" "}
            {errors?.codigoPostal?.message && (
              <span className="text-red-600">
                {errors?.codigoPostal?.message}
              </span>
            )}
          </Label2>
        </div>

        <div className="flex flex-col gap-y-4 mb-5 sm:flex-row sm:gap-x-8 sm:mb-10">
          <div className="flex flex-col sm:w-1/2">
            <Label1>Email</Label1>
            <Controller
              name="email"
              rules={{
                required: "El correo es obligatorio",
                pattern: {
                  value: /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/,
                  message: "El correo no es válido",
                },
              }}
              control={control}
              render={({ field }) => <Input {...field} ref={ref} />}
            />
            <Label2>
              {errors?.email?.message && (
                <p className="text-red-600">{errors?.email?.message}</p>
              )}{" "}
              ejemplo@ejemplo.com
            </Label2>
          </div>
          <div className="flex flex-col sm:w-2/5">
            <Label1>Número de teléfono</Label1>
            <Controller
              name="numeroTelefono"
              rules={{
                required: "Número de teléfono es requerdio",
                pattern: {
                  value: /^[0-9]+$/i,
                  message: "Número de teléfono no es válido",
                },
              }}
              control={control}
              render={({ field }) => <Input {...field} type="tel" ref={ref} />}
            />
            <Label2>
              {errors?.numeroTelefono?.message && (
                <p className="text-red-600">
                  {errors?.numeroTelefono?.message}
                </p>
              )}{" "}
              Favor ingrese un número de teléfono válido.
            </Label2>
          </div>
        </div>

        <div className=" mb-5 ms:mb-10">
          <Label1>Ha recibido otros cursos Anteriormente</Label1>
          <div className="flex gap-x-40">
            <div className="flex gap-x-1">
              <Controller
                name="cursosAnteriormente"
                rules={{
                  required: "Este campo es obligatorio",
                }}
                control={control}
                render={({ field }) => (
                  <InputRadio {...field} type="checkbox" ref={ref} />
                )}
              />
              <Label2>Si</Label2>
            </div>
            <div className="flex gap-x-1">
              <Controller
                name="cursosAnteriormente"
                rules={{
                  required: "Este campo es obligatorio",
                }}
                control={control}
                render={({ field }) => (
                  <InputRadio {...field} type="checkbox" ref={ref} />
                )}
              />
              <Label2>No</Label2>
            </div>
          </div>
          <Label2>
            {errors?.cursosAnteriormente?.message && (
              <p className="text-red-600">
                {errors?.cursosAnteriormente?.message}
              </p>
            )}
          </Label2>
        </div>

        <div className="flex flex-col gap-y-4 mb-5 sm:flex-row sm:gap-x-8 sm:mb-10">
          <div className="flex flex-col sm:w-1/2">
            <Label1>Empresa</Label1>
            <Controller
              name="empresa"
              control={control}
              render={({ field }) => <Input {...field} type="text" ref={ref} />}
            />
          </div>
          <div className="flex flex-col sm:w-1/2">
            <Label1>Cursos</Label1>
            <Controller
              name="cursos"
              control={control}
              render={({ field }) => (
                <Select {...field} ref={ref}>
                  <option value="">Please Select</option>
                  <option value="W">Windonws 8</option>
                  <option value="IL">Introducción a Linux</option>
                  <option value="I101">Inglés 101</option>
                  <option value="I102">Inglés 102</option>
                  <option value="E1">Escritura creativa 1</option>
                  <option value="E2">Escritura creativa 2</option>
                  <option value="H101">Historia 101</option>
                  <option value="H102">Historia 102</option>
                  <option value="M101">Matemáticas 101</option>
                  <option value="M102">Matemáticas 102</option>
                </Select>
              )}
            />
          </div>
        </div>

        <div className="flex flex-col">
          <Label1>Comentarios adicionales</Label1>
          <Controller
            name="comentariosAdicionales"
            control={control}
            render={({ field }) => (
              <TexTarea {...field} type="text" ref={ref} />
            )}
          />
        </div>
        <div className="flex justify-center pt-6 border-t-2 border-slate-200 mt-5">
          <Button type="submit" ref={ref}>
            Enviar
          </Button>
        </div>
      </form>
    </>
  );
};

export default Form;
