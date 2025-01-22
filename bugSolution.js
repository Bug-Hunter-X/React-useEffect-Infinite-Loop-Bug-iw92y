```javascript
import React, { useState, useEffect } from 'react';

function MyComponent() {
  const [count, setCount] = useState(0);
  const [shouldIncrement, setShouldIncrement] = useState(false);

  useEffect(() => {
    console.log('Effect ran with count:', count);
    if (shouldIncrement) {
      setCount(count + 1);
      setShouldIncrement(false); //Reset flag after update
    }
  }, [count, shouldIncrement]);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setShouldIncrement(true)}>Increment</button>
    </div>
  );
}

export default MyComponent;
```