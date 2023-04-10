# adminer-tailwind
Alternative design for Adminer with Tailwind

## install
Copy adminer.css in dist folder and paste it beside your adminer.php

## dev

### install dependencies
`pnpm i`

### watching & copy mode
Replace COPY_PATH in package.json by a local path (ex: C:\\Users\\me\\Local Sites\\adminercss\\app\\public\\)
`pnpm start`

### watching mode
`pnpm dev` (watch)

### build for production
`pnpm build` (minify)