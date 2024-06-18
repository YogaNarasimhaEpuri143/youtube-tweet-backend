# Youtube-Tweet Backend

Deployed Link - [youtube-tweet-backend]()

# Useful Points

1. git init
2. git branch -M main                       - changing Branch name to main from master (following github standards)
3. git add
4. git commit -m "message here"
5. git remote add origin "github repo link" - telling Git where to find the remote repository. (remote location)
6. git push -u origin "branch name"         - setting upstream initially.
7. git push origin test:work                - test branch in local to work branch in remote.
8. git pull origin "branch name"            - Merge the code from remote branch to current active local branch.
9. git checkout local-branch                - shifting between branches.

# ERROR

`remote: Counting objects: 100% (3/3), done.`
`remote: Compressing objects: 100% (2/2), done.`
`remote: Total 3 (delta 0), reused 0 (delta 0), pack-reused 0`
`Unpacking objects: 100% (3/3), 1.46 KiB | 46.00 KiB/s, done.`
`From https://github.com/YogaNarasimhaEpuri143/youtube-tweet-backend`

`branch main -> FETCH_HEAD`
`[new branch] main -> origin/main`

`fatal: refusing to merge unrelated histories`

1. git pull origin main --allow-unrelated-histories
2. git merge origin/main --allow-unrelated-histories - if you've already fetched changes and just need to merge:

