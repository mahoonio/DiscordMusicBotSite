export default [
  {
    name: 'play',
    description:
      'Searches for song using the query given as the argument and plays the best result',
    aliases: 'p',
    field: 'Everyone',
  },
  {
    name: 'clear',
    description:
      'Deletes messages and commands on the bot in the channel the command is sent',
    aliases: 'clean',
    field: 'Admin',
  },
  {
    name: 'disconnect',
    description: 'Disconnects the bot from the vc',
    aliases: 'dc , fuckoff , sik , leave',
    field: 'DJ',
  },
  {
    name: 'forceskip',
    description: 'Forceskips the current song',
    aliases: 'fs, forcestop',
    field: 'DJ',
  },
  {
    name: 'leavecleanup',
    description: 'Removes songs from users that have left the voice channel',
    aliases: 'lc , lcu',
    field: 'DJ',
  },
  {
    name: 'loop',
    description: 'loops the current song',
    aliases: '-',
    field: 'DJ',
  },
  {
    name: 'pause',
    description: 'Pauses the current song',
    aliases: '-',
    field: 'DJ',
  },
  {
    name: 'queueloop',
    description: 'Loops the current queue',
    aliases: 'ql',
    field: 'DJ',
  },
  {
    name: 'forward',
    description: 'Forwards the current song to any desired point',
    aliases: '-',
    field: 'DJ',
  },
  {
    name: 'playskip',
    description: 'Adds a song to the queue and skips straight to it',
    aliases: 'ps',
    field: 'DJ',
  },
  {
    name: 'remove',
    description: 'Removes the song provided by the user',
    aliases: 'r',
    field: 'DJ',
  },
  {
    name: 'removedupes',
    description: 'Removes duplicated songs',
    aliases: 'rd',
    field: 'DJ',
  },
  {
    name: 'replay',
    description: 'Replays the current song',
    aliases: '-',
    field: 'DJ',
  },
  {
    name: 'resume',
    description: 'Resumes the paused song',
    aliases: 'unpause',
    field: 'DJ',
  },
  {
    name: 'rewind',
    description: 'Rewinds the current song to any desired point',
    aliases: '-',
    field: 'DJ',
  },
  {
    name: 'seek',
    description: 'Seeks the current song to the point provided by the user',
    aliases: '-',
    field: 'DJ',
  },
  {
    name: 'shuffle',
    description: 'Shuffles the current queue',
    aliases: '-',
    field: 'DJ',
  },
  {
    name: 'grab',
    description: 'Sends the current playing song through direct messages',
    aliases: '-',
    field: 'Everyone',
  },
  {
    name: 'invite',
    description: 'Sends bot invitation link',
    aliases: '-',
    field: 'Everyone',
  },
  {
    name: 'info',
    description: 'Sends a message including infos about bot',
    aliases: '-',
    field: 'Everyone',
  },
  {
    name: 'join',
    description: 'Summons bot to the VC',
    aliases: 'j, biainjabache , summon',
    field: 'Everyone',
  },
  {
    name: 'lyrics',
    description: 'Sends an embed message with the current song lyrics',
    aliases: 'lr',
    field: 'Everyone',
  },
  {
    name: 'nowplaying',
    description: 'Sends a message including description of the current song',
    aliases: 'np, current',
    field: 'Everyone',
  },
  {
    name: 'ping',
    description: 'Sends current bots connection latency',
    aliases: '-',
    field: 'Everyone',
  },
  {
    name: 'queue',
    description:
      'Sends and embed messages including details about the current queue',
    aliases: 'q',
    field: 'Everyone',
  },
  {
    name: 'search',
    description:
      'Searches youtube by the query given in the arg, then sends top 20 best results listed in 4 pages',
    aliases: 'searchsong',
    field: 'Everyone',
  },
  {
    name: 'skip',
    description: 'starts a skip poll for the current song',
    aliases: 's, stop',
    field: 'Everyone',
  },
];
