# Digital Clock

tags: `html` `css` `javascript` `tailwindcss`

## Tailwind CSS

### Tailwind CLI

* build static css by Tailwind CLI tool

    ```bash=
    npx tailwindcss -i ./src/input.css -o ./dist/output.css --watch
    ```

* ref static css to html

    ```html=
    <head>
        ...
        <link href="/dist/output.css" rel="stylesheet">
    </head>
    ```

* good to dev
