### Conceptual Exercise

Answer the following questions below:

- What is a JWT?
JSON Web Token

- What is the signature portion of the JWT?  What does it do?
The signature portion of the JWT ensures that the token hasn’t been altered. The receiver of the JWT will verify the signature to ensure that the token hasn’t been altered after it was signed by the issuerit was signed by the issuer

- If a JWT is intercepted, can the attacker see what's inside the payload?
Yes, if it is also compromised.
- How can you implement authentication with a JWT?  Describe how it works at a high level.
To implement authentication with a JWT, the issuer creates a token that contains user information and signs it with a secret key. The receiver of the token verifies the signature and, if it is valid, grants the user access to the protected resource.

- Compare and contrast unit, integration and end-to-end tests.
Unit tests focus on individual units of code and ensure that each component works as expected. Integration tests test the interactions between different components, while end-to-end tests test the complete flow of a system from start to finish.

- What is a mock? What are some things you would mock?
A mock is a dummy object that stands in for a real object in testing. Mocks are often used to isolate individual components of a system and ensure that they work as expected.

- What is continuous integration?
Continuous integration (CI) is a software development practice where code changes are automatically built and tested whenever they are committed to the version control repository. This helps to catch bugs and ensure that changes do not break the existing code.

- What is an environment variable and what are they used for?
An environment variable is a value that can be passed to an application at runtime and is used to configure the behavior of the application. They are commonly used to store secrets, such as database passwords, and to configure the behavior of the application in different environments.

- What is TDD? What are some benefits and drawbacks?
Test-Driven Development, is a software development process where tests are written before the code. The goal is to ensure that the code satisfies the requirements defined by the tests. The benefits of TDD include improved code quality, better design, and a comprehensive suite of tests to ensure the code remains functional over time. However, the drawback is that it can be time-consuming and may slow down the initial development process.

- What is the value of using JSONSchema for validation?
JSONSchema is used for validating JSON data. It defines the structure of the JSON data and what values are allowed in each field. Using JSONSchema can help to ensure data integrity and reduce the chances of invalid data being processed by the system.

- What are some ways to decide which code to test?
When deciding which code to test, it is important to consider the impact that a failure in the code will have on the system as a whole. High-risk and high-impact areas, such as business-critical logic, should be tested thoroughly. Additionally, areas that are prone to bugs or are difficult to debug should also be tested.

- What does `RETURNING` do in SQL? When would you use it?
    In SQL, the RETURNING clause is used to return the values of certain columns of a row after an INSERT, UPDATE, or DELETE operation. This can be useful for obtaining the updated values of a row after an update or the values of a newly inserted row.
- What are some differences between Web Sockets and HTTP?
Web Sockets provide a full-duplex communication channel between the client and server, while HTTP provides a request-response model. Web Sockets are designed for real-time communication, while HTTP is more suited for short-lived requests. Web Sockets allow for bidirectional communication, while HTTP communication is typically one-directional from the client to the server.


