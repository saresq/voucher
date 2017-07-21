$(document).ready(function() {
  $('#formvoucher')
    .formValidation({
      framework: 'bootstrap',
      icon: {
        // valid: 'glyphicon glyphicon-ok',
        // invalid: 'glyphicon glyphicon-remove',
        // validating: 'glyphicon glyphicon-refresh'
      },
      fields: {
        nombreprod: {
          validators: {
            notEmpty: {
              message: 'Campo requerido'
            },
            stringLength: {
              message: 'Entre 1 y 100 dígitos',
              min: 1,
              max: 100
            }
          }
        },
        descripcion: {
          validators: {
            notEmpty: {
              message: 'Campo requerido'
            },
            stringLength: {
              message: 'Entre 1 y 255 dígitos',
              min: 1,
              max: 255
            }
          }
        },
        codigoInterno: {
          validators: {
            notEmpty: {
              message: 'Campo requerido'
            },
            stringLength: {
              message: 'Entre 1 y 100 dígitos',
              min: 1,
              max: 100
            }
          }
        },
        stock: {
          validators: {
            notEmpty: {
              message: 'Campo requerido'
            },
            regexp: {
              message: 'Numeros mayor a 0',
              regexp: /^([0-9]*[1-9][0-9]*(\.[0-9]+)?|[0]+\.[0-9]*[1-9][0-9]*)$/
            },
          }
        },
        costoEnvio: {
          validators: {
            notEmpty: {
              message: 'Seleccione una opción'
            }
          }
        },
        precioPublico: {
          validators: {
            notEmpty: {
              message: 'Campo requerido'
            },
            regexp: {
              message: 'Numeros con dos decimales',
              regexp: /^[0-9]*\.[0-9]{2}$ or ^[0-9]*\.[0-9][0-9]$/
            },
          }
        },
        precioPyme: {
          validators: {
            notEmpty: {
              message: 'Campo requerido'
            },
            regexp: {
              message: 'Numeros con dos decimales',
              regexp: /^[0-9]*\.[0-9]{2}$ or ^[0-9]*\.[0-9][0-9]$/
            },
          }
        },
        garantia: {
          validators: {
            notEmpty: {
              message: 'Campo requerido'
            },
            regexp: {
              message: 'Solo numeros',
              regexp: /^[0-9]+$/
            },
          }
        },
        archivo: {
          validators: {
            notEmpty: {
              message: 'Seleccione una opción'
            }
          }
        },
      }
    })
});
