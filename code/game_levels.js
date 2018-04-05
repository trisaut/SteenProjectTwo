var GAME_LEVELS = [
  ["                                                                                ",
   "                                                                 ooo            ",
   "                                                                 ooo            ",
   "                                                                 o o            ",
   "                                                                oouoo           ",
   "                                                                oxxxo           ",
   "                                                                xx!xx           ",
   "                                                                x!!!x         o ",
   "                                                                x!!!x        xxx",
   "                                                    o             v          xxx",
   "                                    x  t       xx  xxx                       xxx",
   "                                    xxxxxxx                                  xxx",
   "                 o o              o                    xxx                   xxx",
   "     i           o o             ox         x                     y          xxx",
   " o            o xxxxx            x                                      o    xxx",
   "xxx          xxxxxxxx                                           xxxxx  xxx   xxx",
   "xxx  @       xxxxxxxx  u   u   u   u  u  u  u  u  u  u  u  u  u xxxxx  xxx   xxx",
   "xxxxxxxxxxxxxxxxxxxxxx!!!xxxxx!!!xxxxxxx!!!!!!!!!!!!!!!!!!xxxxxxxxxxx  xxxxxxxxx",
   "xxxxxxxxxxxxxxxxxxxxxx!!!xxxxx!!!xxxxxxx!!!!!!!!!!!!!!!!!!xxxxxxxxxxxooxxxxxxxxx",
   "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxooxxxxxxxxx",
   "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
   "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
   "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
   "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx"],
  ["                                                                                                                  ",
   "                                                                   o   o                                      oooo",
   "                                                                   o   o                                      oooo",
   "                                                  u                o   o                                      oooo",
   "                                                 xxx               o   o                                      oooo",
   "                                                 x!x               o   o                         u    u    u  oooo",
   "                                                 x!x                                          xx!!!xx!!!xx!!!xxxxx",
   "                                                 xvx               x   x                      xx!!!xx!!!xx!!!xxxxx",
   "                                                             xx             xx                xxxxxxxxxxxxxxxxxxxx",
   "                                                              xx!!!!!!!!!!!xx                                     ",
   "                                                       o       xxxx!!!!!xxxx      o                               ",
   "                                                      xxx         xxxxxxx        xxx                              ",
   "                                               x      xxx                          x            u      u      u  o",
   "                                               x   xxxxxx                          x         xxxxxxxxxxxxxxxxxxxxx",
   "                                               x     xxxx                          x        oxxxxxxxxxxxxxxxxxxxxx",
   "                                               x     xxxx                          x       xxxxxxxxxxxxxxxxxxxxxxx",
   "                u u u u                       oxx    xxxx                          xo        xxxxxxxxxxxxxxxxxxxxx",
   "               xxxxxxxxx      xxx   xxxxxxxxxxxx     xxxx    o o   |               xxx       xxxxxxxxxxxxxxxxxxxxx",
   "              uxxxxxxxxx      xxx   xxxxxxxxxxxx     xxxx   xxxxx                            xxxxxxxxxxxxxxxxxxxxx",
   "    u@u     uxxxxxxxxxx!      !xx                  xxxxxx             x                    y xxxxxxxxxxxxxxxxxxxxx",
   "    xxx    xxxxxxxxxxxx!      !xx   o  o  o  o  o    xxxx                                    xxxxxxxxxxxxxxxxxxxxx",
   "o   xxx    xxxxxxxxxxxx!      !xx                    xxxx u   u   u   u  xxx t  x  =     u   xxxxxxxxxxxxxxxxxxxxx",
   "x!!!xxx!!!!xxxxxxxxxxxx!!!!!!!!xxxxxxxxxxxxxxxxxxxxxxxxxx!!!x!!!x!!!x!!!xxxxxxxxxxxxxxxx!!!xxxxxxxxxxxxxxxxxxxxxxx",
   "x!!!xxx!!!!xxxxxxxxxxxx!!!!!!!!xxxxxxxxxxxxxxxxxxxxxxxxxx!!!x!!!x!!!x!!!xxxxxxxxxxxxxxxx!!!xxxxxxxxxxxxxxxxxxxxxxx",
   "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
   "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
   "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
   "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
   "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
   "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx"],
  ["                                                                                                              ",
   "                                                                                                              ",
   "                                        |                                                                     ",
   "                                                                                                              ",
   "                                                                                                              ",
   "                                        |                   u                                                 ",
   "                                                            x                                                 ",
   "                                                            x                                                 ",
   "                                        |                   x                                                 ",
   "                                                            x                                                 ",
   "                                                            x                                          o      ",
   "                                                            x                                         xxx     ",
   "                                        u                   x                             u                   ",
   "                                      oxxx                  xoooooooooox                 xxx                  ",
   "                                      xxxxx                 xoooooooooox        u               x             ",
   "                                      xxxxx                 xoooooooooox       xxx                            ",
   "                                 xx   xxxxx                 xoooooooooox      x!!!x                           ",
   "                                      xxxxx                 xxxxxxxxxxxx       xxx                            ",
   "                                     oxxxxx   u   x   x  u  xx                                                ",
   "                                     xxxxxxxxxxxxxx   xxxxxxxx                  u u                           ",
   "                                      xxxxx           xooooooo                xxxxxxx                         ",
   "                                      xxxxx      = = =xooooooo                                                ",
   "                                 xx   xxxxx           xooooooo      u                                         ",
   "                                      xxxxx= = =      xooooooo     xxx                                        ",
   "                                     oxxxxx           xooooooo    x!!!xx      u                               ",
   "                                     xxxxxx      = = =xooooooo     xxx       xxx                              ",
   "                                    u xxxxx           xooooooo              x!!!x        u                    ",
   "                                  xxxxxxxxx           xooooooo               xxv        xxx                   ",
   "                                    xxxxxxx           xoooooooooooooox                 x!!!x                  ",
   "                              o     xxxxxxxx          x!!!!!!!!!!!!!!x                  xvx                ooo",
   "                             xxx    xxxxxxxx    o  u  x!!!!!!!!!!!!!!x                              u      ooo",
   "                             x             x   xxxxxxxxxxxxxxxxxxxxxxx                u           xxxxx    ooo",
   "                             x             x                                         xxx                   ooo",
   "                             x  xx         x                                        x!!!x                  ooo",
   "                             x             xo u                                      xxx                   xxx",
   "                             x            xxxxxxx                                                          xxx",
   "                             x     xx     x                                                                xxx",
   "                             x            x                                                                xxx",
   "                             x          xxx                              xxxxxx     u                      xxx",
   "                                          x                              xxxxxx    xxx                     xxx",
   "                                    u     x       |xxxx|      |xxxx|     xxxxxx   x!!!x                 y  xxx",
   "                                   xxx    x                              xxxxxx    xxx                     xxx",
   "                              xxxxxxxxxxxxx u  ooo   u  ooo  u      oooxxxxxxxx                  xxxt xxxxxxxx",
   "   u    @     o    u    o     xxxxxxxxxxxxx!!!xxxxxx!!!xxxxx!!!xxxxxxxxxxxxxxxx                  xxxxxxxxxxxxx",
   "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx!!!xxxxxx!!!xxxxx!!!xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
   "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
   "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx"],
  ["                                                    |                                                         ",
   "                                        |                                                                     ",
   "                                                                                                              ",
   "                                                                                                     |        ",
   "                          o                                                                                   ",
   "                          o             |           |                                               xxx   o   ",
   "      xx      x           o                                                                  o o o  xxx   o   ",
   "      x x     x    xxx    o                                   x  o      = o    o      o      o o o =xxx   o   ",
   "      x       x           o                                   xxxxxxt xxxxxxxxxxxxt xxxxxxxxxxxxxxxxxxx   o   ",
   "      x   |   x           o    o     o                 x      xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx   o   ",
   "      x      xx           x    o     o  |           |                                                         ",
   "      x       x                o     o          x                                                             ",
   "      x       x                o     o                                        oooooooooooooooooooooooooooooooo",
   "       xo                      o     o                                        xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
   "        x                      o     o     x                                                                  ",
   "                               o     o                                                                        ",
   "           o                   x     x               |                                                        ",
   "           x                                                                                                  ",
   "                                                                                                              ",
   "   o    o                                                                                                     ",
   "   x    x                                                                                                     ",
   "                                                     |                                                        ",
   "                                                                                                              ",
   "x           o          x                                                                                      ",
   "  u     u   x      u t xx       u                                                                             ",
   "xxxxxxxxxxxxx  xxxxxxxxxx  xxxxxxxxxx  xxx                                                                    ",
   "xxx         xoox o o o  xoox o o o  xooxxxx                                                               h   ",
   "xxx         xxxx        xxxx        xxxxx            |                                                        ",
   "xxx  @                                                                                                   oc   ",
   "xxxxxxxxx                                     xxxxx                     xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
   "xxxxxxxxx=                  =                 xxxxx   u      u     u    xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
   "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx!!!!!!!!!!!!!!!!!!!!!xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
   "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
   "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx"]
];

if (typeof module != "undefined" && module.exports)
  module.exports = GAME_LEVELS;

  //x is a wall graphic
  //! is lava graphic

  //for lab 5 using y to make a floating object... adding in various places



  //for level... each of the lines need to be the same length
