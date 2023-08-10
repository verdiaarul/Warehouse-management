# Warehouse Management System

This is a simple Warehouse Management System built using ReactJS. The system consists of two pages - a warehouse listing page and a warehouse details page.

## Technologies Used

- ReactJS
- HTML5
- CSS
- JavaScript

## Installation

1. Clone the repository:
   ```
   git clone https://github.com/verdiaarul/Warehouse-management
   cd warehouse-management-system
   ```

2. Install dependencies:
   ```
   npm install
   ```

3. Run the application:
   ```
   npm start
   ```

4. Open your browser and go to [http://localhost:3000](http://localhost:3000) to access the application.

## Features

### Page 1 - Warehouse Listing

- List of warehouses with search, filtering, and sorting options.
- Search warehouses by name.
- Filter warehouses by city, cluster, and space available limit.
- Display warehouses in an efficient and modular way using Redux for optimized store calls.

### Page 2 - Warehouse Details

- Clicking on a warehouse redirects to the details page.
- Edit functionality to modify warehouse information:
  - Cluster
  - Warehouse name
  - City
  - Space available
  - Warehouse live status
- Additional feature to add custom fields to a warehouse.

## Folder Structure

```
src/
|-- actions/        // Redux actions
|-- components/     // Reusable components
|-- pages/          // Main pages of the application
|-- reducers/       // Redux reducers
|-- App.js           // Application entry point
|-- index.js         // Index file
|-- store.js         // Redux store configuration
|-- db.json  // Sample warehouse data
```

## Usage

1. **Warehouse Listing Page:**
   - Navigate to the warehouse listing page.
   - Search warehouses by name.
   - Use filters to narrow down the results based on city, cluster, and space available.

2. **Warehouse Details Page:**
   - Click on a warehouse to view its details.
   - Edit the warehouse information, including cluster, name, city, space available, and live status.
   - Add custom fields as needed.

## Note

- The application uses React Router for navigation.
- Redux is used for state management with proper actions and reducers.
- CSS and HTML5 are used to create the layout and styling of the application.

Feel free to explore and enhance the application further based on your requirements.

## Credits

Warehouse data is provided in the `warehouses.json` file.

---

*This project is for educational purposes and is not intended for production use.*
