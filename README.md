# React Router v6 useParams Bug

This repository demonstrates a common error when using the `useParams` hook in React Router v6.  The issue arises because `useParams` might return `undefined` before the component has fully mounted, leading to errors if not handled properly.

The `bug.js` file showcases the problematic code, while `bugSolution.js` presents the corrected version.

## Problem
Accessing route parameters using `useParams()` before the component finishes mounting can result in errors or an unexpected blank screen.

## Solution
The solution involves using conditional rendering or optional chaining to check if `useParams()` has returned data before attempting to access its properties. This approach prevents the runtime error that occurs when dealing with `undefined` values.