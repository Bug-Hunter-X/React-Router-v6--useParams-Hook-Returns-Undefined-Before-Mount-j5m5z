In React Router Dom v6, a common mistake is improperly using the `useParams` hook.  If you try to access params before the component has mounted, you'll get `undefined`. This often manifests as a blank screen or a runtime error if you're not handling the `undefined` case.

```javascript
// Incorrect usage
function MyComponent() {
  const { id } = useParams();
  return <h1>Product {id}</h1>; // Error if params aren't available yet
}
```