# Simple Calculator

This is a simple calculator implemented in Python that supports basic arithmetic operations such as addition, subtraction, multiplication, division, power, and remainder calculation. The calculator also allows users to reset or terminate the program.

## Features

- Addition (`+`)
- Subtraction (`-`)
- Multiplication (`*`)
- Division (`/`)
- Power (`^`)
- Remainder (`%`)
- Terminate (`#`)
- Reset (`$`)

## Usage

1. Clone the repository:
    ```sh
    git clone https://github.com/AsithaKanchana1/A-SIMPLE-CALCULATOR.git
    ```

2. Navigate to the project directory:
    ```sh
    cd simple-calculator
    ```

3. Run the program:
    ```sh
    python calculator.py
    ```

## Code Explanation

The main functionality is divided into several functions:

- **add(a, b)**: Returns the sum of `a` and `b`.
- **subtract(a, b)**: Returns the difference between `a` and `b`.
- **multiply(a, b)**: Returns the product of `a` and `b`.
- **divide(a, b)**: Returns the quotient of `a` and `b`, with error handling for division by zero.
- **power(a, b)**: Returns `a` raised to the power of `b`.
- **remainder(a, b)**: Returns the remainder of `a` divided by `b`.
- **select_op(choice)**: Selects the appropriate operation based on user input.
- **main()**: The main loop that prompts the user for input and performs the selected operation.

### Example

```python
def add(a, b):
    return a + b

def subtract(a, b):
    return a - b

def multiply(a, b):
    return a * b

def divide(a, b):
    try:
        return a / b
    except ZeroDivisionError:
        print("float division by zero")
        return None

def power(a, b):
    return a ** b

def remainder(a, b):
    return a % b

def select_op(choice):
    if choice == '+':
        return add
    elif choice == '-':
        return subtract
    elif choice == '*':
        return multiply
    elif choice == '/':
        return divide
    elif choice == '^':
        return power
    elif choice == '%':
        return remainder
    elif choice == '#':
        print("Done. Terminating")
        return None
    elif choice == '$':
        return 'reset'
    else:
        print("Unrecognized operation")
        return 'invalid'

def main():
    while True:
        print("Select operation.")
        print("1.Add      : +")
        print("2.Subtract : -")
        print("3.Multiply : *")
        print("4.Divide   : /")
        print("5.Power    : ^")
        print("6.Remainder: %")
        print("7.Terminate: #")
        print("8.Reset    : $")
        
        choice = input("Enter choice(+,-,*,/,^,%,#,$): ").strip()
        
        if choice == '#':
            print("Done. Terminating")
            break

        operation = select_op(choice)
        
        if operation in ['invalid', 'reset']:
            continue

        try:
            num1_input = input("Enter first number: ").strip()
            if num1_input == '$':
                continue
            num1 = float(num1_input)

            num2_input = input("Enter second number: ").strip()
            if num2_input == '$':
                continue
            num2 = float(num2_input)
        except ValueError:
            print("Not a valid number, please enter again")
            continue

        if operation is not None:
            result = operation(num1, num2)
            if result is not None:
                print(f"{num1} {choice} {num2} = {result}")

if __name__ == "__main__":
    main()
