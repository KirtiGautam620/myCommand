# mycli

A versatile TypeScript CLI tool built with [Commander.js](https://www.npmjs.com/package/commander) and [Axios](https://www.npmjs.com/package/axios). This tool provides various utilities ranging from basic arithmetic to fetching real-time data from web APIs.

## Features

- **Personalized Greeting**: Say hello to the tool.
- **Calculator**: Basic arithmetic operations (Add, Sub, Mul, Div).
- **Random Quotes**: Get inspired with a random quote.
- **Pokémon Info**: Quick look at Pokémon details (defaults to Pikachu).
- **Country Data**: Fetch information about countries.
- **Random Jokes**: Lighten the mood with a random joke.
- **Weather Reports**: Get current weather conditions for London.

## Setup and Initialization

Follow these steps to set up the environment, initialize the project, and install the necessary dependencies as performed during development.

### 1. Environment Setup
Check your Node.js environment and ensure everything is correctly installed:
```bash
node -v
nvm -v
```

### 2. Project Initialization
Initialize the project and install core dependencies:
```bash
npm init -y
npm install commander
npm install axios
```

Install development dependencies for TypeScript support:
```bash
npm install -D typescript ts-node nodemon @types/node
```

### 3. TypeScript Configuration
Initialize the TypeScript configuration and compile the source code:
```bash
npx tsc --init
npx tsc
```

### 4. Global Installation and Usage
Link the package to your local environment to use the `mycli` command globally:
```bash
npm link
mycli greet kirti
```

## Available Commands

After running `npm link`, you can run the CLI using the `mycli` command globally.

### General
| Command | Description |
|---------|-------------|
| `greet <name>` | Greets the user by name. |
| `quote` | Generates a random quote. |
| `joke` | Displays a random joke (setup and punchline). |
| `pokemon` | Fetches info and sprite URLs for Pikachu. |
| `country` | Fetches information about India. |
| `weather` | Fetches a weather report for London. |

### Calculator
| Command | Description |
|---------|-------------|
| `add <n1> <n2>` | Adds two numbers. |
| `sub <n1> <n2>` | Subtracts the second number from the first. |
| `mul <n1> <n2>` | Multiplies two numbers. |
| `div <n1> <n2>` | Divides the first number by the second. |

## Example Usage

```bash
# Greet yourself
mycli greet "Developer"

# Perform a calculation
mycli add 15 27

# Get a random joke
mycli joke

# Check the weather
mycli weather
```
