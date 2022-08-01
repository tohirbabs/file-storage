<div align="center">
<img src="./public/images/logo.png" alt="Spacial Nova"/>
</div>

# Spacial Nova Dashboard

This is the documentation for the Spacial Nova dashboard. 

## Tech Stack

- Remix
- TailwindCSS
- React

## Project Structure

- `app/` contains the main application code. This is where the Remix code is stored, both the client code (React) and any backend code we have later on.
- `public/` contains the static assets and build files. This is where we store images, logos and any other asset we have.
- `styles/` contains a single stylesheet; `app.css`. This is the entry point for tailwind into our app. Should not be edited.
- `Dockerfile` contains the Dockerfile for the app. This is where we define the image we want to use, and the volumes we want to mount. Should not be edited without prior consultation.
- `remix.config.js` contains the Remix configuration. This is where we define the Remix project and the entry point for the app. [Documentation](https://remix.run/docs/en/v1/api/conventions#remixconfigjs) for the file available on the Remix docs site.
- `tailwind.config.js` contains the Tailwind configuration. This is the heart of tailwind operations in our project and where we extend tailwind and also integrate plugins. Consult [tailwind docs](https://tailwindcss.com/docs/configuration) for more info.

*Check out these folders for their distinct seperate documentation.*