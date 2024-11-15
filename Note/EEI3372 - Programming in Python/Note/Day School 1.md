# Day School 1: Programming in Python (EEI3372)

## 1. Introduction to Programming Concepts

- **Programming**: The process of giving instructions to computers and digital devices to perform specific tasks.
- **Computers**: Have great computing power and memory but require human input to function.
- **Programming**: Involves providing step-by-step instructions to the computer.

## 2. Programming Paradigms and Languages

- **Programming Paradigms**: Different styles of programming, such as:
  - **Procedural**: Focuses on procedures or routines (e.g., C).
  - **Object-Oriented**: Organizes code into objects (e.g., Python, Java).
  - **Functional**: Emphasizes functions and immutability (e.g., Haskell).

- **Programming Languages**: Different languages exist for various purposes. Some common ones include:
  - **General-purpose languages**: Python, Java, C++
  - **Specialized languages**: SQL (database queries), R (statistical analysis)

## 3. Programming Syntax and Semantics

- **Syntax**:
  - The grammar of a programming language.
  - Syntax errors occur when the code violates the language's rules, resulting in compilation or interpretation errors.
  
- **Semantics**:
  - The logic and meaning behind the code.
  - Semantic errors occur when the code runs but does not produce the expected results.

## 4. Compiled vs. Interpreted Languages

- **Compiled Languages**:
  - Entire program is compiled at once into machine code.
  - Syntax errors are detected at compilation time.
  - Produces lightweight, optimized programs.
  - Examples: C, C++, C#, Java, GoLang.

- **Interpreted Languages**:
  - Program is converted and executed line by line.
  - Syntax errors are detected during execution.
  - Produces larger programs with less efficient execution.
  - Examples: JavaScript, PHP, Python.

## 5. Python Installation

- **Install Python**: Download and install from [python.org](https://www.python.org/).
- **Install PyCharm**: An Integrated Development Environment (IDE) for Python. Download from [jetbrains.com](https://www.jetbrains.com/pycharm/).

## 6. Variables in Python

- **Variables**: Containers for storing data values.
- No declaration command needed; created upon first value assignment.
- Example:
  ```python
  x = 5
  y = "John"
  print(x)  # Output: 5
  print(y)  # Output: John

# Data Types in Python

- **Text Type**: `str`
- **Numeric Types**: `int`, `float`, `complex`
- **Sequence Types**: `list`, `tuple`, `range`
- **Mapping Type**: `dict`
- **Set Types**: `set`, `frozenset`
- **Boolean Type**: `bool`
- **Binary Types**: `bytes`, `bytearray`, `memoryview`

# Control Structures in Python

## Sequential Statements

Default mode of execution; statements executed in sequence.

## Selection/Decision Control Statements

Used for branching and decision-making.

### Types

- **Simple if**
- **if-else**
- **if-elif-else**
- **nested if**

### Examples

#### Simple if

```python
n = 10
if n % 2 == 0:
    print("n is an even number")
```
#### If-else

```python
n = 5
if n % 2 == 0:
    print("n is even")
else:
    print("n is odd")
```

#### If-elif-else

```python
x = 15
y = 12
if x == y:
    print("Both are Equal")
elif x > y:
    print("x is greater than y")
else:
    print("x is smaller than y")
```

# Repetition Statements

Used for looping and repeating code blocks.

## Examples

### for loop

```python
for i in range(5):
    print(i)
```

####while loop

```python
# Example of a while loop
n = 0
while n < 5:
    print(n)
    n += 1
```


This README section now includes examples of `variables` `data types` `conditional statments` in Python, formatted for clarity and readability on GitHub.
