<?php
header('Content-Type: application/json');

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['ok' => false, 'error' => 'method_not_allowed']);
    exit;
}

$raw = file_get_contents('php://input');
$data = json_decode($raw, true);

if (!is_array($data)) {
    http_response_code(400);
    echo json_encode(['ok' => false, 'error' => 'invalid_json']);
    exit;
}

$name = isset($data['name']) ? trim($data['name']) : '';
$email = isset($data['email']) ? trim($data['email']) : '';
$subject = isset($data['subject']) ? trim($data['subject']) : '';
$message = isset($data['message']) ? trim($data['message']) : '';
$sourceUrl = isset($data['sourceUrl']) ? trim($data['sourceUrl']) : '';

if ($name === '' || $email === '' || $subject === '' || $message === '') {
    http_response_code(400);
    echo json_encode(['ok' => false, 'error' => 'invalid_payload']);
    exit;
}

$apiKey = getenv('RESEND_API_KEY');
if (!$apiKey) {
    http_response_code(500);
    echo json_encode(['ok' => false, 'error' => 'resend_not_configured']);
    exit;
}

$toRaw = getenv('RESEND_CONTACT_TO');
if (!$toRaw) {
    $toRaw = 'contact@exploge.com';
}
$to = array_values(array_filter(array_map('trim', explode(',', $toRaw))));

if (count($to) === 0) {
    http_response_code(500);
    echo json_encode(['ok' => false, 'error' => 'no_recipients']);
    exit;
}

$from = getenv('RESEND_FROM');
if (!$from) {
    $from = 'contact@mail.exploge.com';
}

$html = '<div style="font-family:system-ui,-apple-system,Segoe UI,Roboto,Helvetica,Arial,sans-serif;line-height:1.6;color:#0a0a0a">' .
    '<h2 style="margin:0 0 12px">New Contact Form Submission</h2>' .
    '<p style="margin:0 0 8px"><strong>Name:</strong> ' . htmlspecialchars($name, ENT_QUOTES, 'UTF-8') . '</p>' .
    '<p style="margin:0 0 8px"><strong>Email:</strong> ' . htmlspecialchars($email, ENT_QUOTES, 'UTF-8') . '</p>' .
    '<p style="margin:0 0 8px"><strong>Subject:</strong> ' . htmlspecialchars($subject, ENT_QUOTES, 'UTF-8') . '</p>' .
    '<p style="margin:0 0 8px"><strong>Source:</strong> ' . htmlspecialchars($sourceUrl, ENT_QUOTES, 'UTF-8') . '</p>' .
    '<div style="margin-top:12px;padding:12px;border:1px solid #e5e5e5;border-radius:8px;background:#fafafa">' .
    '<div style="white-space:pre-wrap">' . nl2br(htmlspecialchars($message, ENT_QUOTES, 'UTF-8')) . '</div>' .
    '</div>' .
    '</div>';

$payload = [
    'from' => $from,
    'to' => $to,
    'subject' => 'Contact: ' . $subject,
    'html' => $html,
    'reply_to' => $email,
];

$ch = curl_init('https://api.resend.com/emails');
curl_setopt($ch, CURLOPT_POST, true);
curl_setopt($ch, CURLOPT_HTTPHEADER, [
    'Content-Type: application/json',
    'Authorization: ' . 'Bearer ' . $apiKey,
]);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode($payload));

$responseBody = curl_exec($ch);
$httpCode = curl_getinfo($ch, CURLINFO_HTTP_CODE);

if ($responseBody === false) {
    curl_close($ch);
    http_response_code(500);
    echo json_encode(['ok' => false, 'error' => 'email_send_exception']);
    exit;
}

curl_close($ch);

if ($httpCode >= 200 && $httpCode < 300) {
    echo json_encode(['ok' => true]);
    exit;
}

http_response_code(500);
echo json_encode(['ok' => false, 'error' => 'email_send_failed']);
