import os
import asyncio
import logging
from aiogram import Bot, Dispatcher, types
from aiogram.filters import Command
from aiogram.client.default import DefaultBotProperties
from aiogram.enums import ParseMode

logging.basicConfig(level=logging.INFO)

BOT_TOKEN = os.getenv("BOT_TOKEN")
YOUR_CHAT_ID = os.getenv("YOUR_CHAT_ID")

print("=== БОТ ЗАПУЩЕН ===")
print(f"BOT_TOKEN: {'ЕСТЬ' if BOT_TOKEN else 'НЕТ'}")

# Создаём бота с отключением webhook
bot = Bot(
    token=BOT_TOKEN,
    default=DefaultBotProperties(parse_mode=ParseMode.HTML)
)

dp = Dispatcher()


@dp.message(Command("start"))
async def cmd_start(message: types.Message):
    await message.answer("🤖 Бот работает! Отправь сообщение.")


@dp.message()
async def handle_message(message: types.Message):
    # Отвечаем пользователю
    await message.answer(f"✅ Получил: {message.text}")

    # Отправляем тебе
    if YOUR_CHAT_ID:
        try:
            await bot.send_message(
                chat_id=int(YOUR_CHAT_ID),
                text=f"📨 Новое сообщение:\n{message.text}"
            )
            print(f"✅ Отправил уведомление тебе")
        except Exception as e:
            print(f"❌ Ошибка: {e}")


async def main():
    # Удаляем webhook перед запуском
    await bot.delete_webhook(drop_pending_updates=True)
    print("✅ Webhook удалён")

    # Запускаем polling
    print("🚀 Запускаю polling...")
    await dp.start_polling(bot)


if __name__ == "__main__":
    asyncio.run(main())