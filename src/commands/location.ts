import { bot } from '../core/bot.ts';
import { mainKeyboard } from '../utils/keyboards.ts';

bot.hears('Lokatsiya 📍', async (ctx) => {
  await ctx.replyWithLocation(41.292023,69.223451, {
    reply_markup: mainKeyboard,
  });
  await ctx.reply(
    'Manzil: Chilonzor tumani Novza metro  oldida',
  );
});
