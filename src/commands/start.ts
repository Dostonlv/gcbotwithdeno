import { bot } from '../core/index.ts';
import { cancel, mainKeyboard } from '../utils/keyboards.ts';

bot.command('start', async (ctx) => {
  const firstName = ctx.from!.first_name;
  const lastName = ctx.from?.last_name || '';

  await ctx.reply(
      `<b>Assalomu alaykum, hurmatli @${ctx.from?.username}!</b> \n` +
      `\n` +
      `Sizni ko'rib turganimdan bag'oyatda xursandman. `+
      `\n` +
      `Bu bot X firmaga tegishli bo'lib sizga X firmasining xizmatlaridan foydalanish imkoniyatini beradi. `+
      `\n`,
    { parse_mode: 'HTML', reply_markup: mainKeyboard },
  );
});
