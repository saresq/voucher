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
        compuModelo: {
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
        compuProcesador: {
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
        compuSO: {
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
        compuRam: {
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
        compuAlmacenamiento: {
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
        compuChip: {
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
        compuVideo: {
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
        compuPantalla: {
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
        compuTipoDisco: {
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


        impModelo: {
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
        impTipo: {
          validators: {
            notEmpty: {
              message: 'Seleccione una opción'
            }
          }
        },
        impPpm: {
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
        impInalambrica: {
          validators: {
            notEmpty: {
              message: 'Seleccione una opción'
            }
          }
        },
        impColor: {
          validators: {
            notEmpty: {
              message: 'Seleccione una opción'
            }
          }
        },
        impDoblecara: {
          validators: {
            notEmpty: {
              message: 'Seleccione una opción'
            }
          }
        },


        monitorModelo: {
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
        monitorTipo: {
          validators: {
            notEmpty: {
              message: 'Seleccione una opción'
            }
          }
        },
        monitorTiemporesp: {
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
        monitorMaxReso: {
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
        monitorTipoEntrada: {
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


        otroModelo: {
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
        otroDesc: {
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

        proyecModelo: {
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
        proyecTipo: {
          validators: {
            notEmpty: {
              message: 'Seleccione una opción'
            }
          }
        },
        proyecDuracion: {
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
        proyecHDMI: {
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
        proyecContraste: {
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
        proyecComp: {
          validators: {
            notEmpty: {
              message: 'Seleccione una opción'
            }
          }
        },


        tabModelo: {
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
        tabTamaño: {
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
        tabTipoPant: {
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
        tabRam: {
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
        tabAlmacenamiento: {
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
        tabSd: {
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
        tabSo: {
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
        tabReso: {
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
        tabCamFront: {
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
        tabCamPost: {
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
        tabGps: {
          validators: {
            notEmpty: {
              message: 'Seleccione una opción'
            }
          }
        },

      }
    })
});
