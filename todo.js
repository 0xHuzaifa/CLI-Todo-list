#!/usr/bin/env node
import inquirer from "inquirer";
const todoList = [];
const getUserChoice = async () => {
    const userChoice = await inquirer.prompt({
        name: "do",
        type: "list",
        choices: ["Add ToDo list", "Watch Today's ToDo list", "Delete Todo List", "Exit"],
        message: "What you want to do?"
    });
    return userChoice.do;
};
const getUserAddTodoList = async () => {
    const addTodoList = await inquirer.prompt([
        {
            name: "add",
            type: "input",
            message: "Enter your todo list."
        },
        {
            name: 'addMore',
            type: "list",
            choices: ["add more", "exit"],
            message: "Want to add more or exit?"
        }
    ]);
    return ({
        add: addTodoList.add,
        addMore: addTodoList.addMore,
    });
};
const getPositionToDelete = async () => {
    const positionToDelete = await inquirer.prompt({
        name: 'delete',
        type: 'number',
        message: 'Enter list number to delete.'
    });
    return positionToDelete.delete;
};
async function main() {
    const choice = await getUserChoice();
    if (choice === 'Add ToDo list') {
        await addTodoList();
    }
    else if (choice === `Watch Today's ToDo list`) {
        await watchTodoList();
    }
    else if (choice === 'Delete Todo List') {
        await deleteTodoList();
    }
}
main();
async function addTodoList() {
    let condition = true;
    do {
        const askUser = await getUserAddTodoList();
        const { add, addMore } = askUser;
        todoList.push(add);
        if (addMore === 'exit') {
            condition = false;
        }
    } while (condition);
    main();
}
async function watchTodoList() {
    if (todoList.length < 1) {
        console.log(`You Don't have any todo list`);
        console.log(`Add some work in your todo list`);
        await addTodoList();
    }
    else {
        console.log(`Your Todo list`);
        for (let i = 0; i < todoList.length; i++) {
            console.log(`${(i + 1)}. ${todoList[i]}`);
        }
        await main();
    }
}
async function deleteTodoList() {
    const positionToDelete = await getPositionToDelete();
    const indexToDelete = positionToDelete - 1;
    if (indexToDelete >= 0 && indexToDelete < todoList.length) {
        todoList.splice(indexToDelete, 1);
        console.log(`Your New Todo list`);
        for (let i = 0; i < todoList.length; i++) {
            console.log(`${(i + 1)}. ${todoList[i]}`);
        }
        await main();
    }
    else {
        console.log("Invalid position. Please enter a valid position.");
        await main();
    }
}
