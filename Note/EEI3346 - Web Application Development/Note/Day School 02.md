### Web Application Development - Day School Notes

---

#### **1. Internet and World Wide Web**

- **Internet**:
  - A global network of connected devices enabling communication.
  
- **World Wide Web (WWW)**:
  - An application running on the Internet infrastructure.
  - Consists of linked documents and resources accessible via web browsers.
  - Web pages are identified by Uniform Resource Locators (URLs).
  - Content can be:
    - **Static**: Built with HTML/CSS.
    - **Dynamic**: Enhanced with JavaScript.

---

#### **2. Web Browsers and HTTP**

- **Web Browsers**:
  - Software applications used to access and display web content.
  - Examples: Google Chrome, Mozilla Firefox, Microsoft Edge, Safari.

- **HTTP (Hypertext Transfer Protocol)**:
  - The protocol used by browsers to communicate with web servers.
  - Follows a client-server model:
    - **Client**: Sends requests for resources.
    - **Server**: Sends responses containing headers and requested content.
  - Common HTTP status codes:
    - `200 OK`: Request succeeded.
    - `404 Not Found`: Resource not found.
    - `500 Internal Server Error`: Server encountered an error.

---

#### **3. HTML Basics**

- **HTML (Hypertext Markup Language)**:
  - Used to structure web page content.
  
- **Key HTML Tags**:
  - `<!DOCTYPE html>`: Defines the document type.
  - `<html>`: Root element.
  - `<head>`: Contains metadata.
  - `<body>`: Contains the main content.
  - `<h1>` to `<h6>`: Headings, `<h1>` being the highest level.
  - `<p>`: Paragraphs.
  - `<b>`: Bold text.
  - `<i>`: Italicized text.
  - `<hr>`: Horizontal rule.
  - `<br>`: Line break.
  
- **Structure**:
  - HTML documents have a hierarchical structure with nested elements.

---

#### **4. CSS Basics**

- **CSS (Cascading Style Sheets)**:
  - Used to style and layout web pages.

- **Applying CSS**:
  - **Inline**: Directly within HTML elements.
  - **Internal**: Within a `<style>` tag in the HTML `<head>`.
  - **External**: Linked through a separate `.css` file.

- **Selectors**:
  - **Element Selector**: Targets HTML elements (`p`, `h1`).
  - **Class Selector**: Targets elements with a specific class (`.classname`).
  - **ID Selector**: Targets elements with a specific ID (`#idname`).

- **Common CSS Properties**:
  - `color`: Text color.
  - `background-color`: Background color.
  - `font-size`: Text size.
  - `margin`: Space outside the element.
  - `padding`: Space inside the element.
  - `border`: Element border.

- **CSS Box Model**:
  - Defines the layout for elements:
    - **Content**: The actual content.
    - **Padding**: Space inside the border.
    - **Border**: Edge surrounding the padding.
    - **Margin**: Space outside the border.

---

#### **5. CSS Techniques**

- **Color Representation**:
  - **Named Colors**: `red`, `blue`, `green`, etc.
  - **RGB**: `rgb(255, 0, 0)` for red.
  - **Hex Codes**: `#FF0000` for red.

- **Opacity**:
  - Controls the transparency of elements using the `opacity` property.
  - Ranges from `0` (completely transparent) to `1` (completely opaque).

- **Styling Tables**:
  ```css
  table {
    width: 100%;
    border-collapse: collapse;
  }
  th, td {
    border: 1px solid black;
    padding: 8px;
    text-align: center;
  }
  th {
    background-color: #f2f2f2;
  }
  ```

- **Creating Dropdown Menus**:
  ```css
  .dropdown {
    position: relative;
    display: inline-block;
  }
  .dropdown-content {
    display: none;
    position: absolute;
    background-color: #f9f9f9;
    box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
    z-index: 1;
  }
  .dropdown:hover .dropdown-content {
    display: block;
  }
  ```

- **Responsive Design**:
  - Techniques to adapt layouts for different screen sizes using media queries.

---

#### **6. Web Development Process**

- **Development Steps**:
  - Use a text editor (e.g., VS Code) to create HTML/CSS files.
  - View pages in a web browser to test and preview.
  - Iteratively refine and enhance the design.
  
- **Best Practices**:
  - Ensure usability and accessibility.
  - Test for cross-browser compatibility.
  - Optimize for performance.

---

### Summary

```These notes cover the essential concepts and practices in web application development. Hands-on practice is crucial to reinforce these concepts and build proficiency in creating web pages and applications. Consider experimenting with the provided examples and exploring additional resources to deepen your understanding.```