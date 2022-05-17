const aoijs = require("aoi.js")

const bot = new aoijs.Bot({
token: "OTc1MDI1OTEzMzc0ODU5MjY0.GQWJpp.rEco7on94NLi5AaiIGmCFE5ubkIaizr2V-XL2Q",
prefix: ".",
intents: ["GUILDS", "GUILD_MESSAGES"]
})

//Events
bot.onMessageDelete()
bot.onMessage()
const loader = new aoijs.LoadCommands(bot)
 loader.load(bot.cmd,"./commands/")

bot.status({
	text: "$serverCount Servers",
	type: "WATCHING",
	status: "idle",
	time: 5
})
bot.status({
	text: "$serverCount Servers",
	type: "WATCHING",
	status: "idle",
	time: 5
})

//Ready Event
bot.readyCommand({
    channel: "",
    code: `$log[Ready on $userTag[$clientID]]`
})




