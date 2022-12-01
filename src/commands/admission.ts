import { bot } from '../core/bot.ts';
import { cancel } from '../utils/keyboards.ts';

bot.hears('Intern/Ishga yozilish 🧑‍💻', async (ctx) => {
  const workType = ctx.session.workType;

  await ctx.reply('Ism Familiyangizni kiriting!\nMisol: Doston Nematov', {
    reply_markup: cancel,
  });
  ctx.session.step = 'admission';
});
