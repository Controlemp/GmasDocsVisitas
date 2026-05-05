// @ts-check

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.

 @type {import('@docusaurus/plugin-content-docs').SidebarsConfig}
 */
const sidebars = {
  tutorialSidebar: [
    "intro",
    {
      type: "category",
      label: "Módulos del Sistema",
      items: [
        {
          type: "category",
          label: "Aplicación Web",
          items: [
            "modulos/usuarios",
            "modulos/companias",
            "modulos/empleados",
            "modulos/visitas",
            "modulos/perfil",
            "modulos/reportes",
            "modulos/dashboard",
            "modulos/seguridad",
            "modulos/aplicacion",
          ],
        },
        {
          type: "category",
          label: "Aplicación Móvil",
          items: ["modulos/app-movil"],
        },
      ],
    },
  ],
};

export default sidebars;
