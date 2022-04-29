import { Provider } from 'react-redux';
import { render } from "@testing-library/react"
import configureStore from 'redux-mock-store'
import SplashScreen from './'

const initialState = {
    load: false,
    login: {
        active: false,
        user: {}
    }
}
const mockStore = configureStore([])

test('renders correctly SplashScreen', () => {
    let store = mockStore(initialState)
    render(
        <Provider store={store}>
            <SplashScreen />
        </Provider>
    )
})