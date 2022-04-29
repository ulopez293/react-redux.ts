import { BrowserRouter } from "react-router-dom"

import { Provider } from 'react-redux'
import { render } from "@testing-library/react"
import configureStore from 'redux-mock-store'
import Login from './'
import Theme from '../../Theme'

const initialState = {
    load: false,
    login: {
        active: false,
        user: {}
    }
}
const mockStore = configureStore([])

test('renders correctly Login', () => {
    let store = mockStore(initialState)
    render(
        <Provider store={store}>
            <BrowserRouter>
                <Theme>
                    <Login />
                </Theme>
            </BrowserRouter>
        </Provider >
    )
})