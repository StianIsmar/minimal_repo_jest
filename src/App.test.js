import React from "react"
import App from './App'
import '@testing-library/jest-dom'
import { render } from "@testing-library/react";

describe('testing app.js', () => {

  // To reset manually mocked values
  beforeEach(() => {
    jest.resetModules()
  });

  jest.doMock('./myConstants.js', () => {
    return {
      __esModule: true,
      CONSTANT: {
        NUMBER: 1
      }
    }
  })

  test("SET CONSTANT TO 1", () => {


    // Wait for mock done
    return import('./myConstants.js').then((constants) => {
      console.log(constants.CONSTANT.NUMBER)
      expect(constants.CONSTANT.NUMBER).toBe(1)
      const { getByText, getByLabelText } = render(<App />)
      expect(getByText('1')).toBeInTheDocument()
    })
  })
})
