
//FUNCIONES ÚTILES Y MISCELANEA.

const checkError = (datosCheck) => {


    for (let field in datosCheck) {


        switch (field) {

            case 'name':

                // eslint-disable-next-line
                if(datosCheck[field] === ''){
                    return 'El campo nombre no puede estar vacío'
                }
                if(! /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/.test(datosCheck[field])){
                    return 'El nombre solo puede contener letras';
                }
                break;

            case 'surname':

                // eslint-disable-next-line
                if(datosCheck[field] === ''){
                    return 'El campo apellidos no puede estar vacío'
                }
                if(! /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/.test(datosCheck[field])){
                    return 'Los apellidos solo puede contener letras';
                }
                break;

            case 'address':

                // eslint-disable-next-line
                if(datosCheck[field] === ''){
                    return 'El campo dirección no puede estar vacío'
                }
                if(! /^[#.0-9a-zA-Z\s,-]+$/.test(datosCheck[field])){
                    return 'La dirección necesita un número de portal';
                }
                break;



            case 'telephone':

                // eslint-disable-next-line
                if(datosCheck[field] === ''){
                    return 'El campo telefono no puede estar vacío'
                }
                if(! /^[0-9]{9,11}$/.test(datosCheck[field])){
                    return 'El teléfono tiene que tener 9 dígitos';
                }
                break;


            case 'email':

                // eslint-disable-next-line
                if(datosCheck[field] === ''){
                    return 'El campo email no puede estar vacío'
                }

                if (! /^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/.test(datosCheck[field])) {
                    return "El email introducido no es correcto";
                }

                break;


            case 'password':
                // eslint-disable-next-line
                if(datosCheck[field] === ''){
                    return 'El campo password no puede estar vacío'
                }
                // eslint-disable-next-line
                if (! /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/.test(datosCheck[field])) {
                    return "El password debe contener 8 caracteres, mayúsculas, minúsculas, número y algún caracter especial";
                }

                break;

            default:

                break;


        }
    }

};



export default checkError;
