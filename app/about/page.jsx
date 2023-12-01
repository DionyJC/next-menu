import React from "react";

function about() {
  return (
    <section className="container mx-auto">
      <div className="mx-auto max-w-screen-md mt-24">
        <h1 className="text-center mt-11 text-red-400 font-bold md:text-2xl flex justify-center">
          {" "}
          Descripción del Proyecto: <br /> Recetas con Next.js y Tailwind CSS
        </h1>
        <p className=" m-11 ">
        ¡Bienvenidos! En este proyecto, he creado un explorador de recetas utilizando Next.js y consumiendo la API proporcionada por The Meal DB. La idea detrás de este proyecto es proporcionar a los usuarios una plataforma sencilla y atractiva para descubrir nuevas recetas y aprender más sobre la preparación de sus platillos favoritos.
          <span className="text-center mt-5 text-red-400 font-bold md:text-2xl flex justify-center">
            Tecnologías Utilizadas:
          </span>
          Next.js: Elegí Next.js como marco de desarrollo debido a su facilidad para construir aplicaciones web React con enrutamiento sencillo y renderización del lado del servidor (SSR). Esto mejora la velocidad de carga y la experiencia del usuario.

Tailwind CSS: Para estilizar la aplicación, opté por utilizar Tailwind CSS. Tailwind facilita la creación de estilos atractivos y responsivos sin la necesidad de escribir CSS personalizado extenso. La modularidad de Tailwind también se alinea bien con la filosofía de componentes.
          <br />
          <span className="text-center mt-5 text-red-400 font-bold md:text-2xl flex justify-center">
            Funcionalidades Principales:
          </span>
          <span className="text-red-400">Exploración de Recetas:</span> Los usuarios pueden explorar una variedad de recetas obtenidas de The Meal DB API. Cada receta presenta detalles como el nombre, la imagen, los ingredientes y los pasos de preparación.
          <br />
          <span className="text-red-400">Interfaz Responsiva:</span> Gracias a
          Tailwind CSS, la interfaz de usuario se adapta a diferentes tamaños de
          pantalla, garantizando una experiencia consistente y agradable tanto
          en dispositivos de escritorio como en dispositivos móviles.
          <br />
          <span className="text-red-400">
            Rutas Dinámicas con Next.js:
          </span>{" "}
          Next.js facilita la implementación de rutas dinámicas, lo que permite
          una navegación fluida entre diferentes vistas y componentes.
          <br />

          <span className="text-red-400">
          Animaciones Atractivas:
          </span>{" "}
          Implementé animaciones utilizando la librería Framer Motion para dar vida a la interfaz. Las tarjetas de recetas tienen animaciones de entrada para mejorar la experiencia visual del usuario.
          <br />
          {""}
          Este proyecto representa un ejemplo claro de cómo combinar tecnologías
          modernas para crear una aplicación web robusta y eficiente con
          funcionalidades CRUD. La estructura modular y la arquitectura bien
          definida permiten un mantenimiento sencillo y escalabilidad futura.
        </p>
      </div>
    </section>
  );
}

export default about;
