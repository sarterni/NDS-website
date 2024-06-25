<?php
function version($path)
{
    // Obtenir le chemin complet du fichier
    $filePath = $_SERVER['DOCUMENT_ROOT'] . $path;

    // Vérifier si le fichier existe
    if (file_exists($filePath)) {
        // Ajouter l'heure de la dernière modification comme chaîne de requête à l'URL du fichier
        return $path . '?v=' . filemtime($filePath);
    } else {
        // Optionnel: Ajoutez un log ou un message d'erreur pour déboguer
        error_log("File does not exist: " . $filePath);
        
        // Retourner le chemin original si le fichier n'existe pas
        return $path;
    }
}
?>
