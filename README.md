This is a minimal testcase for a possible bug in testrpc.

Calling, with a `value`, a contract function that calls into a library results
in the Ether spent multiple times.

I tested the same code connecting to a `geth` instance and it works as expected.

## How to run

1. Run testrpc

  ```bash
  testrpc
  ```

1. Install dependencies

  ```bash
  npm install
  ```

1. Build and run

  ```bash
  npm start
  ```

## Expected output

> Difference -0.1

## Actual output

> Difference -0.20000000000001705
