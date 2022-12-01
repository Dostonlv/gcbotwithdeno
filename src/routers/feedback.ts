import { Router } from '../core/deps.ts';
import { bot, MyContext } from '../core/bot.ts';
import { mainKeyboard } from '../utils/keyboards.ts';
import 'https://deno.land/x/dotenv@v3.2.0/load.ts';

const router = new Router<MyContext>((ctx) => ctx.session.step);

const feedback = router.route('feedback');

feedback.on('message:text', async (ctx) => {
  const link = ctx.from.username
    ? 'https://t.me/' + ctx.from.username
    : 'tg://user?id=' + ctx.from.id;
  await ctx.api.sendMessage(
    Deno.env.get('ADMIN')!,
    `<a href="${link}">${
      ctx.from.first_name + ' ' + (ctx.from.last_name || '')
    }</a> odamdan taklif\n${ctx.message.text}`,
    { parse_mode: 'HTML', disable_web_page_preview: true },
  );
  await ctx.reply('Taklifingiz uchun rahmat!', { reply_markup: mainKeyboard });
});

bot.use(router);
