<?php
// Set headers for CORS (if needed)
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST');
header('Access-Control-Allow-Headers: Content-Type');
header('Content-Type: application/json');

// Only accept POST requests
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['success' => false, 'message' => 'Méthode non autorisée']);
    exit;
}

// Get form data
$data = json_decode(file_get_contents('php://input'), true);

// Validate required fields
if (empty($data['name']) || empty($data['email']) || empty($data['message'])) {
    http_response_code(400);
    echo json_encode(['success' => false, 'message' => 'Tous les champs sont requis']);
    exit;
}

// Sanitize inputs
$name = htmlspecialchars(strip_tags($data['name']));
$email = filter_var($data['email'], FILTER_SANITIZE_EMAIL);
$message = htmlspecialchars(strip_tags($data['message']));

// Check for honeypot (spam protection)
if (!empty($data['honeypot'])) {
    // Silently reject spam
    echo json_encode(['success' => true, 'message' => 'Message envoyé avec succès']);
    exit;
}

// Validate email format
if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    http_response_code(400);
    echo json_encode(['success' => false, 'message' => 'Adresse email invalide']);
    exit;
}

// Email configuration
$to = 'info@mobutuzemanga.com';
$subject = 'Nouveau message du site web - ' . $name;

// Email body
$email_body = "Vous avez reçu un nouveau message depuis le formulaire de contact.\n\n";
$email_body .= "Nom: " . $name . "\n";
$email_body .= "Email: " . $email . "\n\n";
$email_body .= "Message:\n" . $message . "\n";

// Email headers
$headers = "From: noreply@mobutuzemanga.com\r\n";
$headers .= "Reply-To: " . $email . "\r\n";
$headers .= "X-Mailer: PHP/" . phpversion() . "\r\n";
$headers .= "Content-Type: text/plain; charset=UTF-8\r\n";

// Send email
if (mail($to, $subject, $email_body, $headers)) {
    http_response_code(200);
    echo json_encode([
        'success' => true,
        'message' => 'Votre message a été envoyé avec succès. Nous vous répondrons dans les plus brefs délais.'
    ]);
} else {
    http_response_code(500);
    echo json_encode([
        'success' => false,
        'message' => 'Une erreur est survenue lors de l\'envoi du message. Veuillez réessayer.'
    ]);
}
?>
