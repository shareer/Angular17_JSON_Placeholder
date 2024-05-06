# Post Listing with JSON Placeholder API 

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 17.3.6. This application lists the post from [JSON Placeholder API](https://jsonplaceholder.typicode.com). When the user clicks on a post, the application iterates through the post data, displaying each item such as user ID, title, body, and ID one by one with each click.

## Project is live and deployed in Vercel

https://angular17-json-placeholder.vercel.app/

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Framework/Libraries Used

- Angular 17.3.6
- TypeScript
- CSS for styling
- NgRx for state management
- HttpClient for making HTTP requests
- Jasmine for unit testing

## Node.js and npm Versions

This project was developed using Node.js and npm. Below are the versions used:

- Node.js: v20.11.0
- npm: 10.2.4


## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.


### Question 1

I examined the JWT shared and it does follows the standard JWT format of having the header, payload and signature. Using JWTs are safe since they are cryptographically signed to prevent tampering. At the same time, it's important that they are properly implemented and stored securely. It's also crucial to protect them from unauthorized access and use HTTPS to prevent interception during transmission. JWTs will be a single string issued by the server after authentication, which contains a header, payload, and signature.

### Question 2

The two common attack vectors in this case could be Cross-Site Scripting(XSS) and HTML Injection.

In case of XSS malicious scripts are injected into the application, potentially allowing attackers to steal session cookies or manipulate the DOM of other users. In HTML Injection attacker inject markup directly into messages to alter appearance, insert malicious links, or impersonate users. 

To prevent this we could consider implementing Content Security Policy (CSP), Sanitize Input, Encode output and also educating users about avoiding clicking on links from untrusted sources.

### Question 3

The key difference between mutable and immutable objects are immutable objects cannot change their state once created, while mutable objects are objects whose properties or values can be changed after creation.

- primitive data types such as strings, numbers, booleans, null, and undefined are immutable. for example

        
        const greeting = "Hello!";
        const newGreeting = greeting.toUpperCase();


    In the above case 'greeting' is an immutable object (a string). Once created, its value cannot be changed. the 'newGreeting' does not modify the original 'greeting', instead, it returns a new string with all characters converted to uppercase. The original 'greeting' remains unchanged.

- Pros of Immutability are
     
    - Predictability : Since immutable objects cannot be changed after creation, there are no unexpected side effects caused by mutable state modifications. - It prevents unintentional modifications of data.

    - Optimization :  Since JavaScript objects are mutable by nature, changing a  value can potentially change many parts of an application. Immutable objects enable optimization techniques such as memoization and caching.

    - Concurrency and Debugging : In concurrent environments, such as multi-threaded applications or parallel processing, immutable objects simplify synchronization and reduce the risk of race conditions. also since immutable objects cannot be modified, developers can trace bugs more easily without worrying about unexpected changes to object state.

- Cons of Immutability are 

    - Memory Overhead : Immutable objects can use up more memory when lots of them are created often. Making new objects instead of changing existing ones can cause extra memory usage and garbage collection work.

    - Performance Impact : Immutable operations often involve creating new objects, which can impact performance in performance-critical applications

- The different ways of achivening Immutability are as follows

    -  Declare variables using `const` keyword whenever possible to indicate that their bindings are immutable.

    -  Using Object.freeze() method which makes an  object unmodifiable. However it only works on  simple objects not on prototypes or methods.


                const obj = Object.freeze({ key: 'value' });
                obj.key = 'new value'; // This change will not have any effect
                 

    -  Object Spread Operator  (`...`) is used to create a shallow  copy of an object. It does not modify the actula object.


                const obj1 = { key: 'value' };
                const obj2 = { ...obj1, key: 'new value' }; // Creates a new object with the updated value
                 

     -  Utilizing array methods like map(), filter(), and reduce() to work with arrays immutably, creating new arrays with modified values instead of modifying the original array.
                

                const arr1 = [1, 2, 3];
                const arr2 = arr1.map(item => item * 2); // Returns a new array with each item doubled
                

### Question 4

Below are the few steps to speeding up the loading timeof a web application. This is common steps i would follow regardless of the Frameworks/Library

 - Optimize and Minify Assets: Reducing the size of CSS, JavaScript, and image files by removing unnecessary code, whitespace, and comments. Minifying these assets to compress them further using tools like Webpack, Gulp etc. Smaller assets result in faster downloads and quicker page rendering.

 - Minimize HTTP requests : Reducing the number of external resources (such as fonts, scripts, or stylesheets) to minimize HTTP requests will helps faster page load.

 - Lazy Loading Modules : Splitting the application into feature modules and utilizing lazy loading feature to load modules asynchronously only when they are needed will improve the page loading speed.

 - Preload Critical Resources : Identifying critical resources needed for rendering the initial view of the web application and using preload to instruct downloading these critical resources.

 - Browser Caching : Caching static assets such as CSS, JavaScript, images, and fonts in the browser. Setting appropriate caching headers like Cache-Control and Expires to control how long these resources are cached will helps reduce the page loading time.

 - Tree Shaking : Enabling tree shaking to remove unused code and dependencies from the application bundles.

 - CDN : Using CDN if needed to increase the server response time. 



### Question 5

For me, having both good hardware and software is important for a better work experience. However, if I had to choose between the two, I would prefer to have a standard piece of average hardware but the freedom to choose my own software.

The reason for this choice is that being able to select my own software lets me use tools and applications that fit my work style and preferences. This freedom allows me to create an environment that helps me work more efficiently and happily, even if the hardware I'm using isn't the best.
