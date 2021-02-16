import React from 'react'
import { render } from "@testing-library/react"
import Episodes from "./Episodes"

test('Renders Episodes component with no errors: ', () => {
    render(<Episodes episodes={[]}/>);
})

test("Renders Episodes both with and without data: ", () => {
    const data = {
        id: '12345',
        image: {medium: 'medium_image'},
        name: 'name',
        season: 1,
        number: 1,
        summary: "This is the Summary",
        runtime: 10
    }

    const { queryAllByText, rerender } = render(<Episodes episodes={[]}/>);
    expect(queryAllByText(/season/i)).toHaveLength(0);
    rerender(<Episodes episodes={[data]}/>);
    expect(queryAllByText(/name/i)).toHaveLength(1);
})