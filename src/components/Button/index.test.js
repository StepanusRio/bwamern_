import React from 'react'
import { render } from '@testing-library/react'
import Button from './index'
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom'

test("Should Button Clickable", () => {
    const { container } = render(<Button isDisabled></Button>);
    expect(container.querySelector("span.disabled")).toBeInTheDocument();
});

test("Should render Loading/Spinner", () => {
    const { container, getByText } = render(<Button isLoading></Button>);
    expect(getByText(/Loading/i)).toBeInTheDocument();
    expect(container.querySelector("span")).toBeInTheDocument();
});

test("LinkTest", () => {
    const { container } = render(
        <Router>
            <Button href="" type="link"></Button>
        </Router>
    )
    expect(container.querySelector("a")).toBeInTheDocument();
})

test("Should render <a>", () => {
    const { container } = render(<Button type="link" isExternal></Button>);
    expect(container.querySelector("a")).toBeInTheDocument();
});