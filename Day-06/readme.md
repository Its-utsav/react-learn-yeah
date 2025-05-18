# Day 6


- once UI render , we have to perform some action based on render in such scenario react provide function(hook) `useEffect` 
- `useEffect`  is special function , we don't have call explicitly , it give some scenario in which react can call a `useEffect` likes
1. Once Component is shown , call `useEffect`
2. state change -> (like a) function schedule (run a function when data change)
- synchronize of data to UI or UI to data

- `useEffect` is a React Hook that lets you synchronize a component with an external system.
- It runs after every render, by default, or only when specific dependencies change.
- React calls `useEffect` automatically based on the dependencies you provide.
- Common use cases include:
1. Fetching data after the component mounts.
2. Setting up subscriptions.
3. Manually changing the DOM.
4. Logging.
- It helps perform actions (side effects) in response to renders and state/prop changes.
```jsx
useEffect(() => {
    // block of code run Only ONCE
}, []); // Dependecy Array

useEffect(() => {
    // block of code run every render
});

useEffect(() => {
    // block of code run when states changed
},[states]); // 
```