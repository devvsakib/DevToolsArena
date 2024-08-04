---
title: How to Contribute to Open Source on GitHub forking and Making Your First Pull Request
tags: [GitHub, Open Source, Contribution]
author: John Doe
date: 2024-08-04
---

## Introduction

Contributing to open-source projects is a great way to improve your coding skills, collaborate with others, and give back to the community. If you're new to this process, it might seem a bit daunting, but it's actually quite straightforward. In this guide, we'll walk you through the steps of forking a repository, making changes, and submitting a pull request.

## Step 1: Fork the Repository

1. **Find a Project to Contribute To**: Browse GitHub to find a project you'd like to contribute to. Look for repositories with issues labeled "good first issue" or "help wanted".

2. **Fork the Repository**: Once you've found a repository, click the "Fork" button at the top right corner of the repository page. This creates a copy of the repository in your GitHub account.

![Fork Repository](https://guides.github.com/activities/forking/fork-button.png)

## Step 2: Clone Your Fork

1. **Clone the Forked Repository**: On your GitHub account, navigate to your forked repository. Click the "Code" button and copy the URL.

2. **Open Your Terminal**: Use Git to clone the repository to your local machine. Run the following command, replacing `URL` with the URL you copied:

    ```sh
    git clone URL
    ```

3. **Navigate to the Repository**: Change into the repository directory:

    ```sh
    cd repository-name
    ```

## Step 3: Create a Branch

1. **Create a New Branch**: It's a good practice to create a new branch for your changes. Run the following command, replacing `branch-name` with a descriptive name for your branch:

    ```sh
    git checkout -b branch-name
    ```

## Step 4: Make Changes

1. **Make Your Changes**: Open the project in your favorite code editor and make your changes. This could be fixing a bug, adding a feature, or updating documentation.

2. **Stage and Commit Your Changes**: After making changes, stage them with:

    ```sh
    git add .
    ```

    Then commit your changes with a descriptive message:

    ```sh
    git commit -m "Describe your changes"
    ```

## Step 5: Push Your Changes

1. **Push Your Branch to GitHub**: Push your changes to your forked repository on GitHub:

    ```sh
    git push origin branch-name
    ```

## Step 6: Create a Pull Request

1. **Navigate to the Original Repository**: Go to the original repository you forked from on GitHub.

2. **Open a Pull Request**: Click the "Pull requests" tab, then click the "New pull request" button.

3. **Compare Changes**: Make sure the base repository is the original repository and the base branch is the branch you want to merge your changes into (usually `main` or `master`). The head repository should be your forked repository, and the compare branch should be the branch you made your changes on.

4. **Create Pull Request**: Click the "Create pull request" button. Provide a title and description for your pull request, explaining what changes you made and why.

![Create Pull Request](https://guides.github.com/activities/forking/pr-button.png)

## Step 7: Collaborate and Iterate

1. **Review and Discuss**: The project maintainers will review your pull request. They may ask questions or request changes. Engage in the discussion and make any necessary updates.

2. **Update Your Pull Request**: If you need to make changes, commit them to your branch and push to your fork. Your pull request will automatically update.

## Conclusion

Congratulations! You've made your first contribution to an open-source project. This process might seem complex at first, but it becomes second nature with practice. Open source is all about collaboration and continuous learning, so don't hesitate to reach out for help and keep contributing. Happy coding!