# React Reciepe Book Web Application

This web app is designed for a School of Code hackathon project. It was designed and built in around 8 hours.

## Features

- **Interactive Recipes**: Click on a recipe to reveal the instructions on how to cook!.
- **Add Your Own Recipes**: Easily add new Recipes through a user-friendly form.

## Technologies Used

- **React**: Frontend framework for building the interactive UI.
- **CSS**: Styling for the application.
- **JavaScript**: Logic and interactivity.

## Hosted on GitHub

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/SchoolOfCode/week-7-hackathon-bc18-room1
   ```

2. Navigate to the project directory:

   ```bash
   cd week-7-hackathon-bc18-room1
   ```

3. Install dependencies:

   ```bash
   npm install
   ```
4. **Set up JSON Server**:
   ```bash
   npm install -g json-server
5. Start the development server and the JSON server:

   ```bash
   npm run dev
   ```
   ```bash
   npm run server
   ```

6. Open your browser and navigate to:

   ```
   http://localhost:5173
   ```

## Usage

1. **View Recipes**:

   - The main page displays a list of Recipes.
   - Click on a card to reveal the Recipe.

2. **Add Recipes**: *this requires JSON database to be installed - the deployed version is not currently linked to a database*
   - Use the form at the top of the page to add new Recipes.
   - Enter your title, ingredients, and instrcutions then press the **Add** button.
   - The new Recipes will appear instantly on the page.

### Key Components

- **Recipes**: Displays a single image and reveals the instructions on click.
- **Recipes List**: Renders the collection of Recipes.
- **AddRecipesForm**: Provides the form for adding new Recipes.

## Contribution

We welcome contributions to improve this project! Here's how you can help:

1. Fork the repository.
2. Create a new branch:
   ```bash
   git checkout -b feature/your-feature-name
   ```
3. Make your changes and commit them:
   ```bash
   git commit -m "Add your message here"
   ```
4. Push to your forked repository:
   ```bash
   git push origin feature/your-feature-name
   ```
5. Create a pull request.

## Acknowledgments

Special thanks to all React learners and contributors who make coding a collaborative and fun experience!

---

Happy Learning! 🚀
