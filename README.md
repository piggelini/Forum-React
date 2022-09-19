# Forum-React

Inlämningsuppgift 2 - React Forum POC (Proof of Concept)

Din uppgift är att skapa ett forum som innehåller inlägg och kommentarer. Alla dessa ska hämtas från följande API-endpoints:

Inlägg: https://jsonplaceholder.typicode.com/posts
Kommentarer: https://jsonplaceholder.typicode.com/comments

/ (startsidan)

Användaren ska se samtliga inlägg - skriv endast ut titel för inläggen.
När man klickar på titeln för ett inlägg ska användaren navigeras till en ny sida med URL:en /post/:id .

/post/:id

Här ska användaren kunna se inläggets titel och textinnehåll. Skriv även ut samtliga kommentarer som gjorts i detta inlägg. Varje kommentar ska innehålla dess textinnehåll, samt namn och mail på personen som kommenterat.
Det ska även finnas en knapp för att gå tillbaka till listan över samtliga inlägg (startsidan).


Tekniska krav
En användare ska kunna skriva in ett id i URL:en (t.ex /post/9) och kunna se inlägget med det id:et.

Lycka till!

Deadline
Inlämning senast 20 september 2022
