Test Driven Development & Networking Explained In Quiz Format {#test-driven-development-networking-explained-in-quiz-format .p-name}
=============================================================

 
1\) Matching HTTP verbs (GET, PUT, PATCH, POST, DELETE) to their common
uses.


  
 {.section .section .section--body .section--first .section--last name="ad4c"}
  

------------------------------------------------------------------------


    
### Test Driven Development & Networking Explained In Quiz Format {#5279 .graf .graf--h3 .graf--leading .graf--title name="5279"}

\

\

**1)** **Matching HTTP verbs (GET, PUT, PATCH, POST, DELETE) to their
common uses.**

HTTP Verbs are a simply way of declaring our intention to the server.

-   [**GET** : Used for direct requests.]{#877f}
-   [**POST**: Used for creating new resources on the server.]{#8259}
-   [**PUT**: Used to updated a resource on the server.]{#a81a}
-   [**PATCH** : Similar to PUT, but do not require the whole resource
    to perform the update.]{#b98d}
-   [**DELETE** : Used to destroy resources on the server.]{#bfd1}

**2) Match the header fields of HTTP with a bank of definitions.**

**Headers**

Key-Value pairs that come after the request line - they appear on sep.
lines and define metadata needed to process the request.

Some common headers:

o `Host`{.markup--code .markup--p-code} : Root path for our URI.

o `User-Agent`{.markup--code .markup--p-code} : Displays information
about which browser the request originated from.

o `Referer`{.markup--code .markup--p-code} : Defines the URL you\'re
coming from.

o `Accept`{.markup--code .markup--p-code} : Indicates what the client
will receive.

o `Content`{.markup--code .markup--p-code}**-** : Define Details about
the body of the request.

**3.)** **Match common HTTP status codes (201, 301, 302, 400, 401, 402,
403, 404, 500) to their meanings.**

**HTTP Status Code Ranges( 100 - 199: Informational; 200 - 299:
Successful; 300 - 399: Redirection; 400 - 499: Client Error; 500 - 599:
Server Error)**

**Status**

First line of an HTTP response - gives us a high level overview of the
server\'s intentions. (**status line**)

HTTP/1.1 200 OK

**HTTP status codes** : numeric way of representing a server\'s
response.

o Follow the structure: x: xxx - xxx;

o **Status codes 100 - 199: Informational**

Allow the clinet to know that a req. was received, and provides extra
info from the server.

o **Status codes 200 - 299: Successful**

Indicate that the request has succeeded and the server is handling it.

Common Examples:

200 OK (req received and fulfilled) 201 Created (received and new record
was created)

o **Status codes 300 - 399: Redirection**

Let the client know if there has been a change.

Common Examples:

301 Moved Permanently (resource you requested is in a totally new
location) & 302 Found (indicates a temporary move)

o **Status codes 400 - 499: Client Error**

Indicate problem with client\'s request.

Common Examples:

400 Bad Request (received, but could not understand) & 401 Unauthorized
(resource exists but you\'re not allowed to see w/o authentication)

& 403 Forbidden (resource exists but you\'re not allowed to see it at
all ) & 404 Not Found (resource requested does not exist);

o **Status codes 500 - 599: Server Error**

Indicates request was formatted correctly, but the server couldn\'t do
what you asked due to an internal problem.

Common Examples:

500 Internal Server Error (Server had trouble processing) & 504 Gateway
Timeout (Server timeout);

**5) What does the promise in code above return? / what happens ?**

`Promise`{.markup--code .markup--p-code} : a commitment that sometime in
the future, your code will get a value from some operation (like reading
a file or getting JSON from a Website) or your code will get an error
from that operation (like the file doesn\'t exist or the Web site is
down).

**6) Match error type to definition (TypeError, ReferenceError,
SyntaxError)**

1.

Q: **When is a JavaScript Error Object thrown**?

A: The Error object is how JavaScript deals with runtime errors - so at
code runtime!

2.

Q: **How do you halt program execution with an instance of an error
object in JavaScript?**

A: Using the keyword throw you can throw your own runtime errors that
will stop program execution.

3.

**Q: What type of block will allow you to run an erroring function then
continue the execution of code after that function is run?**

A: We can use try\...catch blocks with functions that might throw an
error to catch that error and continue code execution after that error
was thrown

4.

**Q: When kind of error is thrown when the JavaScript engine attempts to
parse code that does not conform to the syntax of the JavaScript
language?**

A: A SyntaxError is thrown when there is an error in the syntax of the
executed code.

5.

**Q: What kind of error is thrown when a variable or parameter is not of
a valid type?**

A: A TypeError is thrown when an operation cannot be performed because
the operand is a value of the wrong type.

6.

**Q: What type of error is thrown when a non-existent variable is
referenced?**

A: The ReferenceError object represents an error when a non-existent
variable is referenced.





[View original.](https://medium.com/p/a123107b1670)

