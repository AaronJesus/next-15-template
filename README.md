Este es un proyecto de [Next.js](https://nextjs.org) creado con [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).<br />
Incluye typescript, tailwind, sass, react-icons, react-toastify y react-modal.

Este proyecto usa pnpm para manejar las dependencias<br />
First, install dependecies run the development server:

```bash

pnpm i

pnpm run dev

```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Fonts](https://vercel.com/font).

## Organizaición del proyecto:

El proyecto tiene una carpeta public para guardar imagenes y svg estaticos que se puedan usar.<br />
Dentro de src esta el resto del proyecto con el app router de next, otras carpetas son las de:

/components <br />
/Cards <br />
/Containers <br /> &emsp;# Componentes que su funcion principal es recibir informacion y generalmente hacer algo con ella que no sea solo mostrarla<br />
/Displays <br /> &emsp;# Componentes que reciben informacion y la muestran pueden tener otras funciones pero generalmente la interaccino es minima<br />
/Forms <br /> &emsp;# Formularios, generalmente son hechos par mostrarse en modales, y los formularios de "crear" son los mismos que editar<br />
/Inputs <br /> &emsp;# Componentes estilizados para inputs, botones, drag n drop, etc. ya sean generales o con una funcion especifica<br />
/Layout <br /> &emsp;# Componentes como sidebar o header que vayan en el layout.<br />
/Modals <br /> &emsp;# Componentes que especificamente vayan dentro de modales o que sean modales mismos.<br />
/Pages <br /> &emsp;# Son como containers pero generalemte es el unico componente que contiene todos los demas para una sola pagina.<br />
/contexts <br />
/global <br /> &emsp;# La estructura general de los archivos que van aqui son de [[modulo]].[[carpeta]].ts
/functions <br />
/hooks<br />
/interfaces<br />
/styles <br /> &emsp;# Esta carpeta tiene su propio readme, tiene un archivo para los colores y otro para los estilos globales
/templates <br /> &emsp;# Informacion dummy y/o informacion estatica que se puede mapear
/hooks<br />
/services <br /> &emsp;# Son las llamadas a la api. <br /> &emsp;# La estructura general de los archivos que van aqui son de [[modulo]].[[axios/server]].ts <br /> &emsp;# Server son funciones con fetch que se puedan usar del lado del servidor y axios son llamadas con axios del lado del cliente <br /> &emsp;# Generalemente los server tiene GET que se deberian de llamar retrieveX o retrieveSingleX si es get por id.
/utils <br /> &emsp;# Como servicios
