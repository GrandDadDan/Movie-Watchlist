# Branch Protection Rules - Movie Watchlist App

## Why Branch Protection Matters

Branch protection ensures that the `main` branch of our repository always maintains a high quality of code.

These rules prevent direct pushing to the `main` branch. Instead, all changes must go through a Pull Request (PR) process where the code is reviewed and tested before merging. 

## Configured Rules

- **Require Pull Request Reviews**: At least one reviewer must approve changes before merging. This enforces peer review and ensures that mistakes are caught early.
- **Require Status Checks to Pass**: Automated tests must pass before a PR can be merged. This ensures that code changes do not break existing functionality.
- **Disable Direct Pushes**: Developers cannot push directly to `main`. All changes must be made via PRs, encouraging collaboration and review.
- **Require Branch to Be Up to Date**: The feature branch must be up-to-date with the latest `main` branch changes before merging to prevent conflicts.

## Benefits

- Maintains code quality and consistency.
- Reduces bugs in the `main` branch.
- Encourages team collaboration and peer review.
- Protects production-ready code from accidental errors.

# Screenshot

![image](https://github.com/user-attachments/assets/b687b655-e5a6-4cf9-bd32-61df5728ad6b)
