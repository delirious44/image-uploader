# This is the structure of the project

* css  -- / -- main.css
* img  -- / -- all images
* js   -- / -- all js
* pug  -- / -- includes
* --------/------------
* sass -- / -- 0-plugins -- bitters -- (Font-stacks, variables, typogrophy)
* ------------ bourbon   -- (Collection of sass mixens, addons, etc)
* ------------ (Other third party plugins, normalize.css, skeleton grid)
* ------------ 1-base
* ------------ 2-modules -- (These make direct changes to a page)
* ------------ 3-partials 
* ------------ 4-layouts -- 


# Explaining Sass Structure

* Plugins - These are similar to mixins. 
* base - 
* Partials - These seperate code into small modular sections which can then be
  included into the partials-dir file. 
* Layouts - A layout is the general file for a page. (ie; Homepage, Contact page, etc)

* Each folder (0-plugins, 1-base, 2-modules, 3-partials, 4-layouts) has a *-dir.sass file.
* Which acts as the container. Here is an example: header.sass, navbar.sass, and 
footer.sass are all partials. They are imported into partials-dir.sass, which is then imorted 
to main.sass, which is transpiled into the main.css file

* Folders
* /css/--------/sass/---------/Patrials/
                                             <-- header.sass
main.css <-- main.sass <-- partials-dir.sass <-- navbar.sass
                                             <-- footer.sass

#----------------------------------------------------------------------------------------------

# Explaining Pug Structure

* Similar to the sass structure.
* Folders
* /project/------/pug/------/includes/
index.html <-- index.pug <-- header.pug 

* if header.pug contains this code
    h1 Hello - I am from header
* Then it will be included into index.pug, which is then transpiled into an html file: index.html

So index.html will have <h1> Hello - I am from header <h1>


