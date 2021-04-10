# Redux Tutorial - Learn Redux from Scratch
`https://www.youtube.com/watch?v=poQXNp9ItL4`

## You'll learn:
- State management library
- Functional programming
- Stores
- Middleware

## Redux: 
- Centralizes application state
- Makes data flow transparent and predictable

## Pros:
- Predictable state changes
- Centralized state
- Eazy debugging 
- Preserve page state
- Undo/redo

## Cons:
- Complexity
- Verbosity, boilerplate code

## When not! to use Redux
- Budget
- Small to medium-size apps
- Simple UI/data flow
- Static data
- ### If all you have is a hammer, everything looks like a Nail!
  - Be an *active* problem solver
  
## Functional programming
- Decomposing code into functions
- Non-mutable or changing data
- More concise, easier to debug, test, and more scalable
- Clojure, Haskell, JavaScript (Multi-paradigm)

## Functions as First-class Citizens
- High-order Functions:
  - A. Pass function as argument
  - B. Returns another function
  - [](src/high-order-function.js)

## Functional Composition
- Easy to test, but
- Has to read expression right to left
- Can have too many wrapped functions
- Lodash can compose functions and combine them
- [](src/Lodash.js)
- [](src/Currying.js)

## Pure functions
- Results are always the same, given a parameter
- No random values
- No current date/time
- No global state (DOM, files, db, etc)
- No mutation of paramaters
- Benefits:
  - Self-documenting: Everything it needs is specified in params
  - Easily testable: Functional composition
  - Concurrency: Can run in parallel
  - Cacheable: Store results 

## Immutability
- Once created, object cannot be changed!
- Pros
  - Predictability
  - Faster change detection
  - Concurrency
- Cons
  - Performance, for larger data
  - Memory overhead, can be reduced with Structural Sharing
- Be careful when using Spread Operator, since it only does a *shallow* copy
  - When make a copy and change a value, it changes the original variable's values since they're shared 
- [](src/Immutable.js)

## Enforcing Immutability
- Immutable vs Immer
- [](src/EnforcingImmutability.js)

## Redux Architecture
- Store: Contains variable (Can't be mutated) (each property is one slice)
- Reducer: Takes a store as parameter & returns the updated store
- Action -> Store -> Reducer
  - Events -> data -> event handler

## Designing Redux
- Design store
- Define actions user will perform
- Create reducer, take actuon based on state
- Set up store based on Reducer

## Defining Action
- Actions: Add item, mark as complete, Delete an item
- Define "type" of action
  - ex: "bugAdded"
  - Can be any naming convention

## Create Reducers
- 