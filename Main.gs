//This is the menu that can be found in the sheet like "Classroom"
//This going to run evertytime the sheet is open
//So you don't need to worry to run it

function onOpen() {
  var ui = SpreadsheetApp.getUi();
  // Or DocumentApp or FormApp.
  ui.createMenu('Classroom')  //Set the name of the menu
      .addItem('Crear Clases y subir profesores', 'CrearClases')
      .addItem('Subir Alumnos', 'SubirAlumnos')
      .addToUi();
}
