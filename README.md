# Binary to Decimal Converter

A React application that allows users to convert binary numbers to their decimal equivalents.

## Description

Binary to Decimal Converter (Bin2Dec) is a simple yet powerful tool that helps users understand and work with binary numbers. This application allows users to enter strings of up to 8 binary digits and instantly see their decimal (base-10) equivalent.

## Features

- Convert binary numbers (0s and 1s) to decimal numbers
- Input validation to ensure only valid binary digits are entered
- Support for up to 8 binary digits
- Real-time conversion and error feedback
- Clean and intuitive user interface

## Technical Implementation

The application is built using:

- React.js
- JavaScript (ES6+)
- CSS3
- HTML5

Key technical features:

- Single mathematical function for conversion (using Math.pow)
- No arrays used for binary digit storage
- Real-time input validation
- Responsive design

## Installation

1. Clone the repository:

```bash
git clone https://github.com/yourusername/binary-to-decimal-converter-using-react.git
```

2. Navigate to the project directory:

```bash
cd binary-to-decimal-converter-using-react
```

3. Install dependencies:

```bash
npm install
```

4. Start the development server:

```bash
npm start
```

5. Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

## Usage

1. Enter up to 8 binary digits (0s and 1s) in the input field
2. The decimal equivalent will be displayed automatically
3. If you enter any invalid characters, you'll receive an error message
4. The conversion happens in real-time as you type

## Project Structure

```
binary-to-decimal-converter-using-react/
├── public/
│   └── index.html
├── src/
│   ├── App.js
│   ├── App.css
│   ├── Bin2Dec.js
│   ├── index.js
│   └── index.css
└── package.json
```

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- Inspired by [App Ideas Collection](https://github.com/florinpop17/app-ideas)
- Built as a learning project for React and binary number systems
