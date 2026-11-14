
/* =====================================
   CATALOGO MUNDIAL
   Version 1.0.0
   ===================================== */

const CatalogoMundial = {

  version: "1.0.0",

  categorias: [
    "Tecnología",
    "Educación",
    "Entretenimiento",
    "Música",
    "Deportes",
    "Negocios",
    "Servicios",
    "Comunidad"
  ],

  herramientas: [],

  agregar(herramienta) {
    if (
      !herramienta ||
      typeof herramienta.nombre !== "string" ||
      !herramienta.nombre.trim()
    ) {
      console.error("Herramienta no válida");
      return false;
    }

    const nuevaHerramienta = {
      ...herramienta,
      nombre: herramienta.nombre.trim()
    };

    this.herramientas.push(nuevaHerramienta);

    return true;
  },

  obtenerTodas() {
    return [...this.herramientas];
  },

  buscar(texto) {
    const consulta = String(texto || "")
      .toLowerCase()
      .trim();

    if (!consulta) {
      return this.obtenerTodas();
    }

    return this.herramientas.filter(item =>
      item.nombre.toLowerCase().includes(consulta) ||
      String(item.categoria || "")
        .toLowerCase()
        .includes(consulta)
    );
  },

  obtenerCategorias() {
    return [...this.categorias];
  },

  filtrarPorCategoria(categoria) {
    return this.herramientas.filter(item =>
      item.categoria === categoria
    );
  },

  contar() {
    return this.herramientas.length;
  },

  limpiar() {
    this.herramientas = [];
  }

};

// Acceso global desde el navegador
window.CatalogoMundial = CatalogoMundial;

console.log(
  "Catálogo Mundial cargado correctamente"
);
