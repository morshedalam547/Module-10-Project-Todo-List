// Step 1: Create an array of todo items
let todos = [
    { title: "Do homework", done: false },
    { title: "learn Js", done: true },
    { title: "Read a book", done: false },
    { title: "Workout", done: true },
    
];


// Step 2: Filter the todos into two categories
 doneTodos = todos.filter(todo => todo.done);
 ongoingTodos = todos.filter(todo => !todo.done);



console.log("✅ Done Todos:");
doneTodos.forEach(todo => {
    console.log(`- ${todo.title}`);
});



console.log("\n🕒 Ongoing Todos:");
ongoingTodos.forEach(todo => {
    console.log(`- ${todo.title}`);
});
