# Barbell Math Machine

A web application designed to help weightlifters calculate optimal plate distribution for their target lifting weight. This tool simplifies the process of determining which plates to load on each side of the barbell, taking into account available equipment and bar weight.

## Overview

The Barbell Math Machine solves a common problem in weightlifting: quickly calculating how to load a barbell to achieve a specific target weight. Users input their desired weight, select their bar type, and specify which plates are available at their gym. The application then calculates the optimal distribution of plates needed on each side of the bar using a greedy algorithm approach.

## Features

- **Target Weight Input**: Enter the total weight you want to lift
- **Bar Weight Selection**: Choose from common bar weights (15#, 35#, 45#, 58#, 65#)
- **Customizable Plate Availability**: Select which plates your gym has available using checkboxes:
  - 45# plates
  - 35# plates
  - 25# plates
  - 15# plates
  - 10# plates
  - 5# plates
  - 2.5# plates
  - 1.25# plates
- **Automatic Calculation**: Displays weight per side and optimal plate distribution
- **Real-time Results**: See the quantity of each plate type needed per side

## Technical Architecture

### Built With

- **React 19.0.0** - UI framework
- **Vite 6.3.6** - Build tool and development server
- **Bootstrap 5.3.3** - CSS framework for styling
- **JavaScript (ES6+)** - Core programming language

### Project Structure

```
barbell-math-vite/
├── src/
│   ├── barbellMath.js      # Core calculation logic
│   ├── main.jsx            # React entry point
│   └── init.js             # Initialization script
├── index.html              # Main HTML template
├── package.json            # Dependencies and scripts
└── vite.config.js          # Vite configuration
```

### Algorithm

The application uses a **greedy algorithm** to calculate the optimal plate distribution:

1. Calculates the total weight to add (target weight - bar weight)
2. Divides by 2 to get weight per side
3. Filters plates based on user-selected availability
4. Iterates through available plates in descending order
5. For each plate weight, calculates the maximum quantity that can be used
6. Continues with remaining weight until fully distributed

This approach ensures the most efficient use of larger plates first, minimizing the total number of plates needed.

## Installation

### Prerequisites

- Node.js (version 14 or higher)
- npm or yarn package manager

### Setup

1. Clone the repository:
```bash
git clone <repository-url>
cd barbell-math-vite
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

## Available Scripts

- `npm run dev` - Start development server with hot module replacement
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint to check code quality

## Usage

1. **Enter Target Weight**: Input the total weight you want to lift in the "Target Weight" field
2. **Select Bar Weight**: Choose your barbell weight from the dropdown menu
3. **Select Available Plates**: Check the boxes next to the plate weights available at your gym
4. **Click Calculate**: Press the "Calculate" button to see results
5. **View Results**:
   - The "Weight Per Side" field shows how much weight to add to each side
   - The table displays the quantity of each plate type needed per side

### Example

- Target Weight: 225#
- Bar Weight: 45#
- Available Plates: All checked
- Result: 90# per side
  - 2x 45# plates
  - 0x 35# plates
  - 0x 25# plates
  - 0x 15# plates
  - 0x 10# plates
  - 0x 5# plates
  - 0x 2.5# plates
  - 0x 1.25# plates

## Development

### Code Quality

The project uses ESLint for code quality and consistency. Configuration includes:
- React-specific rules
- React Hooks linting
- React Refresh for fast development

### Building for Production

To create a production build:

```bash
npm run build
```

This generates optimized static files in the `dist/` directory ready for deployment.

## Browser Support

This application works on all modern browsers that support ES6+ JavaScript features.

## Contributing

Contributions are welcome! Please ensure your code follows the existing style and passes all linting checks.

## License

This project is private and not currently licensed for public distribution.

## Future Enhancements

Potential features for future development:
- Support for kilogram weights
- Plate visualization
- Save/load custom gym equipment configurations
- Mobile-responsive design improvements
- Progressive Web App (PWA) capabilities
