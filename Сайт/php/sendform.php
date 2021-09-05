<?php 
$tem = trim($_POST['tem']);
$name = trim($_POST['name']); 
$phone = trim($_POST['tel']); 
$sms = trim($_POST['sms']); 
$fromMail = 'info@sevugstroy.ru'; //Почта отправителя (в домене почты должен быть адрес вашего сайта)
$fromName = 'Поступила заявка с сайта'; //Заголовок письма
$emailTo = 'sevugstroy@yandex.ru'; //Ваша почта
$subject = 'Форма обратной связи sevugstroy'; 
$subject = '=?utf-8?b?'. base64_encode($subject) .'?='; 
$headers = "Content-type: text/plain; charset=\"utf-8\"\r\n"; 
$headers .= "From: ". $fromName ." <". $fromMail ."> \r\n"; 

// Содержимое письма 
$body = "Получено письмо с сайта sevugstroy.ru \nТема письма: $tem\nИмя: $name\nТелефон: $phone\nСообщение: $sms"; 

// сообщение будет отправлено в случае, если поле с номером телефона не пустое 
if (strlen($phone) > 0) { 
$mail = mail($emailTo, $subject, $body, $headers, '-f'. $fromMail ); 
return;
} 

?>