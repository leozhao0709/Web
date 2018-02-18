# High order component

## 1. hoc for ts

```tsx
import * as React from 'react';
import { AxiosInstance, AxiosError } from 'axios';
import Modal from '../../components/UI/Modal/Modal';

interface WithErrorHandlerState {
    error: AxiosError | null;
}

const WithErrorHandler =
    <P extends {}>(WrappedComponent: React.ComponentType<P>, AxionsInstance: AxiosInstance) => {

        return class extends React.Component<P, WithErrorHandlerState> {

            state: WithErrorHandlerState = {
                error: null,
            };

            componentWillMount() {
                AxionsInstance.interceptors.response.use(res => res, err => {
                    this.setState({ error: err });
                });
            }

            errorConfirmedHandler = () => {
                this.setState({ error: null });
            }

            render() {

                return (
                    <>
                        <Modal modalClosed={this.errorConfirmedHandler} show={this.state.error !== null} >
                            {this.state.error && this.state.error.message}
                        </Modal>
                        <WrappedComponent {...this.props} />
                    </>
                );
            }
        };
    };

export default WithErrorHandler;

```