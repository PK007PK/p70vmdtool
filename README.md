# IBAN Defender

## Front-end application for the FVMD team.

React / TypeScript. Elements of object-oriented programming. CRA. Styled Components.
GitHub repository: [React documentation](https://github.com/PK007PK/p70vmdtool)

The FVMD teams perform various types of checks on sensitive data. Some of these checks have to be done by the employee by comparing banking data in different financial systems. The employee has to look at the banking data in one system, in another system, on documents provided by the supplier, and determine if they are the same and if they are correct. Doing it right is tiring. It is also easy to make a mistake.

My tool is designed to make this process easier. The employee copies data from financial systems into the application.

"CRM paste" button enables copying data from SAP to the application with one click. The application itself from the selected and pasted text will recognize all the important elements: bank key, bank account, IBAN, swift code and will select what it needs.

The application will check if the IBAN structure is correct and it will signal the status with colors. So the employee does not have to analyze the characters, because the correctness of data is signaled by appropriate colors.

The application also checks whether the data are the same in different systems and on the document from the supplier and signals this with colors.

An employee can "listen" to the data copied into the app and compare the data with documents that do not allow copying and pasting data.

The application checks entered IBAN with OpenIban using its API to check if the swift code is correct.

If errors are detected, automatic messages are generated which can be sent to other employees of the company.
