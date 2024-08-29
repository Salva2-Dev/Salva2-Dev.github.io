<?php
if(isset($_POST['email'])) {
 
    // Edita las líneas siguientes con tu dirección de correo electrónico y el asunto del correo electrónico.
    $email_to = "info@salvacode.dev";
    $email_subject = "Nuevo mensaje del formulario de contacto";
 
    function died($error) {
        // Si hay algún error, devuelve el error al usuario.
        echo "Lo sentimos, pero hubo un error en el formulario que completaste. ";
        echo "Estos errores aparecen a continuación.<br /><br />";
        echo $error."<br /><br />";
        echo "Por favor, vuelve y arregla estos errores.<br /><br />";
        die();
    }
 
 
    // Se valida que los datos hayan sido ingresados en el formulario.
 
    if(!isset($_POST['name']) ||
        !isset($_POST['email']) ||
        !isset($_POST['message'])) {
        died('Lo sentimos, pero parece que hay un problema con los datos que has enviado.');       
    }
 
     
 
    $name = $_POST['name']; // requerido
    $email_from = $_POST['email']; // requerido
    $message = $_POST['message']; // requerido
 
    $error_message = "";
 
// Comprobamos que la dirección de correo electrónico sea válida
 
    if(!filter_var($email_from, FILTER_VALIDATE_EMAIL)) {
        $error_message .= 'La dirección de correo electrónico que ingresaste no parece ser válida.<br />';
    }
 
// Comprobamos que el mensaje no sea vacío
 
    if(strlen($message) < 2) {
        $error_message .= 'El mensaje que ingresaste parece ser demasiado corto o está vacío.<br />';
    }
 
// Si hay algún error, se devuelve el error al usuario.
 
    if(strlen($error_message) > 0) {
        died($error_message);
    }
 
// Se prepara el correo electrónico
 
    $email_message = "Detalles del formulario de contacto:\n\n";
 
    function clean_string($string) {
      $bad = array("content-type","bcc:","to:","cc:","href");
      return str_replace($bad,"",$string);
    }
 
    $email_message .= "Nombre: ".clean_string($name)."\n";
    $email_message .= "Correo electrónico: ".clean_string($email_from)."\n";
    $email_message .= "Mensaje: ".clean_string($message)."\n";
 
     
 
// Se crea el encabezado del correo electrónico
 
$headers = 'From: '.$email_from."\r\n".
 
'Reply-To: '.$email_from."\r\n" .
 
'X-Mailer: PHP/' . phpversion();
 
@mail($email_to, $email_subject, $email_message, $headers);  
 
?>
 
<!-- Mensaje de confirmación que se muestra al usuario cuando el formulario se envía correctamente -->
 
Gracias por contactarnos. Nos pondremos en contacto contigo muy pronto.
 
<?php
 
}
 
?>
``
