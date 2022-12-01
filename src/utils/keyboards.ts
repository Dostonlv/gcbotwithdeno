import { InlineKeyboard, Keyboard } from '../core/deps.ts';

const mainKeyboard = new Keyboard()
  .text('Intern/Ishga yozilish 🧑‍💻')
  .text('Ish o\'rinlari haqida 📃')
  .row()
  .text('Lokatsiya 📍')
  .text('Biz bilan bog\'lanish 📞')
  .row()
  .text('Takliflar 📝')
  .resized()
  .oneTime();

const WorksKeyboard = new Keyboard()
  .text('Frontend 🖥')
  .text('Backend ⚙️')
  .row()
  .text('Android 📱')
  .row()
  .text('Ortga qaytish 🔙')
  .resized()
  .oneTime();

const cancel = new Keyboard().text('Bekor qilish!').resized().oneTime();

const location = new Keyboard()
  .requestLocation('Lokatsiyani yuborish')
  .row()
  .text('Ortga qaytish 🔙')
  .oneTime()
  .resized();

const check = new InlineKeyboard()
  .text('To\'g\'ri', 'true')
  .text('Xato', 'false');

export { cancel, check, WorksKeyboard, location, mainKeyboard };
