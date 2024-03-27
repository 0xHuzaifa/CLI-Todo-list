# CLI TypeScript Todo List

This is a simple command-line interface (CLI) TypeScript Todo List application that allows users to manage their to-do lists efficiently. Users can add tasks to their to-do list, view their current to-do list, and delete tasks from the list.

## Installation

To use this CLI TypeScript Todo List, you need to have Node.js and npm installed on your system. You can install the TypeScript globally using the following command:

```bash
npm install -g typescript
```

Additionally, you need to install the 'inquirer' package and its types:

```bash
npm install inquirer
npm install --save-dev @types/inquirer
```

## Usage

To run the CLI TypeScript Todo List, execute the following command in your terminal:

```bash
npx cli-typescript-todolist
```

## Functionality

### Adding a Task

To add a task to your to-do list, choose the option "Add ToDo list" from the menu. You will be prompted to enter your task. After entering the task, you will have the option to add more tasks or exit.

### Viewing Today's ToDo List

To view your current to-do list, select the option "Watch Today's ToDo list" from the menu. If you haven't added any tasks yet, it will prompt you to add tasks. Otherwise, it will display your existing to-do list.

### Deleting a Task

To delete a task from your to-do list, choose the option "Delete Todo List" from the menu. You will be asked to enter the number corresponding to the task you want to delete. After deleting the task, it will display your updated to-do list.

## Code Overview

The code is structured as follows:

- **Main Function**: The `main` function drives the flow of the program based on the user's choice.
- **Add ToDo List Function**: Allows users to add tasks to their to-do list.
- **Watch Today's ToDo List Function**: Displays the current to-do list.
- **Delete Todo List Function**: Deletes a task from the to-do list.

## Contributing

Contributions are welcome! Feel free to submit issues or pull requests to improve this project.

## Author

This CLI TypeScript Todo List project is authored by Huzaifa Ahmed.