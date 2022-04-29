import { BrowserRouter } from "react-router-dom";

import { Provider } from 'react-redux';
import { render } from "@testing-library/react"
import configureStore from 'redux-mock-store'
import Home from './'
import Theme from '../../Theme'

const initialState = {
    load: false,
    login: {
        active: false,
        user: {}
    }
}
const mockStore = configureStore([])

test('renders correctly Home', () => {
    let store = mockStore(initialState)
    render(
        <Provider store={store}>
            <BrowserRouter>
                <Theme>
                    <Home />
                </Theme>
            </BrowserRouter>
        </Provider>
    )
})