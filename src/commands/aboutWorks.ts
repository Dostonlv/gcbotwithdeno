import { bot } from '../core/index.ts';
import { WorksKeyboard } from '../utils/keyboards.ts';

bot.hears('Ish o\'rinlari haqida 📃', async (ctx) => {
  await ctx.reply('O\'zingizga kerakli kursni tanlang', {
    reply_markup: WorksKeyboard,
  });
  ctx.session.step = 'aboutWe';
});
