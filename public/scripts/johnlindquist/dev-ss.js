//Description: An example of launching a project, dev server, and chrome
//Twitter: @johnlindquist
exec(`code ~/projects/simplescripts.dev`)
iterm(`cd ~/projects/simplescripts.dev; vercel dev`)
exec(`chrome-tab localhost:3000`)
