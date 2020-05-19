import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }

  public color: any = {
    Reset:"\x1b[0m%s\x1b[0m",
    Bright : "\x1b[1m%s\x1b[0m",
    Dim : "\x1b[2m%s\x1b[0m",
    Underscore : "\x1b[4m%s\x1b[0m",
    Blink : "\x1b[5m%s\x1b[0m",
    Reverse : "\x1b[7m%s\x1b[0m",
    Hidden : "\x1b[8m%s\x1b[0m",
    FgBlack : "\x1b[30m%s\x1b[0m",
    FgRed : "\x1b[31m%s\x1b[0m",
    FgGreen : "\x1b[32m%s\x1b[0m",
    FgYellow : "\x1b[33m%s\x1b[0m",
    FgBlue : "\x1b[34m%s\x1b[0m",
    FgMagenta : "\x1b[35m%s\x1b[0m",
    FgCyan : "\x1b[36m%s\x1b[0m",
    FgWhite : "\x1b[37m%s\x1b[0m",
    BgBlack : "\x1b[40m%s\x1b[0m",
    BgRed : "\x1b[41m%s\x1b[0m",
    BgGreen : "\x1b[42m%s\x1b[0m",
    BgYellow : "\x1b[43m%s\x1b[0m",
    BgBlue : "\x1b[44m%s\x1b[0m",
    BgMagenta : "\x1b[45m%s\x1b[0m",
    BgCyan : "\x1b[46m%s\x1b[0m",
    BgWhite : "\x1b[47m%s\x1b[0m",
    };

    public dev:string = `
    -oooooooo/-      .+ooooooooo:  +ooo+        oooo/
+MMMMMMMMMMm+   -NMMMMMMMMMMs  +MMMM:      /MMMM/
+MMMNyyydMMMMy  /MMMMyyyyyyy/   mMMMd      mMMMd
+MMMm    :MMMM. /MMMN           /MMMM/    /MMMM:
+MMMm    .MMMM- /MMMN            dMMMm    mMMMh
+MMMm    .MMMM- /MMMMyyyy+       :MMMM/  +MMMM-
+MMMm    .MMMM- /MMMMMMMMy        hMMMm  NMMMy
+MMMm    .MMMM- /MMMMoooo:        -MMMM+oMMMM-
+MMMm    .MMMM- /MMMN              yMMMmNMMMy
+MMMm    +MMMM. /MMMN              .MMMMMMMM.
+MMMMdddNMMMMo  /MMMMddddddd+       sMMMMMMs
+MMMMMMMMMNh:   .mMMMMMMMMMMs        yMMMMs
.///////:-        -/////////-         .::.
`;

  public hello: string = `         
+MMMMMMMMMMMMMMMMMM\\    /MMMMMMMMMMMMMMMMM+
+MMMMMMMMMMMMMMM    \\  /    /MMMMMMMMMMMMM+
+MMMM           \\    \\     /          MMMM+
+MMMM            \\    \\   /           MMMM+
+MMMM             \\    \\              MMMM+
+MMMM            / \\    \\             MMMM+
+MMMM           /   \\    \\            MMMM+
+MMMM          /     \\    \\           MMMM+
+MMMM         /    /  \\    \\          MMMM+
+MMMMMMMMMMMMM    /    \\    \\MMMMMMMMMMMMM+
+MMMMMMMMMMMMMMMM/      \\MMMMMMMMMMMMMMMMM+
  
Hey there! Interested in the code behind? Well, you're in luck - we're open source!
Come say hi, tell us what you're debugging, or even lend a hand in our repo: https://github.com/antonyjm462/Portfolio
`;

}
