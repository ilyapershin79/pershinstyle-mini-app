import os
import asyncio
import logging
from aiogram import Bot, Dispatcher, types
from aiogram.filters import Command

logging.basicConfig(level=logging.INFO)

BOT_TOKEN = os.getenv("BOT_TOKEN")
YOUR_CHAT_ID = os.getenv("YOUR_CHAT_ID")

print("=== ПРОВЕРКА ===")
print(f"BOT_TOKEN: {'ЕСТЬ' if BOT_TOKEN else 'НЕТ'}")
print(f"YOUR_CHAT_ID: {'ЕСТЬ' if YOUR_CHAT_ID else 'НЕТ'}")

if not BOT_TOKEN:
    print("ОШИБКА: Нет BOT_TOKEN")
    exit(1)

bot = Bot(token=BOT_TOKEN)
dp = Dispatcher()


@dp.message(Command("start"))
async def cmd_start(message: types.Message):
    await message.answer("🤖 Бот работает!")


@dp.message()
async def handle_all_messages(message: types.Message):
    await message.answer(f"✅ Получил: {message.text}")

    if YOUR_CHAT_ID:
        try:
            await bot.send_message(
                chat_id=int(YOUR_CHAT_ID),
                text=f"📨 Новое сообщение: {message.text}"
            )
            print(f"✅ Сообщение отправлено тебе")
        except Exception as e:
            print(f"❌ Ошибка: {e}")


async def main():
    print("🚀 БОТ ЗАПУЩЕН")
    await dp.start_polling(bot)


if __name__ == "__main__":
    asyncio.run(main())