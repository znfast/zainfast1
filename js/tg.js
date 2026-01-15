
function send_telegram_message(message){
	tok = '8428649205:AAF_SbXQJfEVXvr99r2eFlV2StGVqrRVZg4'
	chatId = '6969224682'


      fetch(`https://api.telegram.org/bot${tok}/sendMessage`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          chat_id: chatId,
          text: message,
          disable_notification: false
        })
      });


}