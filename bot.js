const TelegramBot = require('node-telegram-bot-api');

const token = '7546977859:AAFLB8oh4NUQaUhrI81PhLDEJ7xtLYGaN_c';
const bot = new TelegramBot(token, {polling: false});

console.log(bot); // Kiểm tra đối tượng bot

// Xử lý các cập nhật từ Telegram
bot.on('message', (msg) => {
    const chatId = msg.chat.id;
    const text = msg.text;

    // Ví dụ: Nếu người dùng gửi "/start", bot sẽ trả lời một tin nhắn chào mừng
    if (text === '/start') {
        bot.sendMessage(chatId, 'Xin chào! Mình là bot Telegram của bạn.');
    } else {
        // Xử lý các trường hợp khác
        bot.sendMessage(chatId, `Bạn đã gửi: ${text}`);
    }
});

const url = 'https://api.telegram.org/bot7546977859:AAFLB8oh4NUQaUhrI81PhLDEJ7xtLYGaN_c/getMe';
bot.setWebHook(url)
  .then(() => {
    console.log("Webhook đã được thiết lập thành công!");
  })
  .catch((err) => {
    console.error("Lỗi khi thiết lập webhook:", err);
  });
