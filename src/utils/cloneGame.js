import { Chess } from 'chess.js';

function cloneGame(currentGame) {
  // کپی کردن بازی همراه با تاریخچه حرکت‌ها
  const copy = new Chess();
  //کپی از  شئ ==>chess
  const pgn = currentGame.pgn();
  //تاریخچه حرکت ها
  //بازی فعلی رو استخراج میکنه

  if (pgn) {
    copy.loadPgn(pgn);
  }
  //بازی در کپی  بارگذاری میکنه تاتاریخچه و وضعیت دقیقا بارگزاری شه

  return copy;
}

export default cloneGame;