### How to contribute.

> There two ways you can contribute here

- Direct from GitHub
- Using a code editor(e.g vs code)

First Fork the repository
![First Fork the repository](https://user-images.githubusercontent.com/88102392/226692241-59d8adad-78ac-437a-99bb-c1396b9e61cf.png)

# 1. Step Direct from GitHub

- After forking the repository click on `go to file`

![Go to file](https://user-images.githubusercontent.com/88102392/226693809-e96e3bfd-c5c2-4463-871e-5bcc1f8ef9e3.png)

- Navigate to the `src/data/error.json`

![image](https://user-images.githubusercontent.com/88102392/226694741-92c67935-db29-4340-ae15-8beaa2651b09.png)

- Add your code in the `error.json` file usng this format

```code
   {
     "type": "<Problem-type (e.g push, merge etc.)>",
     "title": "<Exact title of the error>",
     "description": "<Description of the error>",
     "solutions": "<Soliution of the error>"
   }

```

- Now add a suitable commit message like this & create a new branch by clicking the second option. Click on Propose changes

![image](https://user-images.githubusercontent.com/88102392/226696447-ca59da05-47e9-48d4-9b11-0821356d7dab.png)

- Click on `Compare & across forks `, Select `devvsakib/github-error-solve` in the base repository & also click on `Create Pull Request ` button.

![image](https://user-images.githubusercontent.com/88102392/226697482-95f5b392-bfae-4301-bd9d-eead9734045f.png)

- Fill the description & add a best commit title & create Pull request

![image](https://user-images.githubusercontent.com/88102392/226698872-e2254cf0-a794-4e76-8926-cd1aa3bbb804.png)

That's it.

# 2. Using a Code editor(e.g Vs code)

Clone the repository.

```console
git clone https://github.com/<Your-GitHub-Username>/github-error-solve.git
```

- Navigate to folder

```console
cd github-error-solve
```

- Install node dependencies

```console
yarn
```

- Start the project

```console
yarn run dev
```

- Make a New branch.The change you are going to make would be a good branch name.

```console
git checkout -b <name-of-your-branch>
```

- Add upstream command

```console
git remote add upstream https://github.com/devvsakib/github-error-solve.git
```

- Stage your changes

```console
  git add --all
```

or

```console
  git add <Name-of-file-to-stage>
```

- Commit changes

```console
  git commit -m "<Commit-message>"
```

- Check status of your repository.

```console
  git status -s
```

- The response should be like this

```console
On branch <name-of-your-branch>
nothing to commit, working tree clean
```

- Pushing your repository to GitHub.

```console
  git push origin <name-of-your-branch>
```

- On the GitHub website, navigate to your forked repo - on the top of the files section, you'll notice a new section containing a `Compare & Pull Request` button!

- Click on that button, this will load a new page, comparing the local branch in your forked repository against the main branch. Click the green `Create Pull Request` button.

**Troubleshoot**
Facing problem starting the server or any other problem? Please let us know by raising an <a href="https://github.com/devvsakib/github-error-solve/issues/new">Issue</a>
