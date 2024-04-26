import { TelegramGetMeResponse, TelegramSendMessageResponse } from "./definitions";

const apiURL = process.env.API_TELEGRAM_URL;
const telegramToken = process.env.TELEGRAM_BOT_TOKEN;
const chatId = process.env.TELEGRAM_CHAT_ID;

export async function getMe(): Promise<TelegramGetMeResponse> {
  const url = new URL(`/bot${telegramToken}/getMe`, apiURL);

  try {
    const response = await fetch(url);

    return await response.json();
  } catch (error) {
    console.error("getMe error:", error);
    return { ok: false, result: null, error: error };
  }
}

export async function sendMessage(message: string): Promise<TelegramSendMessageResponse> {
  const url = new URL(`/bot${telegramToken}/sendMessage?chat_id=${chatId}&text=${message}`, apiURL);

  try {
    const response = await fetch(url);

    return await response.json();
  } catch (error) {
    console.error("sendMessage error:", error);
    return { ok: false, result: null, error: error };
  }
}
