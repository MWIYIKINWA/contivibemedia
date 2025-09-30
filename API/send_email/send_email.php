<?php

header("Access-Control-Allow-Origin: https://contivibemedia.com");
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Allow-Headers: Content-Type");

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'PHPMailer/src/Exception.php';
require 'PHPMailer/src/PHPMailer.php';
require 'PHPMailer/src/SMTP.php';

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // Get form data
    $name = $_POST['name'] ?? '';
    $email = $_POST['email'] ?? '';
    $phone = $_POST['phone'] ?? '';
    $service = $_POST['service'] ?? '';
    $message = $_POST['message'] ?? '';

    // Basic validation
    if (empty($name) || empty($email) || empty($message)) {
        http_response_code(400);
        echo "Please fill in all required fields (name, email, message).";
        exit;
    }

    // Validate email format
    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        http_response_code(400);
        echo "Please provide a valid email address.";
        exit;
    }

    try {
        $mail = new PHPMailer(true);

        // Server settings
        $mail->isSMTP();
        $mail->Host = 'mail.contivibemedia.com'; // Updated host
        $mail->SMTPAuth = true;
        $mail->Username = 'test@contivibemedia.com';
        $mail->Password = '$4D=VEc_oy@wB-3&';
        $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
        $mail->Port = 587; // Changed to 587 for TLS

        // Recipients
        $mail->setFrom('test@contivibemedia.com', 'Contivibe Media Website');
        $mail->addAddress('sales@contivibemedia.com', 'Contivibe Media Sales');
        $mail->addReplyTo($email, $name);

        // Content
        $mail->isHTML(true);
        $mail->Subject = 'New Contact Form Submission - ' . $name;

        $mail->Body = "
        <div style='font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;'>
            <h2 style='color: #000035;'>New Contact Form Submission</h2>
            <table style='width: 100%; border-collapse: collapse;'>
                <tr>
                    <td style='padding: 8px; border: 1px solid #ddd; background-color: #f9f9f9;'><strong>Name:</strong></td>
                    <td style='padding: 8px; border: 1px solid #ddd;'>$name</td>
                </tr>
                <tr>
                    <td style='padding: 8px; border: 1px solid #ddd; background-color: #f9f9f9;'><strong>Email:</strong></td>
                    <td style='padding: 8px; border: 1px solid #ddd;'>$email</td>
                </tr>
                <tr>
                    <td style='padding: 8px; border: 1px solid #ddd; background-color: #f9f9f9;'><strong>Phone:</strong></td>
                    <td style='padding: 8px; border: 1px solid #ddd;'>$phone</td>
                </tr>
                <tr>
                    <td style='padding: 8px; border: 1px solid #ddd; background-color: #f9f9f9;'><strong>Service Interest:</strong></td>
                    <td style='padding: 8px; border: 1px solid #ddd;'>$service</td>
                </tr>
                <tr>
                    <td style='padding: 8px; border: 1px solid #ddd; background-color: #f9f9f9;'><strong>Message:</strong></td>
                    <td style='padding: 8px; border: 1px solid #ddd;'>" . nl2br(htmlspecialchars($message)) . "</td>
                </tr>
            </table>
            <br>
            <p><small>This message was sent from the Contivibe Media contact form.</small></p>
        </div>
        ";

        $mail->AltBody = "
        New Contact Form Submission\n
        Name: $name\n
        Email: $email\n
        Phone: $phone\n
        Service Interest: $service\n
        Message: $message\n
        ";

        $mail->send();

        http_response_code(200);
        echo "Thank you for contacting us! We will get back to you shortly.";

    } catch (Exception $e) {
        http_response_code(500);
        error_log("Mailer Error: " . $mail->ErrorInfo); // Log the error
        echo "Something went wrong. Please try again or contact us directly.";
    }
} else {
    http_response_code(405);
    echo "Method not allowed.";
}
?>