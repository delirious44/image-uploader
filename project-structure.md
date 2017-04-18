# This is the structure of the project - View in Raw Format

# Sass structure
sass/
|
|-- plugins/
|   |-- bitters/         # Scaffold styles, variables and structure.
|   |-- bourbon/         # A simple and lightweight mixin library for Sass.
|   |-- normalize.sass   # Css Reset
|   |-- skeleton.sass    # A dead simple responsive grid
|   |-- plugins.sass     # Include to get all partials
|-- modules/              
|   |-- buttons.scss     # buttons
|   |-- figures.scss     # figures
|   |-- grids.scss       # grids
|   |-- typography.scss  # typography
|   |-- reset.scss       # reset
|   |-- modules-dir.sass # Include to get all modules
|-- partials/            # Breaking the main sass files into smaller modular sections
|   |-- header.sass      
|   |-- footer.sass      
|   |-- partials.sass    # Include to get all partials
|-- layouts/             
|   |-- home.sass
|   |-- about.sass
|   |-- layouts-dir.sass # Include to get all layouts
|   ...
|
|-- vendor/               # CSS or Sass from other projects
|   |-- fontawesome.io/
|   |-- jquery.ui.core/
|   ...
|
`-- main.scss            # primary Sass file which is made up of each plugins-dir.sass, modules-dir.sass, partials-dir.sass, etc.


# Pug structure

Pug/
|
|-- includes/          # Includes dir, each .pug file can be included into the index.pug file to be transpiled into index.html
|   |-- header.pug     # Include to get all modules
|   |-- about.pug      # Module name
|   |-- footer.pug     # Etc...
|   ...
|
`-- index.pug          # Primary Pug file use `include includes/filename`


