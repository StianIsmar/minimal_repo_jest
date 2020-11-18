import React from "react"
import App from './App'
import '@testing-library/jest-dom'
import { render } from "@testing-library/react";

describe('testing app.js', () => {

  // To reset manually mocked values
  beforeEach(() => {
    jest.resetModules()
  });

  test("SET CONSTANT TO 1", () => {
    jest.doMock('./myConstants.js', () => ({
      CONSTANT: {
        NUMBER: 1
      }
    }))
    const { getByText, getByLabelText } = render(<App />)
    expect(getByText('1')).toBeInTheDocument()

  })

  test("SET CONSTANT TO 3", () => {
    jest.doMock('./myConstants.js', () => ({
      CONSTANT: {
        NUMBER: 3
      }
    }))
    const { getByText, getByLabelText } = render(<App />)
    expect(getByText('3')).toBeInTheDocument()

  })


})
