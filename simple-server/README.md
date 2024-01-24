 **Project: Simple HTTP Server**

**Description:**
This project demonstrates how to create a basic HTTP server using Node.js. The server listens on port 3001 and responds to requests with a simple text message.

**Prerequisites:**
- Node.js installed on your machine.
- A code editor (e.g., Visual Studio Code).

**Step-by-Step Guide:**

1. **Create a New Project:**
   - Open your code editor and create a new folder for the project.
   - Inside the project folder, create a file named `server.js`.

2. **Install Dependencies:**
   - Open a terminal window and navigate to the project folder.
   - Run the following command to install the `http` module:
     ```
     npm install http
     ```

3. **Write the Server Code:**
   - Open the `server.js` file and add the following code:
     ```javascript
     const http = require('http');

     const host = 'localhost';
     const port = 3001;

     const server = http.createServer(function (req, res) {
       res.statusCode = 200;
       res.setHeader('Content-Type', 'text/plain');
       res.end('Hello Nazu 2');
     });

     server.listen(port, host, () => {
       console.log(`Server running at http://${host}:${port}/`);
     });
     ```
   - Let's break down the code:
     - We import the `http` module, which provides the functionality to create an HTTP server.
     - We define the `host` and `port` variables to specify the address and port on which the server will listen.
     - We create an HTTP server using the `http.createServer()` function. The function takes a callback function as an argument, which is executed whenever a request is received by the server.
     - Inside the callback function, we set the status code to 200 (OK), set the `Content-Type` header to `text/plain`, and send the response message "Hello Nazu 2" to the client.
     - Finally, we call the `listen()` method on the server object to start the server and listen for incoming requests.