# High order component

## 1. hoc for ts

```tsx
import * as React from 'react';
import { AxiosInstance } from 'axios';

const WithErrorHandler = <P extends {}>(WrappedComponent: React.ComponentType<P>, AxionsInstance: AxiosInstance) => {

    return class extends React.Component<P, {}> {

        render() {
            return (
                <>
                    <WrappedComponent {...this.props} />
                </>
            );
        }
    };
};

export default WithErrorHandler;
```