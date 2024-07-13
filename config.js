//#ENJOY
/**
**/

const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "";
global.location = "Sri lanka .";
global.mongodb = process.env.MONGODB_URI || "";
global.allowJids = process.env.ALLOW_JID || "94789958225@s.whatsapp.net";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "srilank/ampara";
global.github = process.env.GITHUB || "https://github.com/DEXTER-BOTS/RCD-MD";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029Vag1WQFJf05dF0pQeU3u";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029Vag1WQFJf05dF0pQeU3u";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/1f4e6e1cc2ed1662adb36.jpg";
global.devs = "923135673658";
global.sudo = process.env.SUDO || "94789958225,94757660788,94770730717,94785274495";
global.owner = process.env.OWNER_NUMBER || "94789958225,94753574803";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "true";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "true";
global.userImages = process.env.USER_IMAGES || "";
global.waPresence = process.env.WAPRESENCE || "recording";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "";
global.scan = "";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiT0JadzRLQXZING5mV3JQNkhBT0VhNm5maUdySmpUWFAxWWwwN0FaTmczMD0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiMlBEWUVwVmVFaXRaS2JWU2ErU2JFWjBJb0JVNGpVZGFtRkU5aHlZdjlUdz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI2TjhEcXBLSnpRRGNndXNnQjdCL2VaK3ZUREFpNGdHOHl0bFFrL1FlUFZRPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ2WVhFcndSRk95VVZkVWdZTFJjTm9Wd0JJS29kbk1CL292c3pnWVM1RUY0PSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImFEeFlQUFdaVmpqTU9mK0N0bE5pWDZPeHZ0ZDluNnZqRS8wKzdMRnRqRlk9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjRXY2NsaEFoSm5YRFNqWUhFM0IyeEZoYzk5cHVmWThLbSsyVUVpSXlWVU09In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoibUsyaXJqMkhyc1NIa3VNSXE4bGpQdnY0a1BuZTNwN3phMnNOdGdxZExGdz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiclVkMko3LzNEcEhWaUhtUTlwdTZnbHFqdFV1bUFVa2pnUUdEZkpjS0NTOD0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InZYMEFvNTNibDFaT2pnTXZWd3JIaVd4dlYyMmNxaFFMMFN1dzQweVhDWUpQZ2JPV21nOVZzS3oweHkvR2J4Q0dXSEYzNnVybXNiN21mSlBoVXh1T2lnPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MjUwLCJhZHZTZWNyZXRLZXkiOiJjVXdocmtBWlkydHZibTVhdGtOVWQzckd0RzFzajNueXlXOGY3UGxPWjVJPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJpNGVKdXpBRFFsNmFkeDdydXUyWDh3IiwicGhvbmVJZCI6IjNmMDc4MTdlLTJiMmEtNGMxZS1iZWY0LWU1YjFmYjE1ODkwNSIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJQTHJnQS8wbjVHNzBjRVhWcmdlM0JZbGZ1QVE9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiamxOeFM5YWljWEdZYlJnbDEzV0VGYkloKzBFPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IldLUlJaUjRZIiwibWUiOnsiaWQiOiI5NDc4MTIyNjE0NDoyMUBzLndoYXRzYXBwLm5ldCIsIm5hbWUiOiLwnZCS8J2Qk/CdkIDwnZCT8J2QlPCdkJIg8J2QivCdkIjwnZCN8J2QhiDwnZCV8J2QiPCdkIzwnZCUICAg8J2QkvCdkJPwnZCA8J2QkfCdkJMgPPCdkJbwnZCA8J2QiPCdkJM+ICAgICAgICAgIFxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG4gICDwnZCS8J2Qk/CdkIDwnZCT8J2QlPCdkJIg8J2QivCdkIjwnZCN8J2QhiJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDSnZyeWZFR0VJbnV5clFHR0FVZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoiZStjeHpEc0lHQjBXR1lTWEZZcFNaMkRsVXhraCs0TmdrRnZTa05kdTIxQT0iLCJhY2NvdW50U2lnbmF0dXJlIjoiZE0wUFQ0K3RTRlNqV3daSXhFQnNjRnptd3JqVUxNczgxZjJvVFFXOXVvbzluNk0wcklZVDFLakl5U1VpMTR4V0xwT3RyNHJUWnI3ZmcwODZXb3ExRFE9PSIsImRldmljZVNpZ25hdHVyZSI6ImU4Ylc0cE5zbHhicWJVWG1oNmdzUzY3eExZcng1N0FGTkJ4azRBYlZId05zSEhxRnBNWWhRSGZSYytQZCtCQTRBb0NWWEszYjUwNzhLNDNUemJsZ2dRPT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiOTQ3ODEyMjYxNDQ6MjFAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCWHZuTWN3N0NCZ2RGaG1FbHhXS1VtZGc1Vk1aSWZ1RFlKQmIwcERYYnR0USJ9fV0sInBsYXRmb3JtIjoic21iYSIsImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTcyMDg5MTE1OCwibXlBcHBTdGF0ZUtleUlkIjoiQUFBQUFILzMifQ=="
module.exports = {
  menu: process.env.MENU || "",
  HANDLERS: process.env.PREFIX || ",",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "𝐅𝐈𝐋𝐄-𝐆𝐄𝐍𝐄𝐑𝐀𝐓𝐄𝐃-𝐁𝐘-𝐑𝐂𝐃-𝐌𝐃-🏛️",
  author: process.env.PACK_AUTHER || "𝐑𝐂𝐃",
  packname: process.env.PACK_NAME || "♥️",
  botname: process.env.BOT_NAME || "𝐑𝐂𝐃 𝐌𝐃",
  ownername: process.env.OWNER_NAME || "𝐃𝐄𝐗𝐓𝐄𝐑,𝐕𝐈𝐏𝐄𝐑",
  errorChat: process.env.ERROR_CHAT || "94789958225",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "chat.whatsapp.com",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "private",
  LANG: (process.env.THEME || "WASI").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
