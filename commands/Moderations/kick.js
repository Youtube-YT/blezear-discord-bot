module.exports = {
	name: "kick",
	code: `
$sendDm[You've been kicked on $serverName\nReason: $get[reason];$mentioned[1]]
$onlyIf[$isBot[$mentioned[1]]==false;]
$userTag[$mentioned[1]] has been kicked from the server.
$let[reason;$messageSlice[1]]
$argsCheck[>1;Please provide a reason why you wanted to kick him!]
 $onlyIf[$highestRole[$mentioned[1]]!=$highestRole[$authorID];You can't kick someone with the same highest role]
 $onlyIf[$rolePosition[$highestRole[$clientID]]<$rolePosition[$highestRole[$mentioned[1]]];I can't kick someone with higher role than me]
 $onlyIf[$highestRole[$mentioned[1]]!=$highestRole[$clientID];I can't kick someone with the same highest role as mine]
$onlyIf[$mentioned[1]!=$ownerID;You can't kick the server owner]
 $onlyIf[$mentioned[1]!=$authorID;I am sure you don't want to do that]
 $onlyIf[$mentioned[1]!=$clientID;I can't kick myself]
 $onlyIf[$isMentioned[$mentioned[1]]==true;You need to mention someone you want me to kick]
$argsCheck[>0;Please mention a user & Reason to kick that user!]
$onlyPerms[kick;{newEmbed: {title:Permission Error}{description:You need permission called "Kick" to do that!}{color:RED}]`
}