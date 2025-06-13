<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Get form values
    $name  = htmlspecialchars(trim($_POST['name']));
    $email = htmlspecialchars(trim($_POST['email']));
    $phone = htmlspecialchars(trim($_POST['phone']));

    // Validate required fields
    if (empty($name) || empty($email) || empty($phone)) {
        die("Please fill in all required fields.");
    }

    // Email settings
    $to = "kunal.esspesoft@gmail.com"; // Replace with your email
    $subject = "New Contact Form Submission";
    $headers = "From: $email\r\n";
    $headers .= "Reply-To: $email\r\n";
    $headers .= "Content-Type: text/html; charset=UTF-8\r\n";

    // Email body
    $message = "
        <html>
        <head>
            <title>Contact Form Submission</title>
        </head>
        <body>
            <h2>New Contact Form Submission</h2>
            <p><strong>Name:</strong> {$name}</p>
            <p><strong>Email:</strong> {$email}</p>
            <p><strong>Phone:</strong> {$phone}</p>
        </body>
        </html>
    ";

    // Send email
    if (mail($to, $subject, $message, $headers)) {
        echo "Thank you! Your message has been sent.";
    } else {
        echo "Sorry, something went wrong. Please try again later.";
    }
} else {
    // Disallow direct access
    echo "Invalid request.";
}
?>
