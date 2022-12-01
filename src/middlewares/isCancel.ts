import { Context, NextFunction } from '../core/deps.ts';
import { mainKeyboard } from '../utils/keyboards.ts';

const isCancel = async (ctx: Context, next: NextFunction) => {
  if (ctx.message?.text !== 'Bekor qilish!') return await next();
  await ctx.reply('Kerakli bo\'limni tanlang', { reply_markup: mainKeyboard });
};

export { isCancel };
