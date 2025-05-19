// Step 1: Create an array of todo items
let todos = [
    { title: "Do homework", done: false },
    { title: "learn Js", done: true },
    { title: "Read a book", done: false },
    { title: "Workout", done: true },
    { title: "Make a Simple Project", done: true },
    
];


// Step 2: Filter the todos into two categories
doneTodos = todos.filter(task => task.done);
ongoingTodos = todos.filter (task => !task.done);


console.log("✅ Done Todos:");
doneTodos.forEach(task =>{
	console.log(`-${task.title}`);
});


console.log ("\n ⏲️ Ongoing Todos:");
ongoingTodos.forEach(task =>{
	console.log(`-${task.title}`)
});