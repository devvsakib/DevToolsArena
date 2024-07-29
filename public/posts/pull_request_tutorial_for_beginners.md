Pull requests (PRs) are a crucial part of collaborative software development, especially in open-source projects. They allow developers to propose changes to a codebase, which can then be reviewed and discussed by others before being merged. This tutorial will guide you through the process of creating a pull request.

## Prerequisites

- Basic knowledge of Git and GitHub.
- A GitHub account.
- Git installed on your computer.

## Step 1: Fork the Repository

1. Navigate to the repository you want to contribute to on GitHub.
2. Click the "Fork" button at the top right of the page. This will create a copy of the repository under your GitHub account.

## Step 2: Clone Your Fork

Clone the forked repository to your local machine:

```bash
git clone https://github.com/your-username/repository-name.git
```
Replace your-username with your GitHub username and repository-name with the name of the repository.


## Step 3: Create a New Branch

Navigate into the cloned repository:

```bash
cd repository-name
```

Create and switch to a new branch for your changes:
```bash
git checkout -b feature-branch-name
```

Choose a descriptive name for your branch, such as fix-bug-123 or add-feature-xyz.

## Step 4: Make Your Changes

Make the necessary changes to the codebase. You can use any code editor of your choice.

## Step 5: Commit Your Changes

```bash
git add .
git commit -m "Brief description of your changes"
```

Write a clear and concise commit message that describes what you have done.

## Step 6: Push Your Changes

Push your changes to your forked repository:

```bash
git push origin feature-branch-name
```

## Step 7: Create a Pull Request

1. Go to your forked repository on GitHub.
2. You should see a banner suggesting to compare & pull request. Click on it. If not, navigate to the "Pull requests" tab and click "New pull request."
3. Make sure the base repository is the original repository and the base branch is where you want to merge your changes (usually main or master).
4. The compare branch should be the branch you pushed your changes to.
5. Write a title and description for your pull request. Provide details on what changes you made and why.
6. Click "Create pull request."

## Step 8: Address Feedback

Once your pull request is created, other contributors or maintainers may review it and leave feedback. Be prepared to make additional changes based on this feedback.

**To make changes:**
    1. Make the required changes on your local branch.
    2. Commit and push the changes:
        ```bash
        git add .
        git commit -m "Addressed feedback on XYZ"
        git push origin feature-branch-name
        ```
The pull request will automatically update with your new commits.

## Step 9: Merge the Pull Request

Once your pull request has been approved, a maintainer will merge it into the base branch. In some projects, you may have permission to merge it yourself.

## Step 10: Clean Up

After your pull request has been merged, you can clean up your local repository by deleting the branch:

```bash
git checkout main
git pull origin main
git branch -d feature-branch-name
```

You may also delete the branch from your fork on GitHub.

Congratulations! You've successfully created and merged a pull request. This process helps maintain code quality and encourages collaboration among developers.

This tutorial covers the basics of creating a pull request and includes best practices to help beginners understand the process.

> Written by **Sakib Ahmed** | [GitHub](https://github.com/devvsakib)
