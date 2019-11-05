# Stòópid Shell.JS
Designed to run on EvenNode, this repository hosts the source code of a 'quick' HTTP server-to-shell wrapper I've made.  To interact with it, simply include `http://testshell.eu-4.evennode.com` as the hostname, followed by any command.  Be cognisant that non-zero exit codes will return an **HTTP 400** code rather than **200**.

An example is placed below, which outputs the number 5 and prints it to the webpage:
```console
http://testshell.eu-4.evennode.com/echo%205
```

This one-liner will list files on the `/` and `/data/app` folders, respectively:
```console
http://testshell.eu-4.evennode.com/echo%20%22Main%20directory:%22&&ls%20/&&echo%20%22Current%20directory:%22&&pwd&&ls
```
