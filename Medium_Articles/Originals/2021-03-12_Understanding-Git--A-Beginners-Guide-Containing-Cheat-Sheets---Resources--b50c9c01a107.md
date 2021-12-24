Understanding Git (A Beginners Guide Containing Cheat Sheets & Resources) {#understanding-git-a-beginners-guide-containing-cheat-sheets-resources .p-name}
=========================================================================


Basic Git Work Flow.


 
{.section .section .section--body .section--first name="63c8"}
 

------------------------------------------------------------------------


  
### Understanding Git (A Beginners Guide Containing Cheat Sheets & Resources) {#3315 .graf .graf--h3 .graf--leading .graf--title name="3315"}

### Resources, Cheat Sheets & Links \@Bottom of the Page! {#cb18 .graf .graf--h3 .graf-after--h3 name="cb18"}

![](https://cdn-images-1.medium.com/max/800/0*68fyM5AI85U_I3vo.jpg) 

For More Advanced Readers, or those with very limited free time...
here's an abridged Git Reference.

{#517f .graf .graf--mixtapeEmbed .graf-after--p name="517f"}
[**Git-Tricks**\
*Refs*bryanguner.medium.com](https://bryanguner.medium.com/git-tricks-57e8d0292285 "https://bryanguner.medium.com/git-tricks-57e8d0292285") [](https://bryanguner.medium.com/git-tricks-57e8d0292285) 


### What's a distributed version control system? {#77c5 .graf .graf--h3 .graf-after--mixtapeEmbed name="77c5"}

Git is an example of a distributed version control system (DVCS)
commonly used for open source and commercial software development. DVCSs
allow full access to every file, branch, and iteration of a project, and
allows every user access to a full and self-contained history of all
changes. Unlike once popular centralized version control systems, DVCSs
like Git don't need a constant connection to a central repository.
Developers can work anywhere and collaborate asynchronously from any
time zone.

Without version control, team members are subject to redundant tasks,
slower timelines, and multiple copies of a single project. To eliminate
unnecessary work, Git and other VCSs give each contributor a unified and
consistent view of a project, surfacing work that's already in progress.
Seeing a transparent history of changes, who made them, and how they
contribute to the development of a project helps team members stay
aligned while working independently.

### Why Git? {#88ed .graf .graf--h3 .graf-after--p name="88ed"}

According to the latest [Stack Overflow developer
survey](https://insights.stackoverflow.com/survey/2017#technology) , more than 70 percent of developers use Git, making
it the most-used VCS in the world. Git is commonly used for both open
source and commercial software development, **with significant
benefits** for individuals, teams and businesses.

-   [Git lets developers see the entire timeline of their changes,
    decisions, and progression of any project in one place. From the
    moment they access the history of a project, the developer has all
    the context they need to understand it and start
    contributing.]{#0276}
-   [Developers work in every time zone. With a DVCS like Git,
    collaboration can happen any time while maintaining source code
    integrity. Using branches, developers can safely propose changes to
    production code.]{#2be5}
-   [Businesses using Git can break down communication barriers between
    teams and keep them focused on doing their best work. Plus, Git
    makes it possible to align experts across a business to collaborate
    on major projects.]{#6d54}

### Table Of Contents: {#4efe .graf .graf--h3 .graf-after--li name="4efe"}

[*Editing Understanding Git (A Beginners Guide Containing Cheat Sheets &
Resources) --- Medium*](#editing-understanding-git-a-beginners-guide-containing-cheat-sheets--resources--medium) 

> [***What's a distributed version control
> system?***](#whats-a-distributed-version-controlsystem){.markup--anchor
> .markup--blockquote-anchor}

> [*Why Git?*](#why-git){.markup--anchor .markup--blockquote-anchor}

> [*What's a repository?*](#whats-a-repository){.markup--anchor
> .markup--blockquote-anchor}

> [***Git Flow***](#git-flow){.markup--anchor
> .markup--blockquote-anchor}

> [*Cloning a repo and changing the remote
> url*](#cloning-a-repo-and-changing-the-remoteurl){.markup--anchor
> .markup--blockquote-anchor}

> [*1. The first step is to clone the
> repo!*](#1-the-first-step-is-to-clone-therepo){.markup--anchor
> .markup--blockquote-anchor}

> [*2. Make your own
> repo*](#2-sweet-you-have-the-cloned-repo-in-your-preferred-directory-now-lets-make-your-own-repo-on-github-create-a-new-repository){.markup--anchor
> .markup--blockquote-anchor}*.*

> [*3. Next, copy the .git link that is on the next
> page.*](#3-next-copy-thegit-link-that-is-on-the-next-page-do-not-do-any-other-steps-on-this-pagethat-is-for-when-you-do-not-clone-arepo){.markup--anchor
> .markup--blockquote-anchor}

> [*4. Whenver you clone a
> repo*](#4-whenver-you-clone-a-repo-it-already-has-agit-directory-with-certain-configurations-set-up-to-be-able-to-push-this-repo-to-your-newly-created-github-repo-we-have-to-change-the-remoteorigin){.markup--anchor
> .markup--blockquote-anchor}

> [*5. Thats its! You can now
> run*](#5-thats-its-you-can-now-run-git-push-and-it-will-push-to-your-newly-createdrepo){.markup--anchor
> .markup--blockquote-anchor}
> `git                     push`{.markup--code .markup--blockquote-code}
> [*and it will push to your newly created
> repo.*](#5-thats-its-you-can-now-run-git-push-and-it-will-push-to-your-newly-createdrepo){.markup--anchor
> .markup--blockquote-anchor}

> [*Basic Git Work Flow.*](#basic-git-workflow){.markup--anchor
> .markup--blockquote-anchor}

> [***Cheat Sheet:***](#cheat-sheet){.markup--anchor
> .markup--blockquote-anchor}

> [*My Git Reference Repo:*](#my-git-reference-repo){.markup--anchor
> .markup--blockquote-anchor}

> [*Git basics*](#git-basics){.markup--anchor
> .markup--blockquote-anchor}

> [*A glance into GIT*](#a-glance-intogit){.markup--anchor
> .markup--blockquote-anchor}

> [*Tracking changes in a
> repository*](#tracking-changes-in-a-repository){.markup--anchor
> .markup--blockquote-anchor}

> [*Branches and workflow*](#branches-andworkflow){.markup--anchor
> .markup--blockquote-anchor}

> [*Bringing it back
> together*](#bringing-it-backtogether){.markup--anchor
> .markup--blockquote-anchor}

> [*Connect-W-Github*](#connect-w-github){.markup--anchor
> .markup--blockquote-anchor}

> [*I ❤️ Open Source*](#i-%EF%B8%8F-opensource){.markup--anchor
> .markup--blockquote-anchor}

> [*Merging your code on
> GitHub*](#merging-your-code-ongithub){.markup--anchor
> .markup--blockquote-anchor}

> [*Browsing Your Git
> Repository*](#browsing-your-git-repository){.markup--anchor
> .markup--blockquote-anchor}

> [*Seeing changes in real
> time*](#seeing-changes-in-realtime){.markup--anchor
> .markup--blockquote-anchor}

> [*Diff options*](#diff-options){.markup--anchor
> .markup--blockquote-anchor}

> [*Time travel*](#time-travel){.markup--anchor
> .markup--blockquote-anchor}

> [*Why checkout?*](#why-checkout){.markup--anchor
> .markup--blockquote-anchor}

> [*Git 'Do-Overs': Reset &
> Rebase*](#git-do-overs-reset-rebase){.markup--anchor
> .markup--blockquote-anchor}

> [*Resetting the past*](#resetting-thepast){.markup--anchor
> .markup--blockquote-anchor}

> [*Soft resets*](#soft-resets){.markup--anchor
> .markup--blockquote-anchor}

> [*Risky Business: Mixed
> resets*](#risky-business-mixedresets){.markup--anchor
> .markup--blockquote-anchor}

> [*Red alert! Hard resets*](#red-alert-hardresets){.markup--anchor
> .markup--blockquote-anchor}

> [*Rebase: 'Alt-time travel'*](#rebase-alt-time-travel){.markup--anchor
> .markup--blockquote-anchor}

> [*I see you too like to live life Dangerously... tell me about
> Rebase..*](#i-see-you-too-like-to-live-life-dangerously-tell-me-aboutrebase){.markup--anchor
> .markup--blockquote-anchor}

> `working-on-the-header`{.markup--code .markup--blockquote-code}

> [*"Golden Rule of Git"*](#golden-rule-ofgit){.markup--anchor
> .markup--blockquote-anchor}

> **How 2\'s**

> [***Troubleshooting Git***](#troubleshooting-git){.markup--anchor
> .markup--blockquote-anchor}

> **Further Reading & Resources**

### What's a repository? {#4828 .graf .graf--h3 .graf-after--blockquote name="4828"}

A *repository*, or [Git project](https://git-scm.com/) , encompasses the entire collection of files and
folders associated with a project, along with each file's revision
history. The file history appears as snapshots in time called *commits*,
and the commits exist as a linked-list relationship, and can be
organized into multiple lines of development called *branches*. Because
Git is a DVCS, repositories are self-contained units and anyone who owns
a copy of the repository can access the entire codebase and its history.
Using the command line or other ease-of-use interfaces, a git repository
also allows for: interaction with the history, cloning, creating
branches, committing, merging, comparing changes across versions of
code, and more.

Working in repositories keeps development projects organized and
protected. Developers are encouraged to fix bugs, or create fresh
features, without fear of derailing mainline development efforts. Git
facilitates this through the use of topic branches: lightweight pointers
to commits in history that can be easily created and deprecated when no
longer needed.

### Git Flow {#90cd .graf .graf--h3 .graf-after--p name="90cd"}

### Cloning a repo and changing the remote url {#f951 .graf .graf--h3 .graf-after--h3 name="f951"}

(These steps are only for when you initially clone a project repo. Not
when you clone your partners repo to collaborate together. To do that,
you only have to complete step 1!)

### 1. The first step is to clone the repo! {#f1dd .graf .graf--h3 .graf-after--p name="f1dd"}

-   [Navigate to the repo you want to clone and hit the big green code
    button. Copy the link given.]{#b2f6}

![](https://cdn-images-1.medium.com/max/800/1*63LoanrbOPBIwDC6oFarFA.png) 

-   [Navigate in your terminal to the directory where you want this repo
    to live. I've chosen downloads]{#8563}
-   [`git clone HTTPS://LINKTOURL/THATYOUCOPIED`{.markup--code
    .markup--li-code .u-paddingRight0 .u-marginRight0}]{#c9b3}

![](https://cdn-images-1.medium.com/max/800/1*PRiaHOvU-wvpAYQtIqduGQ.png) 

### 2. Sweet, you have the cloned repo in your preferred directory. Now lets make your own repo. On github, create a new repository. {#0852 .graf .graf--h3 .graf-after--figure name="0852"}

-   [Default settings are fine. Hit the big green button
    `Create Repository`{.markup--code .markup--li-code}]{#c98b}

![](https://cdn-images-1.medium.com/max/800/1*U1qwd0OEBYhcToXYt2i6iA.png) 

![](https://cdn-images-1.medium.com/max/800/1*jk3-RTC0rRV_OF931B4Fsg.png) 

### 3. Next, {#a705 .graf .graf--h3 .graf-after--figure name="a705"}

***copy the .git link that is on the next page. Do not do any other
steps on this page --- That is for when you do not clone a repo.***




 ="7148"}
 

------------------------------------------------------------------------


  ### These are the commands GitHub provides when you create a new Repo: {#26bc .graf .graf--h3 .graf--leading name="26bc"}

#### Quick setup --- if you've done this kind of thing before {#d5a0 .graf .graf--h4 .graf-after--h3 name="d5a0"}
 
Set up in Desktop

or

HTTPSSSH

Get started by [creating a new
file](https://github.com/bgoonz/the-meaning-of-life-is-42/new/master)  or [uploading an existing
file](https://github.com/bgoonz/the-meaning-of-life-is-42/upload) . We recommend every repository include a
[README](https://github.com/bgoonz/the-meaning-of-life-is-42/new/master?readme=1) ,
[LICENSE](https://github.com/bgoonz/the-meaning-of-life-is-42/new/master?filename=LICENSE.md) ,
and [.gitignore](https://github.com/bgoonz/the-meaning-of-life-is-42/new/master?filename=.gitignore) .

### ...or create a new repository on the command line {#a0b3 .graf .graf--h3 .graf-after--p name="a0b3"}

```
 {#3372 .graf .graf--pre .graf-after--h3 name="3372"}
echo "# the-meaning-of-life-is-42" >> README.md
git init
git add README.md
git commit -m "first commit"
git branch -M master
git remote add origin https://github.com/bgoonz/the-meaning-of-life-is-42.git
git push -u origin master
```


### ...or push an existing repository from the command line {#0bf5 .graf .graf--h3 .graf-after--pre name="0bf5"}

```
 {#955b .graf .graf--pre .graf-after--h3 name="955b"}
git remote add origin https://github.com/bgoonz/the-meaning-of-life-is-42.git
git branch -M master
git push -u origin master
```


### ...or import code from another repository {#303c .graf .graf--h3 .graf-after--pre name="303c"}

You can initialize this repository with code from a Subversion,
Mercurial, or TFS project.

[Import
code](https://github.com/bgoonz/the-meaning-of-life-is-42/import) 

### 4. Whenever you clone a repo: {#426b .graf .graf--h3 .graf-after--p name="426b"}

#### It already has a .git directory with certain configurations set up. To be able to push this repo to your newly created GitHub repo we have to change the remote origin. {#2ebf .graf .graf--h4 .graf-after--h3 name="2ebf"}

-   [To do that, just run this command: (Make sure you are inside the
    repo you cloned)]{#dda6}

```
 {#f34a .graf .graf--pre .graf-after--li name="f34a"}
git remote set-url origin https://LINK/TO/YOUR/GIT/THAT/YOU/COPIED/FROM/PREVIOUS/STEP.git
```


OR:

![](https://cdn-images-1.medium.com/max/800/1*HTnMuxJ4tCDJ3I49cUrP8w.png) 

### 5. You can now run `git push` and it will push to your newly created repo. {#760b .graf .graf--h3 .graf-after--figure name="760b"}

### Basic Git Work Flow. {#dc1c .graf .graf--h3 .graf-after--h3 name="dc1c"}

-   [After making changes to a file and you are ready to commit / push
    to your repo you can run the following commands:]{#23ce}
-   [`git add .`{.markup--code .markup--li-code} - stages modified files
    to be committed.]{#9934}
-   [`git status`{.markup--code .markup--li-code} - displays files that
    have been modified]{#6ce0}
-   [`git commit -m 'A helpfully commit message'`{.markup--code
    .markup--li-code} - commits the changes to your local repo. Get in
    the habit now of making helpful commit messages]{#ce65}
-   [`git push`{.markup--code .markup--li-code} - pushes your local
    commits to your GitHub repo!]{#70ec}
-   [To pull down changes that your partner pushed to the repo you
    simply have to run:]{#4ca3}
-   [`git pull`{.markup--code .markup--li-code} - this will fetch the
    most recent updates!]{#3bef}

### Cheat Sheet: {#248a .graf .graf--h3 .graf-after--li name="248a"}

### My Git Reference Repo: {#bfc5 .graf .graf--h3 .graf-after--figure name="bfc5"}

{#f295 .graf .graf--mixtapeEmbed .graf-after--h3 name="f295"}
[**bgoonz/github-reference-repo**\
*Cloning a repo and changing the remote url Basic Git Workflow (These
steps are only for when you initially clone
a...*github.com](https://github.com/bgoonz/github-reference-repo "https://github.com/bgoonz/github-reference-repo") [](https://github.com/bgoonz/github-reference-repo) 


### Git basics {#8713 .graf .graf--h3 .graf-after--mixtapeEmbed name="8713"}

Like many disciplines, learning Git is just a matter of learning a new
language. You'll cover a lot of new vocabulary in this lesson! Remember
that the vocabulary you'll learn will allow you to communicate clearly
with other developers worldwide, so it's important to understand the
meaning of each term.

It's also important to note that Git is a complex and powerful tool. As
such, its documentation and advanced examples may be tough to
understand. As your knowledge grows, you may choose to dive deeper into
Git. Today, you'll focus on the commands you'll use every
day --- possibly for the rest of your programming career! Get
comfortable with these commands and resist the urge to copy/paste or
create keyboard shortcuts as you're getting started.

### A glance into GIT {#00ed .graf .graf--h3 .graf-after--p name="00ed"}

Before you look at any practical examples, let's talk about how Git
works behind the scenes.

Here is your first new word in Git-speak: *repository*, often shortened
to *repo*. A Git repo comprises all the source code for a particular
project. In the "dark ages" example above, the repo is the first
directory you created, where work is saved to, and which acts as the
source for code shared to others. Without a repo, Git has nothing to act
on.

Git manages your project as a series of *commits*. A commit is a
collection of changes grouped towards a shared purpose. By tracking
these commits, you can see your project on a timeline instead of only as
a finished project:

![](https://cdn-images-1.medium.com/max/800/1*Sc7e8RGGxhoCnMFG8KR6og.png) 

Notice the notes and seemingly random numbers by each commit? These are
referred to as *commit messages* and *commit hashes*, respectively. Git
identifies your commits by their hash, a specially-generated series of
letters and numbers. You add commit messages to convey meaning and to
help humans track your commits, as those hashes aren't very friendly to
read!

A Git hash is 40 characters long, but you only need the first few
characters to identify which hash you're referring to. By default, Git
abbreviates hashes to 7 characters. You'll follow this convention, too.

Git provides a helpful way for us to "alias" a commit in plain English
as well. These aliases are called *refs*, short for "references". A
special one that Git creates for all repositories is
`HEAD`{.markup--code .markup--p-code}, which references the most recent
commit. You\'ll learn more about creating your own refs when you learn
about \"branching\".

Git maintains three separate lists of changes: the *working directory*,
the *staging area*, and the *commit history*. The working directory
includes all of your in-progress changes, the staging area is reserved
for changes you're ready to commit, and the commit history is made up of
changes you've already committed. You'll look more at these three lists
soon.

Git only cares about changes that are "tracked". To track a file, you
must add it to the commit history. The working directory will always
show the changes, even if they aren't tracked. In the commit history,
you'll only have a history of files that have been formally tracked by
your repository.

### Tracking changes in a repository {#0242 .graf .graf--h3 .graf-after--p name="0242"}

Now, let's get practical!

You can create a repository with `git init` . Running this command will initialize a new Git repo in
your current directory. It\'s important to remember that you only want a
repository for your project and not your whole hard drive, so always run
this command inside a project folder and not your home folder or
desktop. You can create a new repo in an empty folder or within a
project directory you\'ve already created.

What good is an empty repo? Not much! To add content to your repository,
use `git add`{.markup--code .markup--p-code}. You can pass this command
a specific filename, a directory, a \"wildcard\" to select a series of
similarly-named files, or a `.`{.markup--code .markup--p-code} to add
every untracked file in the current directory:

```
 {#9a66 .graf .graf--pre .graf-after--p name="9a66"}
# This will add only my_app.js to the repo:
```


```
 {#3a3c .graf .graf--pre .graf-after--pre name="3a3c"}
> git add my_app.js
```


```
 {#9174 .graf .graf--pre .graf-after--pre name="9174"}
# This will add all the files within ./objects:
```


```
 {#5e90 .graf .graf--pre .graf-after--pre name="5e90"}
> git add objects/
```


```
 {#01c3 .graf .graf--pre .graf-after--pre name="01c3"}
# This will add all the files in the current directory ending in `.js`:
```


```
 {#ebc4 .graf .graf--pre .graf-after--pre name="ebc4"}
> git add *.js
```


```
 {#8f3d .graf .graf--pre .graf-after--pre name="8f3d"}
# This will add everything in your current directory:
```


```
 {#5c8b .graf .graf--pre .graf-after--pre name="5c8b"}
> git add .
```


Adding a file (or files) moves them from Git's working directory to the
staging area. You can see what's been "staged" and what hasn't by using
`git status`{.markup--code .markup--p-code}:

![](https://cdn-images-1.medium.com/max/800/1*iiehU7FvC-JK90x6Fr0q6g.png) 

In this example, "Changes to be committed" is your staging area and
"Changes not staged for commit" is your working directory. Notice that
you also have "Untracked files", Git's way of reminding us that you may
have forgotten to `git add`{.markup--code .markup--p-code} a file to
your repo. Most Git commands will include a bit of help text in the
output, so always read the messages carefully before moving forward.
Thanks, Git!

Once you're happy with your files and have staged them, you'll use
`git commit`{.markup--code .markup--p-code} to push them into the commit
history. It\'s significantly more work to make changes after a commit,
so be sure your files are staged and exactly as you\'d like them before
running this command. Your default text editor will pop up, and you\'ll
be asked to enter a commit message for this group of changes.

**Heads Up:** You may find yourself in an unfamiliar place! The default
text editor for MacOS (and many variants of Linux) is called *Vim*. Vim
is a terminal-based text editor you'll discuss in the near future. It's
visually bare and may just look like terminal text to you! If this
happens, don't worry --- just type `:q`{.markup--code .markup--p-code}
and press your \"return\" key to e it.

You'll want to ensure that future commit messages open in a more
familiar editor. You can run the following commands in your terminal to
ensure that Visual Studio Code is your `git commit`  editor from now on:

```
 {#046a .graf .graf--pre .graf-after--p name="046a"}
> git config --global core.editor "code --wait"
```


```
 {#d024 .graf .graf--pre .graf-after--pre name="d024"}
> git config --global -e
```


If you experience any issues, you may be missing Visual Studio Code's
command line tools. You can find more details and some troubleshooting
tips on Microsoft's official [VS Code and macOS
documentation](https://code.visualstudio.com/docs/setup/mac#_launching-from-the-command-line) .

Once you close your editor, the commit will be added to your
repository's commit history. Use `git log`  to see this history at any time. This command will show
all the commits in your repository\'s history, beginning with the most
recent:

![](https://cdn-images-1.medium.com/max/800/1*z4zhzwjkwkfXMxKDDkNE9w.png) 

Like many Git commands, `git commit`{.markup--code .markup--p-code}
includes some helpful shorthand. If you need a rather short commit
message, you can use the `-m`{.markup--code .markup--p-code} flag to
include the message inline. Here\'s an example:

```
 {#dfda .graf .graf--pre .graf-after--p name="dfda"}
> git commit -m "Fix typo"
```


This will commit your changes with the message "Fix typo" and avoid
opening your default text editor. Remember the commit messages are how
you make your project's history friendly to humans, so don't use the
`-m`{.markup--code .markup--p-code} flag as an excuse to write lame
commit messages! A commit message should always explain why changes were
made in clear, concise language. It is also best practice to use
imperative voice in commit messages (i.e. use \"Fix typo\" instead of
\"Fixing the typo\" or \"Typo was fixed\").

### Branches and workflow {#5c20 .graf .graf--h3 .graf-after--p name="5c20"}

![](https://cdn-images-1.medium.com/max/800/0*7RBsBGvfmvj4T4jm.png) 
 
You've seen what a project looks like with a linear commit history, but
that's just scratching the surface of Git's utility. Let's explore a new
realm with *branches*. A branch is a separate timeline in Git, reserved
for its own changes. You'll use branches to make your own changes
independently of others. These branches can then be *merged* back into
the main branch at a later time.

Let's consider a common scenario: a school project. It's a lot of extra
hassle to schedule time together and argue over exactly what should be
done next! Instead, group members will often assign tasks amongst
themselves, work independently on their tasks, and reunite to bring it
all together as a final report. Git branches let us emulate this
workflow for code: you can make a copy of what's been done so far,
complete a task on your new branch, and merge that branch back into the
shared repository for others to use.

By default, Git repos begin on the `master`  branch. To create a new branch, use
`git branch <name-of-your-branch>`{.markup--code .markup--p-code}. This
will create a named reference to your current commit and let you add
commits without affecting the `master`{.markup--code .markup--p-code}
branch. Here\'s what a branch looks like:

![](https://cdn-images-1.medium.com/max/800/1*B67PLKs3Tr6HYLklyH6XnQ.png) 

Notice how your refs help to identify branches here:
`master`{.markup--code .markup--p-code} stays to itself and can have
changes added to it independently of your new branch
(`footer`{.markup--code .markup--p-code}). `HEAD` , Git\'s special ref, follows us around, so you know
that in the above diagram you\'re working on the `footer`  branch.

You can create a new branch or visit an existing branch in your
repository. This is especially helpful for returning the
`master`{.markup--code .markup--p-code} branch or for projects you\'ve
received from teammates. To open an existing branch, use
`git checkout                 <name-of-branch>` .

### Bringing it back together {#35bf .graf .graf--h3 .graf-after--p name="35bf"}

Once you're happy with the code in the branch you've been working on,
you'll likely want to integrate the code into the `master`  branch. You can do this via `git merge` . Merging will bring the changes in from another branch
and integrate them into yours. Here\'s an example workflow:

```
 {#2571 .graf .graf--pre .graf-after--p name="2571"}
> git branch my-chan es
```


```
 {#4417 .graf .graf--pre .graf-after--pre name="4417"}
> git add new-file.js
```


```
 {#bacf .graf .graf--pre .graf-after--pre name="bacf"}
> git commit -m "Add new file"
```


```
 {#4b0f .graf .graf--pre .graf-after--pre name="4b0f"}
> git checkout master
```


```
 {#19a7 .graf .graf--pre .graf-after--pre name="19a7"}
> git merge my-changes
```


Following these steps will integrate the commit from
`my-changes`{.markup--code .markup--p-code} over to
`master`{.markup--code .markup--p-code}. Boom! Now you have your
`new-file.js`{.markup--code .markup--p-code} on your default branch.

As you can imagine, branching can get *very* complicated. Your
repository's history may look more like a shrub than a beautiful tree!
You'll discuss advanced merging and other options in an upcoming lesson.

### Connect-W-Github {#506a .graf .graf--h3 .graf-after--p name="506a"}

Git can act as a great history tool and source code backup for your
local projects, but it can also help you work with a team! Git is
classified as a "DVCS", or "Distributed Version Control System". This
means it has built-in support for managing code both locally and from a
distant source.

You can refer to a repository source that's not local as a *remote*.
Your Git repository can have any number of remotes, but you'll usually
only have one. By default you'll refer to the primary remote of a repo
as the `origin`{.markup--code .markup--p-code}.

You can add a remote to an existing repository on your computer, or you
can retrieve a repository from a remote source. You can refer to this as
*cloning* the repo. Once you have a repository with a remote, you can
update your local code from the remote by *pulling* code down, and you
can *push* up your own code so others have access to it.

### I ❤️ Open Source {#e160 .graf .graf--h3 .graf-after--p name="e160"}

While a remote Git server can be run anywhere, there are a few places
online that have become industry standards for hosting remote Git
repositories. The best-known and most widely-used Git source is a
website called [GitHub](https://github.com/) . As the name suggests, GitHub is a global hub for Git
repositories. It's free to make a Github account, and you'll find
literally millions of public repositories you can browse.
 
GitHub takes a lot of work out of managing remote Git repositories.
Instead of having to manage your own server, GitHub provides managed
hosting and even includes some helpful graphical tools for complicated
tasks like deployment, branch merging, and code review.

Let's look at a typical workflow using Git and GitHub. Imagine it's your
first day on the job. How do you get access to your team's codebase? By
cloning the repository!

```
 {#db11 .graf .graf--pre .graf-after--p name="db11"}
> git clone https://github.com/your-team/your-codebase.git
```


Using the `git clone`{.markup--code .markup--p-code} command will create
a new folder in your current directory named after the repo you\'re
cloning (in this case, `your-codebase`{.markup--code .markup--p-code}).
Inside that folder will be a git repository of your very own, containing
the repo\'s entire commit history.

You'll likely start on the `master`{.markup--code .markup--p-code}
branch, but remember that this is the default branch and it\'s unlikely
you want to make changes to it. ***Since you\'re working on a team now,
it\'s important to think of how your changes to the repository might
affect others.***

The safest way to make changes is to create a new branch, make your
changes there, and then push your branch up to the remote repository for
review. You\'ll use the `git push`{.markup--code .markup--p-code}
command to do this. Let\'s look at an example:

```
 {#3758 .graf .graf--pre .graf-after--p name="3758"}
> git branch add-my-new-file
```


```
 {#9dbe .graf .graf--pre .graf-after--pre name="9dbe"}
> git add my-new-file.js
```


```
 {#5fc4 .graf .graf--pre .graf-after--pre name="5fc4"}
> git commit -m "Add new file"
```


```
 {#c20f .graf .graf--pre .graf-after--pre name="c20f"}
> git push -u origin add-my-new-file
```


Notice how you used the `-u`{.markup--code .markup--p-code} flag with
`git                 push`{.markup--code .markup--p-code}. This flag,
shorthand for `--set-upstream`{.markup--code .markup--p-code}, lets Git
know that you want your local branch to follow a remote branch. You\'ve
passed the same name in, so you\'ll now have two branches in your local
repository: `add-my-new-file`{.markup--code .markup--p-code}, which is
where your changes live after being committed, and
`origin/add-my-new-file`{.markup--code .markup--p-code}, which keeps up
with your remote branch and updates it after you use
`git                 push`{.markup--code .markup--p-code}.

**You only need to use the** `-u`{.markup--code .markup--p-code} **flag
the first time you push each new branch - Git will know what to do with
a simple** `git push`{.markup--code .markup--p-code} **from then on.**

You now know how to push your changes up, but what about getting the
changes your teammates have made? For this, you'll use
`git pull`{.markup--code .markup--p-code}. Pulling from the remote repo
will update all of your local branches with the code from each branch\'s
remote counterpart.

**Behind the scenes,** Git is running two separate commands:
`git fetch`{.markup--code .markup--p-code} and `git merge` .

![](https://cdn-images-1.medium.com/max/800/0*Y6QQHsNKuayJ_WxQ) 

Fetching retrieves the repository code and updates any remote tracking
branches in your local repo, and merge does just you\'ve already
explored: integrates changes into the local branches. Here\'s a graphic
to explain this a little better:

![](https://cdn-images-1.medium.com/max/800/1*eJVpPtvfIeuYqmql0XkQ8Q.png) 

It's important to remember to use `git pull`  often. A dynamic team may commit and push code many
times during the day, and it\'s easy to fall behind. The more often you
`pull`{.markup--code .markup--p-code}, the more certain you can be that
your own code is based on the \"latest and greatest\".

### Merging your code on GitHub {#780b .graf .graf--h3 .graf-after--p name="780b"}

If you're paying close attention, you may have noticed that there's a
missing step in your workflows so far: how do you get your code merged
into your default branch? This is done by a process called a *Pull
Request*.

A pull request (or "PR") is a feature specific to GitHub, not a feature
of Git. It's a safety net to prevent bugs, and it's a critical part of
the collaboration workflow. Here's a high-level of overview of how it
works:
 
You push your code up to GitHub in its own branch.

You open a pull request against a *base branch*.

GitHub creates a comparison page just for your code, detailing the
changes you've made.

Other members of the team can review your code for errors.

You make changes to your branch based on feedback and push the new
commits up.

The PR automatically updates with your changes.

Once everyone is satisfied, a repo maintainer on GitHub can merge your
branch.

Huzzah! Your code is in the main branch and ready for everyone else to
`git pull`{.markup--code .markup--p-code}.

You'll create and manage your pull requests via GitHub's web portal,
instead of the command line. You'll walk through the process of
creating, reviewing, and merging a pull request in an upcoming project.

### Browsing Your Git Repository {#a271 .graf .graf--h3 .graf-after--p name="a271"}

Repositories can feel intimidating at first, but it won't take you long
to navigate code like you own the place --- because you do! Let's
discuss a few tools native to Git that help us browse our changes over
time.

We'll be covering:

Comparing changes with `git diff`{.markup--code .markup--p-code}

Browsing through our code "checkpoints" with
`git checkout`{.markup--code .markup--p-code}

### Seeing changes in real time {#87de .graf .graf--h3 .graf-after--p name="87de"}

Git is all about change tracking, so it makes sense that it would
include a utility for visualizing a set of changes. We refer to a list
of differences between two files (or the same file over time) as a
*diff*, and we can use `git diff`{.markup--code .markup--p-code} to
visualize diffs in our repo!

When run with no extra options, `git diff`  will return any tracked changes in our working
directory since the last commit. **Tracked** is a key word here;
`git diff`{.markup--code .markup--p-code} won\'t show us changes to
files that haven\'t been i cluded in our repo via
`git add`{.markup--code .markup--p-code}. This is helpful for seeing
what you\'ve changed before committing! Here\'s an example of a small
change:

![](https://cdn-images-1.medium.com/max/800/1*zRnx1PxLRHNl9fYtBzxxsg.png) 

Let's break down some of the new syntax in this output.

The diff opens with some Git-specific data, including the branch/files
we're checking, and some unique hashes that Git uses to track each diff.
You can skip past this to get to the important bits.

`---`{.markup--code .markup--p-code} & `+++`  let us know that there are both additions and
subtractions in the file \"App.js\". A diff doesn\'t have a concept of
inline changes - it treats a single change as removing something old and
replacing it with something new.

`@@`{.markup--code .markup--p-code} lets us know that we\'re starting a
single \"chunk\" of the diff. A diff could have multiple chunks for a
single file (for example: if you made changes far apart, like the header
& footer). The numbers in between tell us how many lines we\'re seeing
and where they start. For example:
`@@ +1,3 -1,3                 @@`{.markup--code .markup--p-code} means
we\'ll see three lines of significant content, including both addition &
removal, beginning at line one.

In the code itself, lines that were removed are prefixed with a
`-`{.markup--code .markup--p-code} and lines that were added are
prefixed with a `+`{.markup--code .markup--p-code}. Remember that you
won\'t see these on the same lines. Even if you only changed a few
words, Git will still treat it like the whole line was replaced.

### Diff options {#66fd .graf .graf--h3 .graf-after--p name="66fd"}

Remember that, by default, `git diff`{.markup--code .markup--p-code}
compares the current working directory to the last commit. You can
compare the staging area instead of the working directory with
`git diff --staged`{.markup--code .markup--p-code}. This is another
great way to double-check your work before pushing up to a remote
branch.

You're also not limited to your current branch --- or even your current
commit! You can pass a base & target branch to compare, and you can use
some special characters to help you browse faster! Here are a few
examples:

```
 {#a289 .graf .graf--pre .graf-after--p name="a289"}
# See differences between the 'feature'
```


```
 {#de3a .graf .graf--pre .graf-after--pre name="de3a"}
# branch and the 'master' branch.
```


```
 {#2a35 .graf .graf--pre .graf-after--pre name="2a35"}
> git diff master feature
```


```
 {#f1ba .graf .graf--pre .graf-after--pre name="f1ba"}
# Compare two different commits
```


```
 {#1653 .graf .graf--pre .graf-after--pre name="1653"}
> git diff 1fc345a 2e3dff
```


```
 {#b17b .graf .graf--pre .graf-after--pre name="b17b"}
# Compare a specific file across separate commits
```


```
 {#7e51 .graf .graf--pre .graf-after--pre name="7e51"}
> git diff 1fc345a 2e3dff my-file.js
```


### Time travel {#3b99 .graf .graf--h3 .graf-after--pre name="3b99"}

`git                 diff`{.markup--code .markup--p-code} gives us the
opportunity to explore our code\'s current state, but what if we wanted
to see its state at a different point in time? We can use *checkout*!
`git checkout`{.markup--code .markup--p-code} lets us take control of
our `HEAD`{.markup--code .markup--p-code} to bounce around our timeline
as we please.

Remember that `HEAD`{.markup--code .markup--p-code} is a special Git
reference that usually follows the latest commit on our current branch.
We can use `git                 checkout`{.markup--code .markup--p-code}
to point our `HEAD`{.markup--code .markup--p-code} reference at a
different commit, letting us travel to any commit in our repository\'s
history. By reading the commit message and exploring the code at the
time of the commit, we can see not only what changed but also why it
changed! This can be great for debugging a problem or understanding how
an app evolved.

Let's look at a diagram to understand what `checkout`  does a little better:

![](https://cdn-images-1.medium.com/max/800/1*eqVSR_YD0kYQWHoLLbJs9Q.png) 

Notice that we haven't lost any commits, commit messages, or code
changes. Using `git checkout`{.markup--code .markup--p-code} is entirely
non-destructive.

To browse to a different commit, simply pass in a reference or hash for
the commit you'd like to explore.
`git                 checkout`{.markup--code .markup--p-code} also
supports a few special characters & reserved references:

```
 {#ae12 .graf .graf--pre .graf-after--p name="ae12"}
# You can checkout a branch name.
```


```
 {#169d .graf .graf--pre .graf-after--pre name="169d"}
# You'll be using this particular branch a lot!
```


```
 {#18f0 .graf .graf--pre .graf-after--pre name="18f0"}
> git checkout master
```


```
 {#cace .graf .graf--pre .graf-after--pre name="cace"}
# You can also use commit hashes directly
```


```
 {#f365 .graf .graf--pre .graf-after--pre name="f365"}
> git checkout 7d3e2f1
```


```
 {#d9eb .graf .graf--pre .graf-after--pre name="d9eb"}
# Using a hyphen instead of a hash will take
```


```
 {#7d70 .graf .graf--pre .graf-after--pre name="7d70"}
# you to the last branch you checked out
```


```
 {#68d7 .graf .graf--pre .graf-after--pre name="68d7"}
> git checkout -
```


```
 {#bceb .graf .graf--pre .graf-after--pre name="bceb"}
# You can use "HEAD~N" to move N commits prior
```


```
 {#34b1 .graf .graf--pre .graf-after--pre name="34b1"}
# to the current HEAD
```


```
 {#6004 .graf .graf--pre .graf-after--pre name="6004"}
> git checkout HEAD~3
```


Once you're done browsing the repo's history, you can use
`git checkout <your-branch-name>`{.markup--code .markup--p-code} to move
`HEAD`{.markup--code .markup--p-code} back to the front of the line
(your most recent commit). For example, in our diagram above, we could
use `git                 checkout master`{.markup--code .markup--p-code}
to take our `HEAD`{.markup--code .markup--p-code} reference back to
commit `42ffa1`{.markup--code .markup--p-code}.

### Why checkout? {#c1e8 .graf .graf--h3 .graf-after--p name="c1e8"}

Most of Git's power comes from a simple ability: viewing commits in the
past and understanding how they connect. This is why mastering the
`git checkout`{.markup--code .markup--p-code} command is so important:
it lets you think more like Git and gives you full freedom of navigation
without risking damage to the repo\'s contents.

That said, you'll likely use shortcuts like
`git checkout -`{.markup--code .markup--p-code} far more often than
specifically checking out commit hashes. Especially with the advent of
user-friendly tools like GitHub, it\'s much easier to visualize changes
outside the command line. We\'ll demonstrate browsing commit histories
on GitHub in a future lesson.

### Git 'Do-Overs': Reset & Rebase {#03f4 .graf .graf--h3 .graf-after--p name="03f4"}

![](https://cdn-images-1.medium.com/max/800/0*5yBLWI2EMAqgm01n.jpg) 

Git is designed to protect you --- not only from others, but also from
yourself! Of course, there are times where you'd like to exercise your
own judgement, even if it may not be the best thing to do. For this, Git
provides some helpful tools to change commits and "time travel".

Before we talk about these, a warning: **The commands in this lesson are
destructive!** If used improperly, you could lose work, damage a
teammate's branch, or even rewrite the history of your entire project.
You should exercise caution when using these on production code, and
don't hesitate to ask for help if you're unsure what a command might do.
 
After this lesson, you should:

Be able to roll back changes to particular commit.

Have an understanding of how rebasing affects your commit history.

Know when to rebase/reset and when **not** to.

### Resetting the past {#1750 .graf .graf--h3 .graf-after--p name="1750"}

Remember how our commits form a timeline? We can see the state of our
project at any point using `git                 checkout` . What if we want to travel back in time to a point
before we caused a new bug or chose a terrible font?
`git reset`{.markup--code .markup--p-code} is the answer!

> *Resetting* involves moving our `HEAD`{.markup--code
> .markup--blockquote-code} ref back to a different commit.

No matter how we reset, `HEAD`{.markup--code .markup--p-code} will move
with us. Unlike `git checkout`{.markup--code .markup--p-code}, this will
also destroy intermediate commits. We can use some additional flags to
determine how our code changes are handled.
 
### Soft resets {#6d40 .graf .graf--h3 .graf-after--p name="6d40"}

The least-dangerous reset of all is `git reset --soft` .

A soft reset will move our `HEAD`{.markup--code .markup--p-code} ref to
the commit we\'ve specified, and will leave any intermediate changes in
the staging area.

This means you won\'t lose any code, though you will lose commit
messages.

A practical example of when a soft reset would be handy is joining some
small commits into a larger one. We'll pretend we've been struggling
with "their", "there", and "they're" in our app. Here's our commit
history:Those commit messages aren't great: they're not very
explanatory, and they don't provide a lot of value in our commit
history. We'll fix them with a soft reset:

```
 {#832c .graf .graf--pre .graf-after--p name="832c"}
git reset --soft 9c5e2fc
```


This moves our `HEAD`{.markup--code .markup--p-code} ref back to our
first commit. Looking at our commit log now, we might be worried we\'ve
lost our changes:

![](https://cdn-images-1.medium.com/max/800/1*slbLxXdNbv3L7UsCHGdCIg.png) 

Our changes are still present in the staging area, ready to be
re-committed when we're ready! We can use `git commit`  to re-apply those changes to our commit history with a
new, more helpful message instead:

![](https://cdn-images-1.medium.com/max/800/1*UleGR-ijDRZw4UqbEbAk0Q.png) 

Notice that the new commit has a totally new hash. The old commit
messages (and their associated hashes) have been lost, but our code
changes are safe and sound!

### Risky Business: Mixed resets {#e62b .graf .graf--h3 .graf-after--p name="e62b"}

If soft resets are the safest form of `git reset` , mixed resets are the most average! This is exactly why
they\'re the default: running `git reset`{.markup--code .markup--p-code}
without adding a flag is the same as running
`git reset --mixed`{.markup--code .markup--p-code}.

In a mixed reset, your changes are preserved, but they're moved from the
commit history directly to the working directory. This means you'll have
to use `git add`{.markup--code .markup--p-code} to choose everything you
want in future commits.

Mixed resets are a good option when you want to alter a change in a
previous commit. Let's use a mixed reset with our "their", "there",
"they're" example again.

We'll start with "they're":
 
![](https://cdn-images-1.medium.com/max/800/1*I71W4NpNdNz8NPr7i2tcAQ.png) 

Notice again that you don't lose your code with a mixed reset, but you
do lose your commit messages & hashes. The difference between
`--soft`{.markup--code .markup--p-code} and `--mixed`  comes down to whether you\'ll be keeping the code
exactly the same before re-committing it or making changes.

### Hard resets {#dedd .graf .graf--h3 .graf-after--p name="dedd"}

Hard resets are the most dangerous type of reset in Git. Hard resets
adjust your `HEAD`{.markup--code .markup--p-code} ref and *totally
destroy any interim code changes*. Poof. Gone forever.

There are very few good uses for a hard reset, but one is to get
yourself out of a tight spot. Let's say you've made a few changes to
your repository but you now realize those changes were unnecessary.
You'd like to move back in time so that your code looks exactly as it
did before any changes were made.
`git reset                 --hard`{.markup--code .markup--p-code} can
take you there.

It's our last round with "their", "there", and "they're". We've tried it
all three ways and decided we don't need to use that word at all! Let's
walk through a hard reset to get rid of our changes.

We'll start in the same place we began for our soft reset:

![](https://cdn-images-1.medium.com/max/800/1*PHWuTBoZeQ1L2hgRdXu6fg.png) 

It turns out that we'll be using a video on our homepage and don't need
text at all! Let's step back in time:

```
 {#f863 .graf .graf--pre .graf-after--p name="f863"}
git reset --hard 9c5e2fc
```


Our Git log output is much simpler now:

![](https://cdn-images-1.medium.com/max/800/1*1NovgUyM_ed7h5MozcBY-g.png) 

It's empty --- no changes in your working directory and no changes in
your staging area. This is major difference between a hard reset and a
soft/mixed reset: you will lose *all your changes* back to the commit
you've reset to.

If your teammate came rushing in to tell you that the boss has changed
their mind and wants that homepage text after all, you're going to be
re-doing all that work! Be very confident that the changes you're losing
are unimportant before embarking on a hard reset.

### Rebase: 'Alt-time travel' {#6e14 .graf .graf--h3 .graf-after--p name="6e14"}

![](https://cdn-images-1.medium.com/max/800/0*C_Y5Tr_o5BAS1l-3.jpeg) 

Sometimes we want to change more than a few commits on a linear
timeline. What if we want to move multiple commits across branches?
`git rebase`{.markup--code .markup--p-code} is the tool for us!

*Rebasing* involves changing your current branch's base branch. We might
do this if we accidentally started our branch from the wrong commit or
if we'd like to incorporate changes from another branch into our own.

> Isn't that the same as git merge?

`git merge`{.markup--code .markup--p-code}?\" In almost all cases,
you\'d be right. Rebasing is a dangerous process that effectively
rewrites history.

### I see you too like to live life Dangerously... tell me about Rebase.. {#d09c .graf .graf--h3 .graf-after--p name="d09c"}

Let's look at a situation where we might be tempted to rebase. We've
added a couple commits to a feature branch while other team members have
been merging their code into the `master`{.markup--code .markup--p-code}
branch. Once we\'re ready to merge our own branch, we probably want to
follow a tried-and-true procedure:

```
 {#38c4 .graf .graf--pre .graf-after--p name="38c4"}
> git pull origin master
```


This will fetch our remote `master`{.markup--code .markup--p-code}
branch and merge its changes into our own feature branch, so it\'s safe
to pull request or `git push`{.markup--code .markup--p-code}. However,
every time we do that, a merge commit will be created! This can make a
big mess of our Git commit history, especially if lots of people are
making small changes.

We can use `git rebase`{.markup--code .markup--p-code} to move o r
changes silently onto the latest version of `master` . Here\'s what the `git log`  history of our two example branches looks like:

![](https://cdn-images-1.medium.com/max/800/1*pzCQZEyJD3-NHcNRCTwxiQ.png) 

Notice that both branches start at `9c5e2fc` . That\'s our common ancestor commit, and is where
`git merge`{.markup--code .markup--p-code} would start stitching these
branches together! We\'re going to avoid that entirely with a rebase.
We\'ll run this command while we have
`working-on-the-header`{.markup--code .markup--p-code} checked out:

```
 {#f06c .graf .graf--pre .graf-after--p name="f06c"}
git rebase master
```


**Here's our new commit history:**

![](https://cdn-images-1.medium.com/max/800/1*1cH8OazC0L0pxZzfCdwXog.png) 

![](https://cdn-images-1.medium.com/max/800/1*GswbfYSlQ3q0VeCdv29cww.png) 

### `working-on-the-header` {#2819 .graf .graf--h3 .graf-after--figure name="2819"}

See how we changed the color of our commits after the rebase? Take a
close look at the commit history changes as well. Even though our
commits have the same content, they have a new hash assigned, meaning
they're entirely new commits! This is what we mean by "rewriting
history": we've actually changed how Git refers to these changes now.

### "Golden Rule of Git" {#d544 .graf .graf--h3 .graf--startsWithDoubleQuote .graf-after--p name="d544"}

These tools can all feel pretty nifty, but be very wary of using them
too much! While they can augment your Git skills from good to great,
they can also have catastrophic side effects.

There's a "Golden Rule of Git" you should know that directly relates to
both `git reset`{.markup--code .markup--p-code} and
`git rebase`{.markup--code .markup--p-code}:

***Never change the history of a branch that's shared with others.***

That's it! It's simple and to the point. If you're resetting or rebasing
your own code and you make a mistake, your worst case scenario is losing
your own changes. However, if you start changing the history of code
that others have contributed or are relying on, your accidental loss
could affect many others!

### How to check your Git configuration: {#68ca .graf .graf--h3 .graf-after--p name="68ca"}

The command below returns a list of information about your git
configuration including user name and email:
 
```
 {#9580 .graf .graf--pre .graf-after--p name="9580"}
git config -l
```


### How to setup your Git username: {#8565 .graf .graf--h3 .graf-after--pre name="8565"}

With the command below you can configure your user name:

```
 {#b5f3 .graf .graf--pre .graf-after--p name="b5f3"}
git config --global user.name "Fabio"
```


### How to setup your Git user email: {#aceb .graf .graf--h3 .graf-after--pre name="aceb"}

This command lets you setup the user email address you'll use in your
commits.

```
 {#5f95 .graf .graf--pre .graf-after--p name="5f95"}
git config --global user.email "signups@fabiopacifici.com"
```


### How to cache your login credentials in Git: {#3d19 .graf .graf--h3 .graf-after--pre name="3d19"}

You can store login credentials in the cache so you don't have to type
them in each time. Just use this command:

```
 {#dc49 .graf .graf--pre .graf-after--p name="dc49"}
git config --global credential.helper cache
```


### How to initialize a Git repo: {#2ac7 .graf .graf--h3 .graf-after--pre name="2ac7"}

Everything starts from here. The first step is to initialize a new Git
repo locally in your project root. You can do so with the command below:
 
```
 {#5245 .graf .graf--pre .graf-after--p name="5245"}
git init
```


### How to add a file to the staging area in Git: {#f8a2 .graf .graf--h3 .graf-after--pre name="f8a2"}

The command below will add a file to the staging area. Just replace
`filename_here`{.markup--code .markup--p-code} with the name of the file
you want to add to the staging area. 

```
 {#d929 .graf .graf--pre .graf-after--p name="d929"}
git add filename_here
```


### How to add all files in the staging area in Git {#cbde .graf .graf--h3 .graf-after--pre name="cbde"}

If you want to add all files in your project to the staging area, you
can use a wildcard `.`{.mar up--code .markup--p-code} and every file
will be added for you.

```
 {#c02b .graf .graf--pre .graf-after--p name="c02b"}
git add .
```


### How to add only certain files to the staging area in Git {#76cf .graf .graf--h3 .graf-after--pre name="76cf"}

With the asterisk in the command below, you  an add all files starting
with 'fil' in the staging area.

```
 {#2108 .graf .graf--pre .graf-after--p name="2108"}
git add fil*
```


### How to check a repository's status in Git: {#971e .graf .graf--h3 .graf-after--pre name="971e"}

This command will show the status of the current repository including
staged, unstaged, and untracked files. 

```
 {#6540 .graf .graf--pre .graf-after--p name="6540"}
git status 
```


### How to commit changes in the editor in Git: {#4e96 .graf .graf--h3 .graf-after--pre name="4e96"}

This command will open a text editor in the terminal where you can write
a full commit message.
 
A commit message is made up of a short summary of changes, an empty
line, and a full description of the changes after it.

```
 {#4e89 .graf .graf--pre .graf-after--p name="4e89"}
git commit
```


### How to commit changes with a message in Git: {#ba32 .graf .graf--h3 .graf-after--pre name="ba32"}
 
You can add a commit message without opening the editor. This command
lets you only specify a short summary for your commit message.

```
 {#43f0 .graf .graf--pre .graf-after--p name="43f0"}
git commit -m "your commit message here"
```


### How to commit changes (and skip the staging area) in Git: {#1039 .graf .graf--h3 .graf-after--pre name="1039"}
 
You can add and commit tracked files with a single command by using the
-a and -m options.

```
 {#0b95 .graf .graf--pre .graf-after--p name="0b95"}
git commit -a -m"your commit message here"
```


### How to see your commit history in Git: {#a3fc .graf .graf--h3 .graf-after--pre name="a3fc"}

This command shows the commit history for the current repository:

```
 {#d0ca .graf .graf--pre .graf-after--p  ame="d0ca"}
git log
```


### How to see your commit history including changes in Git: {#cb72 .graf .graf--h3 .graf-after--pre name="cb72"}

This command shows the commit's history including all files and their
changes:

```
 {#fe19 .graf .graf--pre .graf-after--p name="fe19"} 
git log -p
```


### How to see a specific commit in Git: {#3ff3 .graf .graf--h3 .graf-after--pre name="3ff3"}

This command shows a specific commit.

Replace commit-id with the id of the commit that you find in the commit
log after the word commit. 

```
 {#8aec .graf .graf--pre .graf-after--p name="8aec"}
git show commit-id
```


### How to see log stats in Git: {#e542 .graf .graf--h3 .graf-after--pre name="e542"}

This command will cause the Git log to show some statis ics about the
changes in each commit, including line(s) changed and file names.

```
 {#c22e .graf .graf--pre .graf-after--p name="c22e"}
git log --stat
```


### How to see changes made before committing them using "diff" in Git: {#49bc .graf .graf--h3 .graf-after--pre name="49bc"}

You can pass a file as a parameter  o only see changes on a specific
file.\
`git diff`{.markup--code .markup--p-code} shows only unstaged changes by
default.

We can call diff with the `--staged`{.markup--code .markup--p-code} flag
to see any staged changes.

```
 {#a6f9 .graf .graf--pre .graf-after--p name="a6f9"}
git diff
git diff all_checks.py
git diff --staged 
```


### How to see changes using "git add -p": {#f2a6 .graf .graf--h3 .graf-after--pre name="f2a6"}

This command opens a prompt and asks if you want to stage changes or
not, and includes other options.

```
 {#0875 .graf .graf--pre .graf-after--p name="0875"}
git add -p 
```


### How to remove tracked files from the current working tree in Git: {#8cd7 .graf .graf--h3 .graf-after--pre name="8cd7"}

This command expects a commit message to explain why the file was
deleted.

```
 {#0323 .graf .graf--pre .graf-after--p name="0323"}
git rm filename
```


### How to rename files in Git: {#5577 .graf .graf--h3 .graf-after--pre name="5577"}

This command stages the changes, then it expects a commit message.

```
 {#8761 .graf .graf--pre .graf-aft r--p name="8761"}
git mv oldfile newfile
```


### How to ignore files in Git: {#3cef .graf .graf--h3 .graf-after--pre name="3cef"}

Create a `.gitignore`{.markup--code .markup--p-code} file and commit it.

### How to revert unstaged changes in Git: {#44f7 .graf .graf--h3 .graf-after--p name="44f7"}
 
```
 {#19a9 .graf .graf--pre .graf-after--h3 name="19a9"}
git checkout filename
```


### How to revert staged changes in Git: {#4012 .graf .graf--h3 .graf-after--pre name="4012"}

You can use the -p option flag to specify the changes you want to reset.

```
 {#6e6f .graf .graf--pr  .graf-after--p name="6e6f"}
git reset HEAD filename
git reset HEAD -p
```


### How to amend the most recent commit in Git: {#9c64 .graf .graf--h3 .graf-after--pre name="9c64"}

`git                 commit --amend`{.markup--code .markup--p-code}
allows you to modify and a d changes to the most recent commit.

```
 {#df 0 .graf .graf--pre .graf-after--p name="dfe0"}
git commit --amend
```
 

!!Note!!: fixing up a local commit with amend is great and you can push
it to a shared repository after you've fixed it. But you should avoid
amending commits that have already been made public.

### How to rollback the last commit in Git: {#32d2 .graf .graf--h3 .graf-after--p name="32d2"}

`git                 revert`{.markup--code .markup--p-code} will create
a new commit that is the opposite of everything in the given commit.\
We can revert the latest commit by using the head alias like this:

```
 {#12bb .graf .graf--pre .graf-after--p name="12bb"}
git revert HEAD
```

 
### How to rollback an old commit in Git: {#09b8 .graf .graf--h3 .graf-after--pre name="09b8"}

You can revert an old commit using its commit id. This opens the editor
so you can add a commit message.

```
 {#c9f3 .graf .graf--pre .graf-after--p name="c9f3"}
git revert comit_id_here
```


### How to create a new branch in Git: {#d0c6 .graf .graf--h3 .graf-after--pre name="d0c6"}

By default, you have one branch, the main branch. With this command, you
can create a new branch. Git won't swi ch to it automatically --- you
will need to do it manually with the next command.

```
 {#66e4 .graf .graf--pre .graf-after--p name="66e4"}
git branch branch_name
```


### How to switch to a newly created branch in Git: {#afb4 .graf .graf--h3 .graf-after--pre name="afb4"}

When you want to use a different or a newly created branch you can use
this command: 

```
 {#6a87 .graf .graf--pre .graf-after--p name="6a87"}
git checkout branch_name
```


### How to list branches in Git: {#9cc6 .graf .graf--h3 .graf-after--pre name="9cc6"}

You can view all created branches using the `git branch`  command. It will show a list of all branches and mark
the current branch with an asteri k and highlight it in green.

```
 {#cfff .graf .graf--pre .graf-after--p name="cfff"}
git branch
```


### How to create a branch in Git and switch to it immediately: {#6645 .graf .graf--h3 .graf-after--pre name="6645"}

In a single command, you can create and switch to a new branch right
away.
 
```
 {#2e86 .graf .graf--pre .graf-after--p name="2e86"}
git checkout -b branch_name
```


### How to delete a branch in Git: {#e731 .graf .graf--h3 .graf-after--pre name="e731"}

When you are done working with a branch and have merged it, you can
delete it using the command below:
 
```
 {#0198 .graf .graf--pre .graf-after--p name="0198"}
git branch -d branch_name
```


### How to merge two branches in Git: {#1398 .graf .graf--h3 .graf-after--pre name="1398"}

To merge the history of the branch you are currently in with the
`branch_name`{.markup--code .markup--p-code}, you will need to use the
command below:

```
 {#b8e1 .graf .graf--pre .graf-after--p name="b8e1"}
git merge branch_name
```


### How to show the commit log as a graph in Git: {#3765 .graf .graf--h3 .graf-after--pre name="3765"}

We can use `--graph`{.markup--code .markup--p-code} to get the commit
log to show as a graph. Also,\
`--oneline`{.markup--code .ma kup--p-code} will limit commit messages to
a single line.

```
 {#e3de .graf .graf--pre .graf-after--p name="e3de"}
git log --graph --oneline
```


### How to show the commit log as a graph of all branches in Git: {#d7b2 .graf .graf--h3 .graf-after--pre name="d7b2"}

Does the same as the command abo e, but for all branches.

```
 {#f481 .graf .graf--pre .graf-after--p name="f481"}
git log --graph --online --all
```


### How to abort a conflicting merge in Git: {#1569 .graf .graf--h3 .graf-after--pre name="1569"}

If you want to throw a merge away and start over, you can run the
following command:
 
```
 {#1690 .graf .graf--pre .graf-after--p name="1690"}
git merge --abort
```


### How to add a remote repository in Git {#21fa .graf .graf--h3 .graf-after--pre name="21fa"}

This command adds a remote repository to your local repository (just
replace `https://repo_here`{.markup--code .markup--p-code} with your
remote repo URL).

```
 {#1cec .graf .graf--pre .graf-after--p name="1cec"} 
git add remote https://repo_here
```


### How to see remote URLs in Git: {#b03d .graf .graf--h3 .graf-after--pre name="b03d"}

You can see all remote repositories for your local repository with this
command:
 
```
 {#80b3 .graf .graf--pre .graf-after--p name="80b3"}
git remote -v
```


### How to get more info about a remote repo in Git: {#1874 .graf .graf--h3 .graf-after--pre name="1874"}

Just replace `origin`{.markup--code .markup--p-code} with the name of
the remote obtained by\
running the git remote -v command. 

```
 {#ed30 .graf .graf--pre .graf-after--p name="ed30"}
git remote show origin
```


### How to push changes to a remote repo in Git: {#4979 .graf .graf--h3 .graf-after--pre name="4979"}

When all your work is ready to be saved on a remote repository, you can
push all changes using the command below:
 
```
 {#70e0 .graf .graf--pre .graf-after--p name="70e0"}
git push
```


### How to pull changes from a remote repo in Git: {#2ebb .graf .graf--h3 .graf-after--pre name="2ebb"}

If other team members are working on your repository, you can retrieve
the latest changes made to the remote repository with the command below:
 
```
 {#1c6a .graf .graf--pre .graf-after--p name="1c6a"}
git pull
```


### How to check remote branches that Git is tracking: {#8ebf .graf .graf--h3 .graf-after--pre name="8ebf"}

This command shows the name of all remote branches that Git is tracking
for the current repository:

```
 {#91c7 .graf .graf--pre .graf-after--p  ame="91c7"}
git branch -r
```


### How to fetch remote repo changes in Git: {#4412 .graf .graf--h3 .graf-after--pre name="4412"}

This command will download the changes from a remote repo but will not
perform a merge on your local branch (as git pull does that instead).

```
 {#fa57 .graf .graf--pre .graf-after--p na e="fa57"}
git fetch
```


### How to check the current commits log of a remote repo in Git {#a2dc .graf .graf--h3 .graf-after--pre name="a2dc"}

Commit after commit, Git builds up a log. You can find out the remote
repository log by using this command:

```
 {#72bd .graf .graf--pre .graf-after--p name="72bd"}
git log origin/main
```


### How to merge a remote repo with your local repo in Git: {#2bbd .graf .graf--h3 .graf-after--pre name="2bbd"}

If the remote repository has changes you want to merge with your local,
then this command will do that for you:

```
 {#2bfc .graf .graf--pre .graf-after -p name="2bfc"}
git merge origin/main
```


### How to get the contents of remote branches in Git without automatically merging: {#4fa8 .graf .graf--h3 .graf-after--pre name="4fa8"}

This lets you update the remote without merging any content into the\
local branches. You can call git merge or git checkout to do the merge.

```
 {#a44e .graf .graf--pre .graf-after--p name="a44e"} 
git remote update
```


### How to push a new branch to a remote repo in Git: {#cd3b .graf .graf--h3 .graf-after--pre name="cd3b"}

If you want to push a branch to a remote repository you can use the
command below. Just remember to add -u to create the branch upstream:

```
 {#621f .graf .graf--pre .graf-after--p name="621f" 
git push -u origin branch_name
```


### How to remove a remote branch in Git: {#e3c3 .graf .graf--h3 .graf-after--pre name="e3c3"}

If you no longer need a remote branch you can remove it using the
command below:

```
 {#1844 .graf .graf--pre .graf-after--p name="1844"}
git push --delete origin branch_name_here
```


### How to use Git rebase: {#a7d9 .graf .graf--h3 .graf-after--pre name="a7d9"}

You can transfer completed work from one branch to another using
`git rebase`{.markup--code .markup--p-code}.

```
 {#683d .graf .graf--pre .graf-after--p name= 683d"}
git rebase branch_name_here
```


Git Rebase can get really messy if you don't do it properly. Before
using this command I suggest that you re-read the official documentation
[here](https://git-scm.com/book/it/v2/Git-Branching-Rebasing) 

### How to run rebase interactively  n Git: {#0371 .graf .graf--h3 .graf-after--p name="0371"}

You can run git rebase interactively using the -i flag.\
It will open the editor and present a set of commands you can use.

```
 {#369c .graf .graf--pre .graf-after--p name="369c"}
git rebase -i master
# p, pick = use commit
# r, reword = use commit, but edit the commit message
# e, edit = use co mit, but stop for amending
# s, squash = use commit, but meld into previous commit
# f, fixup = like "squash", but discard this commit's log message
# x, exec = run command (the rest of the line) using shell
# d, drop = remove commit
```


### How to force a push request in Git: {#bf02 .graf .graf--h3 .graf-after--pre name="bf02"}

This command will force a push request. This is usually fine for pull
request branches because nobody else should have cloned them.\
But this isn't something that you want to do with public repos.

```
 {#794a .graf .graf--pre .graf-after--p .graf--trailing name="794a"}
git push -f 
```





 ="58e6"}
 

------------------------------------------------------------------------


  
### Git Alias Overview {#5396 .graf .graf--h3 .graf--leading name="5396"}

It is important to note that there is no direct
`git alias`{.markup--code .markup--p-code} command. Aliases are created
through the use of the `git config`{.markup--code .markup--p-code}
command and the Git configuration files. As with other configuration
values, aliases can be created in a local or global scope.

To better understand Git aliases let us create some examples.

```
 {#3521 .graf .graf--pre .graf-after--p name="3521"}
$ git config --global alias.co checkout
$ git config --global alias.br branch
$ git config --global alias.ci commit
$ git config --global alias.st status
```


The previous code example creates globally stored shortcuts for common
git commands. Creating the aliases will not modify the source commands.
So `git checkout`{.markup--code .markup--p-code} will still be available
even though we now have the `git co`{.markup--code .markup--p-code}
alias. These aliases were created with the `--global`  flag which means they will be stored in Git\'s global
operating system level configuration file. On linux systems, the global
 `/.gitconfig`{.markup--code .markup--p-code}.

```
 {#8247 .graf .graf--pre .graf-after--p name="8247"}
[alias]
        co = checkout
 
            ci = commit
            st = status
```


This demonstrates that the aliases are now equivalent to the source
commands.

### Usage {#fcd7 .graf .graf--h3 .graf-after--p name="fcd7"}

Git aliasing is enabled through the use of `git config` , For command-line option and usage examples please
review the `git config               `{.markup--code .markup--p-code
.u-paddingRight0 .u-marginRight0}documentation.

### Examples {#3c04 .graf .graf--h3 .graf-after--p name="3c04"}

### Using aliases to create new Git commands {#7549 .graf .graf--h3 .graf-after--h3 name="7549"}

A common Git pattern is to remove recently added files from the staging
area. This is achieved by leveraging options to the
`git reset`{.markup--code .markup--p-code} command. A new alias can be
created to encapsulate this behavior and create a new
alias-command-keyword which is easy to remember:

```
 {#fbdb .graf .graf--pre .graf-after--p name="fbdb"}
git config --global alias.unstage 'reset HEAD --'
```


The preceding code example creates a new alias `unstage` . This now enables the invocation of
`git unstage. git unstage`{.markup--code .markup--p-code} which will
perform a reset on the staging area. This makes the following two
commands equivalent.

```
 {#bc61 .graf .graf--pre .graf-after--p name="bc61"}
git unstage fileA
$ git reset HEAD -- fileA
```


### My Default Gitignore: {#d4b2 .graf .graf--h3 .graf-after--pre name="d4b2"}


 

 ="f272"}
 

------------------------------------------------------------------------


  
### Troubleshooting Git {#bcf2 .graf .graf--h3 .graf--leading name="bcf2"}

![](https://cdn-images-1.medium.com/max/800/1*cFb6UcCGmIcNU1-woncSTA.png) 

### Here are some tips on troubleshooting and resolving issues with Git. {#f6e4 .graf .graf--h3 .graf-after--figure name="f6e4"}

### Broken pipe errors on `git push` {#1784 .graf .graf--h3 .graf-after--h3 name="1784"}

'Broken pipe' errors can occur when attempting to push to a remote
repository. When pushing you usually see:

```
 {#f1d0 .graf .graf--pre .graf-after--p name="f1d0"}
Write failed: Broken pipe
fatal: The remote end hung up unexpectedly
```


To fix this issue, here are some possible solutions.

### Increase the POST buffer size in Git {#8928 .graf .graf--h3 .graf-after--p name="8928"}

**If you're using Git over HTTP instead of SSH**, you can try increasing
the POST buffer size in Git's configuration.

Example of an error during a clone:
`fatal: pack has bad object at offset XXXXXXXXX: inflate returned                 -5` 

 
```
 {#cb06 .graf .graf--pre .graf-after--p name="cb06"}
git config http.postBuffer 52428800
```
 

The value is specified in byte , so in the above case the buffer size
has been set to 50MB. The default is 1MB.
 
### Check your SSH configuration {#92cf .graf .graf--h3 .graf-after--p name="92cf"}

**If pushing over SSH**, first check your SSH configuration as 'Broken
pipe' errors can sometimes be caused by underlying issues with SSH (such
as authentication). Make sure that SSH is correctly configured by
following the instructions in the [SSH
troubleshooting](https://docs.gitlab.com/ee/ssh/README.html#troubleshooting-ssh-connections)  documentation.

If you're a GitLab administrator and have access to the server, you can
also prevent session timeouts by configuring SSH
`keep alive`{.markup--code .markup--p-code} either on the client or on
the server.

Configuring both the client and the server is unnecessary.

**To configure SSH on the client side**:

-   [On UNIX, edit `~/.ssh/config`{.markup--code .markup--li-code}
    (create the file if it doesn't exist) and add or edit:]{#7ae1}
-   [`Host your-gitlab-instance-url.com ServerAliveInterval 60                   ServerAliveCountMax 5`{.markup--code
    .markup--li-code}]{#542f}
-   [On Windows, if you are using PuTTY, go to your session properties,
    then navigate to "Connection" and under "Sending of null packets to
    keep session active", set
    `Seconds between keepalives (0 to turn                   off)`{.markup--code
    .markup--li-code} to `60`{.markup--code .markup--li-code}.]{#74d7}

**To configure SSH on the server side**, edit
`/etc/ssh/sshd_config`{.markup--code .markup--p-code} and add:

```
 {#80e6 .graf .graf--pre .graf-after--p name="80e6"}
ClientAliveInterval 60
ClientAliveCountMax 5
```


### Running a `git repack` {#5b83 .graf .graf--h3 .graf-after--pre name="5b83"}

**If 'pack-objects' type errors are also being displayed**, you can try
to run a `git repack`{.markup--code .markup--p-code} before attempting
to push to the remote repository again:

```
 {#79a2 .graf .graf--pre .graf-after--p name="79a2"}
git repack
git push
```


### Upgrade your Git client {#2e09 .graf .graf--h3 .graf-after--pre name="2e09"}

In case you're running an older version of Git (\< 2.9), consider
upgrading to \>= 2.9 (see [Broken pipe when pushing to Git
repository](https://stackoverflow.com/questions/19120120/broken-pipe-when-pushing-to-git-repository/36971469#36971469) ).

### `ssh_exchange_identification` error {#5ca7 .graf .graf--h3 .graf-after--p name="5ca7"}

Users may experience the following error when attempting to push or pull
using Git over SSH:

```
 {#9acf .graf .graf--pre .graf-after--p name="9acf"}
Please make sure you have the correct access rights
and the repository exists.
...
ssh_exchange_ident fication: read: Connection reset by peer
fatal: Could not read from remote repository.
```


or

```
 {#cfaa .graf .graf--pre .graf-after--p name="cfaa"}
ssh_exchange_identification: Connection closed by remote host
fatal: The remote end hung up unexpectedly
```


This error usually i dicates that SSH daemon's
`MaxStartups`{.markup--code .markup--p-code} value is throttling SSH
connections. This setting specifies the maximum number of concurrent,
unauthenticated connections to the SSH daemon. This affects users with
proper authentication credentials (SSH keys) because every connection is
'unauthenticated' in the beginning. The default value is
`10`{.markup--code .markup--p-code}.

Increase `MaxStartups`{.markup--code .markup--p-code} on the GitLab
server by adding or modifying the value in
`/etc/ssh/sshd_config`{.markup--code .markup--p-code}:

```
 {#960c .graf .graf--pre .graf-after--p name="960c"}
MaxStartups 100:30:200
```


`100:30:200`{.markup--code .markup--p-code} means up to 100 SSH sessions
are allowed without restriction, after which 30% of connections are
dropped until reaching an absolute maximum of 200.

Once configured, restart the SSH daemon for the change to take effect.

```
 {#7a71 .graf .graf--pre .graf-after--p name="7a71"}
# Debian/Ubuntu
sudo systemctl restart ssh
```


```
 {#750a .graf .graf--pre .graf-after--pre name="750a"}
# CentOS/RHEL
sudo service sshd restart
```


### Timeout during `git push` / `git pull` {#39f6 .graf .graf--h3 .graf-after--pre name="39f6"}

If pulling/pushing from/to your repository ends up taking more than 50
seconds, a timeout is issued. It contains a log of the number of
operations performed and their respective timings, like the example
below:

```
 {#eec1 .graf .graf--pre .graf-after--p name="eec1"}
remote: Running checks for branch: master
remote: Scanning for LFS objects... (153ms)
remote: Calculating new repository size... (cancelled after 729ms)
```


This could be used to further investigate what operation is performing
poorly and provide GitLab with more information on how to improve the
service.

### `git                 clone` over HTTP fails with `transfer closed with                 outstanding read data remaining` error {#3e5c .graf .graf--h3 .graf-after--p name="3e5c"}

If the buffer size is lower than what is allowed in the request, the
action fails with an error similar to the one below:

```
 {#dfb3 .graf .graf--pre .graf-after--p name="dfb3"}
error: RPC failed; curl 18 transfer closed with outstanding read data remaining
fatal: The remote end hung up unexpectedly
fatal: early EOF
fatal: index-pack failed
```
 

This can be fixed by increasing the existing
`http.postBuffer`{.markup--code .markup--p-code} value to one greater
than the repository size. For example, if `git clone`  fails when cloning a 500M repository, you should set
`http.postBuffer`{.markup--code .markup--p-code} to
`524288000`{.markup--code .markup--p-code}. That setting ensures the
request only starts buffering after the first 524288000 bytes.

The default value of `http.postBuffer`{.markup--code .markup--p-code}, 1
MiB, is applied if the setting is not configured.

```
 {#b3f0 .graf .graf--pre .graf-after--p .graf--trailing name="b3f0"}
git config http.postBuffer 524288000
```





 

------------------------------------------------------------------------


  
### **Further Reading:** {#cad1 .graf .graf--h3 .graf--leading name="cad1"}

#### If you found this guide helpful feel free to checkout my GitHub/gists where I host similar content: {#c061 .graf .graf--h4 .graf-after--figure name="c061"}

{#1c2f .graf .graf--mixtapeEmbed .graf-after--h4 name="1c2f"}
[**bgoonz\'s gists**\
*There are tons of learning material on the Web The Front-End Checklist
is an exhaustive list of all elements you
need...*gist.github.com](https://gist.github.com/bgoonz "https://gist.github.com/bgoonz") [](https://gist.github.com/bgoonz) 


{#3585 .graf .graf--mixtapeEmbed .graf-after--mixtapeEmbed name="3585"}
[**bgoonz --- Overview**\
*Web Developer, Electrical Engineer JavaScript \| CSS \| Bootstrap \|
Python \| React \| Node.js \| Express \|
Sequelize...*github.com](https://github.com/bgoonz "https://github.com/bgoonz") [](https://github.com/bgoonz) 


Or Checkout my personal Resource Site:

(Under construction... may be broken at any time)

 
[**a/A-Student-Resources**\
*Edit
description*goofy-euclid-1cd736.netlify.app]( https://web-dev-resource-hub.netlify.app/ " https://web-dev-resource-hub.netlify.app/") []( https://web-dev-resource-hub.netlify.app/){.js-mixtapeImage 
 



 
By [Bryan Guner](https://medium.com/@bryanguner)  on
[March 12, 2021](https://medium.com/p/b50c9c01a107).


  