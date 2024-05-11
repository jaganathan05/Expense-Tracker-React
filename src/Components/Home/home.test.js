import { render, screen  } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Provider } from "react-redux";
import { MemoryRouter } from 'react-router-dom';
import store from "../../Store";
import Home from "./home";

describe('Home Component testing', () => {
    test('initial welcome page test', () => {
        render(
            <Provider store={store}>
                <MemoryRouter>
                    <Home />
                </MemoryRouter>
            </Provider>
        );
        const textElement = screen.getByText('Welcome To Expense Page', { exact: false });
        expect(textElement).toBeInTheDocument();
    });

    test('activates premium when TotalAmount is greater than or equal to 10000', () => {
        render(
            <Provider store={store}>
                <MemoryRouter>
                    <Home />
                </MemoryRouter>
            </Provider>
        );

        const downloadbtn = screen.getByText('Download Expenses', {exact: false})

        expect(downloadbtn).toBeInTheDocument()

        
    });

});
