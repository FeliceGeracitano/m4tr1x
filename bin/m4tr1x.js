#!/usr/bin/env node
setInterval(
  _ => {
    for (Y = y, x = 80; (x -= 2); ) {
      Y = (Y + x * x + 9) % 27;
      p(
        x,
        Y,
        (X = "\u001B[") +
          `37m${(C = String.fromCharCode(12450 + ((y * x) % 16)))}`
      );
      for (o = 6; --o; ) p(x, Y - o, X + `38;5;${46 - o * 6}m${C}`);
    }
    y++;
  },
  (y = 99),
  (p = (x, y, c) => y < 22 && console.log(X + `40m${X}${y};${x}H${c}`))
);
