# React useEffect Infinite Loop Bug

This repository demonstrates a common error in React applications involving the `useEffect` hook: creating an infinite loop by modifying a state variable that the effect depends on.

## The Problem

The `useEffect` hook in the `bug.js` file updates the `count` state variable inside the effect function itself. Because `count` is included in the dependency array, this triggers the effect to run again, which updates `count`, and the cycle repeats infinitely. This renders the app unresponsive.

## The Solution

The `bugSolution.js` file provides a solution.  The key is to correctly manage the dependencies array. If the effect doesn't need to depend on `count`, it should be omitted from the array, or a different mechanism for triggering the effect (e.g., another state variable) should be used.

## How to Reproduce

1. Clone this repository.
2. Navigate to the project directory.
3. Run `npm install` to install the necessary dependencies.
4. Run `npm start` to start the development server.
5. Observe the infinite loop in the console and the unresponsive app in the browser.  You'll see the counter value rapidly increase in the browser until the tab crashes or browser locks up.
6. Refer to `bugSolution.js` to understand the correction and prevent this error in your applications.

This example highlights the importance of carefully considering the dependencies when using the `useEffect` hook in React.