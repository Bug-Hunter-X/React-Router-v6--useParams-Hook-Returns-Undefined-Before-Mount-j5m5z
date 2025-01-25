The correct way to handle this is by adding a check to see if the params are available before using them.

```javascript
// Correct usage
function MyComponent() {
  const { id } = useParams();

  if (!id) {
    return <p>Loading...</p>; // Or a fallback component
  }

  return <h1>Product {id}</h1>;
}
```

Alternatively, use optional chaining to avoid the explicit check:

```javascript
function MyComponent() {
  const { id } = useParams();
  return <h1>Product {id ?? 'N/A'}</h1>; // Default to 'N/A' if id is undefined
}
```