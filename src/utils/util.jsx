
//FUNCIONES ÚTILES Y MISCELANEA.

const checkError = (datosCheck) => {


    for (let field in datosCheck) {


        switch (field) {

            case 'email':

                if (! /^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/.test(datosCheck[field])) {

                    return "El email introducido no es correcto";
                }

                break;


            case 'password':

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
