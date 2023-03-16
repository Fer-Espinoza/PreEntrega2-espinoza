let marca = prompt("¿Qué marca de vino busca?")
let cepa = prompt("¿Cuál es la cepa que desea?")
let max = Number(prompt("Valor máximo dispuesto a pagar"))

// vinos = 0;

const datosBusqueda = {
  marca: marca,
  cepa: "",
  maximo: max,
  año: "",
};

function mostrarVinos(vinos) {
  vinos.forEach((vino) => {
    console.log(vino);
  });
}

function filtrarMarca(vino) {
  if (datosBusqueda.marca) {
    return vino.marca === datosBusqueda.marca;
  }
  return vino;
}

function filtrarCepa(vino) {
  if (datosBusqueda.cepa) {
    return vino.cepa === datosBusqueda.cepa;
  }
  return vino;
}

function filtrarMaximo(vino) {
  if (datosBusqueda.maximo) {
    return vino.precio <= datosBusqueda.maximo;
  }
  return vino;
}

function filtrarAño(vino) {
  if (datosBusqueda.año) {
    return vino.año == datosBusqueda.año;
  }
  return vino;
}

function noResultados() {
  console.log("No se encontraron resultados");
}

function filtrarVinos() {
  let resultado = vinos
    .filter(filtrarMarca)
    .filter(filtrarCepa)
    .filter(filtrarMaximo)
    .filter(filtrarAño);
  if (resultado.length) {
    mostrarVinos(resultado);
  } else {
    noResultados();
  }
}

filtrarVinos();

//mostrarVinos(vinos)
