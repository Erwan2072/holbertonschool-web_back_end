# Cookies & Local Storage Project

## Description
This project explores advanced JavaScript concepts related to cookies and web storage. The goal is to manipulate cookies, local storage, and session storage to create dynamic and interactive user experiences on the browser. By completing the tasks, you will gain hands-on experience in working with client-side storage and understanding their differences and use cases.

---

## Learning Objectives
- Understand how to create, read, and delete cookies using JavaScript.
- Learn to configure cookies with expiration dates and specific paths.
- Understand the use of `js-cookie` for easier cookie manipulation.
- Explore browser storage options: local storage and session storage.
- Build interactive web pages that leverage client-side storage to maintain user data across sessions or tabs.

---

## Requirements
- Allowed editors: `vi`, `vim`, `emacs`, `Visual Studio Code`
- All files must end with a new line.
- A `README.md` file is mandatory at the root of the project folder.
- Use the `.js` extension for all JavaScript files.
- All code will be compiled/executed on **Ubuntu 18.04** using **Node.js 12.x** and **npm 6.x**.
- All JavaScript must be included within `<script>` tags in the HTML files (i.e., no external `.js` files are allowed).

---

## Setup
1. Install `webpack-dev-server`:
   ```bash
   npm install webpack-dev-server --save-dev
   ```
   If errors occur, install dependencies:
   ```bash
   npm i -D webpack
   npm i -D webpack-cli
   ```
2. Create an empty file `src/index.js`.
3. Run the server:
   ```bash
   node_modules/.bin/webpack-dev-server
   ```
4. Access your code via `http://localhost:8080/`.

---

## Tasks Overview
<details>
<summary>Click to expand/collapse tasks</summary>

### **Task 0: Create Basic Cookie**
- Create an HTML file `0-index.html`.
- Add two text inputs (IDs: `firstname` and `email`) and two buttons.
  - Button 1: **Log me in** (calls `setCookies` function).
  - Button 2: **Show the cookies** (calls `showCookies` function).
- Implement:
  - `setCookies`: Sets cookies for `firstname` and `email` based on input values.
  - `showCookies`: Displays all cookies in a `<p>` tag appended to the DOM.

### **Task 1: Create Cookie with Expiration and Path**
- Reuse `0-index.html` as `1-index.html`.
- Modify `setCookies` to set cookies with an expiration of **10 days** and a specific path.

### **Task 2: Read Cookie**
- Reuse `1-index.html` as `2-index.html`.
- Add a `getCookie(name)` function:
  - Returns the value of a cookie by name.
  - Returns an empty string if the cookie doesn’t exist.
- Modify `showCookies` to display cookies in the format:
  - `Email: [email value] - Firstname: [firstname value]`.

### **Task 3: Delete Cookie and Mini Application**
- Create `3-index.html`.
- Add a login form with:
  - `h2` heading.
  - Two text inputs and one button.
- Implement:
  - `showForm`: Displays the login form.
  - `hideForm`: Hides the login form.
  - `deleteCookiesAndShowForm`: Deletes cookies and shows the form.
  - `showWelcomeMessageOrForm`: Displays a welcome message if the user is logged in. Else, shows the form.
- Add a logout link that deletes cookies and switches to the form view.

### **Task 4: Use js-cookie**
- Reuse `3-index.html` as `4-index.html`.
- Add `js-cookie` via the jsdelivr CDN.
- Replace custom cookie functions with:
  - `Cookies.get()` for reading cookies.
  - `Cookies.set()` for creating cookies.
  - `Cookies.remove()` for deleting cookies.

### **Task 5: Local Storage**
- Create a shopping cart in `5-index.html` using **local storage**.
- Add an `availableItems` array: `['Shampoo', 'Soap', 'Sponge', 'Water']`.
- Features:
  - If local storage is unavailable, alert the user.
  - Use `addItemToCart(item)` to store items in local storage.
  - Display previously stored cart items using `displayCart()`.

### **Task 6: Session Storage**
- Reuse `5-index.html` as `6-index.html`.
- Replace **local storage** with **session storage** for all functionalities.

### **Task 7: Advanced Use of Web Storage**
- Create an advanced shopping cart in `7-index.html` using **session storage**.
- Features:
  - Add/remove items to/from the cart with quantities.
  - Clear the cart entirely.
  - Use `getCartFromStorage()` to parse session data.
  - Dynamically update the cart display.

</details>

---

## Usage
### Development Server
Start the server:
```bash
node_modules/.bin/webpack-dev-server
```
Access your pages at:
- `http://localhost:8080/0-index.html`
- `http://localhost:8080/1-index.html`
- `http://localhost:8080/2-index.html`
- `http://localhost:8080/3-index.html`
- `http://localhost:8080/4-index.html`
- `http://localhost:8080/5-index.html`
- `http://localhost:8080/6-index.html`
- `http://localhost:8080/7-index.html`

---

## Concepts Explored
1. **Cookies**:
   - Storing user data on the client.
   - Setting expiration dates and paths.
   - Easy manipulation using `js-cookie`.
2. **Local Storage**:
   - Persistent data storage across sessions.
   - Limited to a single browser and device.
3. **Session Storage**:
   - Temporary data storage per browser tab/session.
   - Automatically clears when the session ends.
4. **JavaScript DOM Manipulation**:
   - Dynamically updating page content based on user actions.

---

## Project Repository
[GitHub Repository: holbertonschool-web_front_end](https://github.com/Erwan2072/holbertonschool-web_front_end)

---

## Author
Erwan student at Holberton School
