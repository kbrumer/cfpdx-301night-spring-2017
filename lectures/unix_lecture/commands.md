# From A-Z in Unix Tools
## Useful Commands You Should Know for Fun and Profit

# Special Characters
```
|        pipe delimiter - used to seperate commands and pipe the output of one command to another
>        redirects the output of the command to a file (this will create)
>>       redirects the output of the command to a file (this will append)
&        sends the job into the background
TAB      the tab will auto-complete commands (in your path) or directories depending on the context
CTRL+c   kills the currently running process in the foreground
`<cmd>`  backticks - execute the command inside the backtick and return to the next command
``` 

# Environment Variables

`$PATH` is an environment variable. It controls which programs will get run. When you type a command, your shell will look onto your path for an executable program to run. 

`$HOME` is you home directory. On Mac Osx it looks like this: `/Users/kbrumer`. On a linux box, it would be `/home/kbrumer`

# Command switches

Most (but not all) commands will allow you to ask for help, print version, etc. 

```
-h -? --help   prints help or usage information
-v --version   prints the version
```

# awk
`awk` is a language designed for text processing

All the `awk` you will almost ever need to know

```awk {'print $1'} ```

An example:

``` 
git status | awk {'print $2'} 
git reset HEAD `git status | grep txt | awk {'print $3'}`
```

# .bashrc or .bash_profile
In your `$HOME` directory, you can set variables and do initializations in your `.bash_profile`.

`.bashrc` is for Linux

`.bash_profile` is for Mac OSX

# cat
concatenate a file 

# cd
`cd` is to change directory. Some `cd` tricks: 

```
cd ~          // (tilde) go to $HOME directory
cd -          // (dash)  go to previous directory
cd ..         // go up one directory
cd ../../..   // go up three directories (etc)
```

# cp
copy a file

# df
`df` tells you how much disk space is free (if you run out of disk space, you will be sad)

# du
`du` tells you how much disk space a file or folder is using

# echo
will repeat input

# emacs
a text editor. Unix expert level achieved.

# env
`env` will show you the environment variables that have been set. 

# find
finds files searching one or more directory trees

``` find . -type f -name \*.css```

# .gitconfig
this is useful to put aliases and general git configuration

```
[alias]
   ci = commit
   st = status
   co = checkout
   lola = log --graph --decorate --pretty=oneline --abbrev-commit --all
```

# git
our favorite version control tool. You can get help from `git` using the following syntax `git help <command>`

Example:

```
git help bisect
```

# grep
`grep` is a utility for searching plain-text data sets for lines matching a regular expression

```grep alice alice.txt```

# history
`history` will show you you command history. Your command history can also be naviagted from the terminal using the Up and Dwon arrows. 

`!<num>` will repeat the command at index <num> in your history

`!!` will repeat the last command

`CTRL + R` will allow you to search your history and execute a command that you find


# ifconfig

`ifconfig` will give you information about your network interfaces

# jq

`jq` is a general purpose JSON editor

Available [here](https://stedolan.github.io/jq/)

# kill

used to kill or terminate a process, by the PID (process id)

# less
`less` is used to paginate very long console out. `less` is `more`. 

```
less alice.txt
```
# ln
`ln` is used to make a symbolic (soft) link to a directory.

Example:

```
ln -s /Work/github.com/kbrumer/portland-301n2/class-07-lab-templates/unix/sample ~/sample
```

# ls

lists files or directories

Example:

```
# (a) show all/hidden files; (l) show the long options 
ls -al    
```

# man
`man` is a manual most of the commands on your system.

Example:

```
man grep
```

# mc
midnight commander is a dual pane file manager. Unix expert level achieved.

# mkdir
used to make directories

# mv
`mv` is used to move files or directories

# nano
another editor

# nvm
node version manager - a tool to manage multiple versions of node

Available [here](https://github.com/creationix/nvm)

# pbcopy
Mac OSX only. Takes the output of your command and pastes to your clipboard.

# perl 
`perl` is a language, but also handy at text replacement.

Example:

```
# -p execute on every line
# -i file gets edited in-place
# -e execute on command line
# g global on the entire line
# i be case insensitive
cp alice.txt foo.txt
perl -pi -e 's/Alice/Bob/ig' foo.txt
```

# ps
lists the running processes

# pwd
prints the working directory

Example:

```
pwd | pbcopy
```

# quit
used to exit or quit a terminal session

# rm
removes files

# rmdir
removes directories

# rsync
used to securly transfer files from one system to another. Unix expert level achieved.

Example:

```
rsync --progress -avz -e ssh root@10.1.10.158:/home/sosacorp/backup/201605031700 .
```

# sed
`sed` is a stream editor, useful for making lots of changes in files

# ssh
`ssh` is used to connect securely to a terminal on a remote system

Example:

```
ssh root@50.246.238.78
```

# tee
`tee` is used to redirect output both to the console and a file

# uptime
`uptime` shows how long the system has been continuously running

# vi
another editor. Unix expert level achieved.

# wc
counts words. 

`wc -l` counts lines

# which
`which` tells you which command in your path will be run

Example:

```
which live-server
```

# xargs
break up arguments from previous command and pass to the next command. Unix expert level achieved.

Example:

```
find . -type f | xargs grep the | wc -l
```

# zsh and oh-my-zsh
a very nice shell. 

Available [here](https://github.com/robbyrussell/oh-my-zsh)