# Edit Commit Message

Navigate to directory with repository containing a commit message to be edited

Type the command below and press Enter

```git
git commit --amend
```

Choose option Edit by pressing **E** and **Enter**

The above command changes the command line into **Vim** mode

Press **i** to enter insert mode and **edit** the commit message

Save edited commit message and exit vim mode

Exit vim by pressing **Esc** and typing **:x**

Push changes to the remote repository using the command below

```git
git push --force-with-lease origin BRANCH-NAME
```

> **push --force-with-lease** is used command to force push over the old commit.
