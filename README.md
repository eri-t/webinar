# Webinar site

## Before uploading the site:

- db/webinar.sql contains the code to generate the database and should not be published on launching.

- db/config.php contains the connection data and is set up for localhost, so user and password fields should be adjusted before launching.

## Other notes:

- The site follows the mockup’s guidelines, including the Portuguese language in the modal window.

- The fonts used in the mockup are licensed, so similar free fonts were used instead.

- logo-h.svg was missing, so logo-h.jpg was created from “Group 5.jpg”.

- Logos and avatar images were resized to match the sizes shown in the mockup.

- Names of the images were changed to delete spaces and special characters.

- One speaker’s image was missing, so it was created by duplicating one of the other speakers’s image.

- Social media icons were missing so a sprite was made from the mockup.

- Form data is saved in localStorage and in a database, as requested in the challenge, but the previous registration of each attendee is evaluated separately for each storage option.

- Although the form data is saved only if the email isn’t already saved, the modal message is always shown, and in this case it always displays the same confirmation message, as provided in the mockup, since the attendee is already registered. 

- Vue.js is currently running in development mode and should be turned on production mode when deploying for production. All files should be minified before launching.
