import { Router } from '../core/deps.ts';
import { bot, MyContext } from '../core/bot.ts';
import { WorksKeyboard } from '../utils/keyboards.ts';

const router = new Router<MyContext>((ctx) => ctx.session.step);

const aboutWorks = router.route('aboutWorks');

aboutWorks.hears('Backend ⚙️', async (ctx) => {
  await ctx.reply(
    `w `,
    { reply_markup: WorksKeyboard, parse_mode: 'HTML' },
  );
});

aboutWorks.hears('Frontend 🖥', async (ctx) => {
  await ctx.reply(
    `salom`,
    { reply_markup: WorksKeyboard, parse_mode: 'HTML' },
  );
});

aboutWorks.hears('Android 📱', async (ctx) => {
  await ctx.reply(
    ` `,
    { reply_markup: WorksKeyboard, parse_mode: 'HTML' },
  );
});



bot.use(router);
