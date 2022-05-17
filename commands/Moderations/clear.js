module.exports = {
	name: "clear",
	aliases: "purge",
	code: `
$deleteIn[3s]
I've cleared $message[1] Message(s) in this channel.
$clear[$message[1]]
$onlyIf[$isNumber[$message[1]]==true;That's not a vaild number.]
$argsCheck[1;Please enter how much messages you wanted to clear. Eg: .clear 69]
$onlyPerms[managemessages;{newEmbed: {title:Permission Error}{description:You need permission called "Manage Messages" to do that!}{color:RED}]`
}