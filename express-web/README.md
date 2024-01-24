 **Project: Express.js Website**

**Description:**
This project sets up a simple website using Express.js, a popular Node.js framework for building web applications. The website consists of three pages: a home page, an about page, and a blog page. The code is well-structured and includes detailed explanations and code snippets to help junior developers understand how it works.

**Getting Started:**

1. **Prerequisites:**
   - Node.js and npm installed on your machine.
   - A code editor or IDE of your choice.

2. **Project Setup:**
   - Clone or download the project repository.
   - Open the project folder in your code editor.
   - Run `npm install` to install the necessary dependencies.

**Code Overview:**

1. **Express.js App:**
   - The `app` variable represents the Express.js application.
   - The `app.engine('html', cons.swig)` line sets up the Swig template engine for rendering HTML files.
   - The `app.set('views', path.join(__dirname, 'views'))` line specifies the directory where the HTML templates are located.
   - The `app.set('view engine', 'html')` line sets Swig as the default view engine.
   - The `app.use(express.urlencoded({extended: false}))` line enables parsing of URL-encoded request bodies.

2. **Routing:**
   - The `app.get('/', function(req, res){...})` line defines a route for the home page. When a user visits the root URL (`/`), the function will be executed and the `index.html` template will be rendered.
   - Similarly, the `app.get('/about', function(req, res){...})` and `app.get('/blog', function(req, res){...})` lines define routes for the about page and the blog page, respectively.

3. **Server Configuration:**
   - The `app.listen(3003)` line starts the Express.js server and listens for incoming requests on port 3003.
   - The `console.log('Server is running on port 3003...')` line simply logs a message to the console indicating that the server is running.