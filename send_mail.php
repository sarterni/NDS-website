<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $to = "sarter.nicolas@gmail.com"; // Remplacez par votre adresse e-mail
    $subject = "Contact depuis le site Les Actus de Nico";

    // Sécurisation de l'entrée
    $name = htmlspecialchars($_POST["name"]);
    $email = filter_var($_POST["email"], FILTER_SANITIZE_EMAIL);
    $message = htmlspecialchars($_POST["message"]);

    $body = "Nom: $name\nEmail: $email\nMessage:\n$message";

    $headers = "From: $email";

    // Envoi de l'e-mail
    if (mail($to, $subject, $body, $headers)) {
        echo "Message envoyé avec succès.";
    } else {
        echo "Erreur lors de l'envoi du message.";
    }
}
?>

