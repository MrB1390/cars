### Description:

This HTML file, titled "Car Models," presents a webpage layout showcasing various car models using Bootstrap and JavaScript. It includes a list of car models along with their respective images and details fetched dynamically from an external API.

### File Structure:

*   **index.html**: This is the main HTML file that structures the webpage layout.
*   **css/style.css**: This file contains custom CSS styles for the webpage.
*   **Js/script.js**: This JavaScript file handles dynamic data fetching and manipulation from an external API.

### External Dependencies:

*   **Bootstrap CSS**: Imported from a CDN (Content Delivery Network), it provides styling and layout components for the webpage.
*   **Bootstrap JS**: Also imported from a CDN, it adds interactivity and functionality to Bootstrap components.

### API Integration:

*   The webpage dynamically fetches car model data from an external API provided by "[https://parallelum.com.br/fipe/api/v1/carros/marcas/59/modelos/5940/anos](https://parallelum.com.br/fipe/api/v1/carros/marcas/59/modelos/5940/anos)".
*   The data fetched includes details such as release year and variant name for each car model.

### JavaScript Functionality:

*   The `quotedata` function asynchronously fetches data from the API URL provided.
*   Upon the DOMContentLoaded event, the JavaScript code fetches data from the API and dynamically populates the webpage elements with the fetched data.
*   The fetched data is then iterated through, and specific elements within the webpage are updated with the relevant car model details.

### Usage:

*   Clone or download the repository containing the HTML, CSS, and JavaScript files.
*   Ensure an active internet connection to fetch data from the external API.
*   Open the `index.html` file in a web browser to view the webpage.

### Notes:

*   Make sure to keep the internet connection active to fetch data from the external API.
*   The layout and styling can be customized further by modifying the CSS file (`css/style.css`).
*   Additional features or enhancements can be implemented by extending the JavaScript functionality.

### Author:

This project is authored by \[Balasivam\]. Feel free to reach out for any inquiries or contributions.

### License:

This project is licensed under \[Balasivam\]. See the LICENSE file for details.
