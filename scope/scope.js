// What is scope?
// Scope is where your variable is accessible

// Global scope
// Function scope
// Block Scope

let myGlobalVariable = "A global variable"

for (let i = 0; i < 5; i++) {
  console.log(myGlobalVariable);
}

if (true) {
  let blockScoped = "block scoped";
  function someMethod() {
    let myVar = "Helloooo";
    console.log(blockScoped);
  }

  // someMethod();
}

// someMethod();


console.log(blockScoped);

