/* eslint-disable no-param-reassign */

/**
 * Descripcion del helper: Este helper se encarga de eliminar los keys que estén vacíos dentro de un objeto, detecta los nulls o los false.
 *
 * Implementacion: Se importa y se pasa como parametro el objeto.
 *
 * Bugs: 0
 */

// Esta función recibe un objeto y elimina las llaves vacías,
// asignando el valor de la llave a los valores verdaderos.
const DeleteEmptyKeys = (obj) => {
  return Object.keys(obj).forEach((key) => {
    // Recorre cada una de las llaves del objeto
    if (obj[key] === null || obj[key] === "") {
      // Si el valor es falso, nulo o vacío
      delete obj[key]; // Elimina la llave del objeto
    }
    if (obj[key] === true) {
      // Si el valor es verdadero
      // obj[key] = key; // Asigna el valor de la llave al valor del objeto
    }
  });
};

export default DeleteEmptyKeys;
