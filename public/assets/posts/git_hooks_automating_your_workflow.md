Git hooks are powerful scripts that can automate various aspects of your development workflow. They allow you to execute custom scripts before or after important Git events, such as committing, pushing, or merging. This post will introduce you to Git hooks and show you how to leverage them effectively.

## What Are Git Hooks?

Git hooks are scripts that Git executes before or after events such as: commit, push, and receive. They reside in the `.git/hooks` directory of every Git repository and can be written in any scripting language.

## Types of Git Hooks

Git hooks can be categorized into client-side and server-side hooks:

### Client-side Hooks

1. **pre-commit**: Runs before a commit is created
2. **prepare-commit-msg**: Runs before the commit message editor is fired up
3. **commit-msg**: Runs after the commit message is saved
4. **post-commit**: Runs after the commit is created
5. **pre-push**: Runs before a push is executed

### Server-side Hooks

1. **pre-receive**: Runs when the server receives a push
2. **update**: Similar to pre-receive, but runs once for each branch
3. **post-receive**: Runs after a push has been accepted

## Setting Up a Git Hook

1. Navigate to your repository's `.git/hooks` directory.
2. Create a new file with the name of the hook you want to implement (e.g., `pre-commit`).
3. Remove the `.sample` extension if it exists.
4. Make the file executable:

   ```bash
   chmod +x .git/hooks/pre-commit
   ```

5. Edit the file with your desired script.

## Example: A Simple pre-commit Hook

Here's a simple pre-commit hook that checks for debugging statements:

```bash
#!/bin/sh

if git diff --cached | grep -E '(console.log|debugger)' > /dev/null; then
    echo "Error: Debugging statements detected. Please remove them before committing."
    exit 1
fi
```

This script checks for `console.log` or `debugger` statements in your staged changes and prevents the commit if any are found.

## Best Practices for Using Git Hooks

1. **Keep hooks simple**: Complex hooks can slow down Git operations.
2. **Use hooks consistently**: Ensure all team members use the same hooks.
3. **Version control your hooks**: Store hooks in your repository and symlink them.
4. **Make hooks configurable**: Allow developers to bypass hooks when necessary.
5. **Document your hooks**: Ensure team members understand what each hook does.

## Sharing Hooks with Your Team

To share hooks with your team:

1. Create a `hooks` directory in your repository.
2. Add your hook scripts to this directory.
3. Create a setup script that symlinks these hooks to `.git/hooks`.
4. Add instructions for running the setup script to your README.

## Advanced Git Hook Usage

### Linting

Use a pre-commit hook to run linters:

```bash
#!/bin/sh

if ! npm run lint; then
    echo "Linting failed. Please fix errors before committing."
    exit 1
fi
```

### Automatic Formatting

Use a pre-commit hook to automatically format code:

```bash
#!/bin/sh

if ! npm run format; then
    echo "Formatting failed. Please run formatting manually and try again."
    exit 1
fi
```

### Preventing Commits to Specific Branches

Use a pre-commit hook to prevent direct commits to protected branches:

```bash
#!/bin/sh

branch="$(git rev-parse --abbrev-ref HEAD)"

if [ "$branch" = "main" ]; then
    echo "You can't commit directly to main branch"
    exit 1
fi
```

## Conclusion

Git hooks are a powerful tool for automating and enforcing development workflows. By implementing appropriate hooks, you can improve code quality, enforce coding standards, and streamline your development process.

Remember, while hooks are powerful, they should be used judiciously. Overly restrictive hooks can hinder productivity, so strike a balance between automation and flexibility.

Happy coding, and may your Git hooks serve you well!

> Written by **Sakib Ahmed** | [GitHub](https://github.com/devvsakib)