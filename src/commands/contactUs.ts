import { bot } from '../core/bot.ts';
import { mainKeyboard } from '../utils/keyboards.ts';

bot.hears('Biz bilan bog\'lanish 📞', async (ctx) => {
  await ctx.reply('Tel: +998 90 044 25 35 yoki +998 94 048 13 06\nTelegram: @GC_IT_Admin');
});
