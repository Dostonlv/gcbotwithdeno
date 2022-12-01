import { bot } from '../core/bot.ts';
import { cancel } from '../utils/keyboards.ts';

bot.hears('Takliflar 📝', async (ctx) => {
  await ctx.reply('Taklif yoki Shikoyatingizni yozib qoldiring', {
    reply_markup: cancel,
  });
  ctx.session.step = 'feedback';
});
