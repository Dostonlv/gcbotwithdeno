import {
  Bot,
  Context,
  serve,
  session,
  SessionFlavor,
  webhookCallback,
} from '../core/deps.ts';
import 'https://deno.land/x/dotenv@v3.2.0/load.ts';
interface SessionData {
  step:
    | 'start'
    | 'admission'
    | 'aboutCourses'
    | 'address'
    | 'phoneNumber'
    | 'phoneNumber2'
    | 'workType'
    | 'check'
    | 'feedback';
  name?: string;
  address?: string;
  phoneNumber?: string;
  phoneNumber2?: string;
  courseType?: string;
}

type MyContext = Context & SessionFlavor<SessionData>;

const bot = new Bot<MyContext>(Deno.env.get('BOT_TOKEN')!);

const handleUpdate = webhookCallback(bot, 'std/http');

serve(async (req) => {
  if (req.method == 'POST') {
    const url = new URL(req.url);
    if (url.pathname.slice(1) == bot.token) {
      try {
        return await handleUpdate(req);
      } catch (err) {
        console.error(err);
      }
    }
  }
  return new Response();
});

bot.use(session({ initial: (): SessionData => ({ step: 'start' }) }));

Deno.env.get('MODE') === 'development' && bot.start();
Deno.env.get('MODE') === 'production' &&
  bot.api.setWebhook(
    Deno.env.get('WEBHOOK_URL')! + '/' + Deno.env.get('BOT_TOKEN')!,
  );

export { bot };
export type { MyContext };
