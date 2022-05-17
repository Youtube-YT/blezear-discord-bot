module.exports = {
	name: "reload",
	code: `
$sendMessage[✅Successfully refreshing $commandsCount command(s).
Added Commands: $get[after]]
$let[after;$sub[$commandsCount;$get[before]]]
$updateCommands
$let[before;$commandsCount]
$clear[1]
$wait[5s]
$sendMessage[$customEmoji[loading;975033602544926750]Refreshing $commandsCount command(s) please wait 5 seconds;no]
$deletecommand
$onlyForIDs[868060094003294278;730782268175679528;]`
}