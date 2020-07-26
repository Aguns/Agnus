### Publish instructions
* Open the app project root
* Open CMD as an Administrator (*Not always required*)
* Run `yarn run generate` or `npm run generate`
* Create a folder for the site
* Copy all files from dist folder and copy to the created folder for the site
* Create a site in IIS and point the dist folder path as a site path and assign the site binding information.
* Assign the **IIS_IUSRS** and **IUSR** permission (*Full control*) to the site folder (*you can add just to the root folder and all subfolder will inherite it*)
* Test the site on the browser 

# Nuxt.js Agnus

[![Netlify Status](https://api.netlify.com/api/v1/badges/5191e66c-a92c-4d42-9c9f-12d48647ee45/deploy-status)](https://app.netlify.com/sites/agnuscrm/deploys)

[![Build Status][build-status]][build-url]

[build-status]:https://travis-ci.org/Aguns/Agnus.svg?branch=master
[build-url]:https://travis-ci.org/Aguns/Agnus

## Getting started

``` bash
# install dependencies
$ npm install

# serve with hot reload at localhost:3000
$ npm run dev

# build for production and launch server
$ npm run build
$ npm start

# generate static project
$ npm run generate
```

## Building and running into containerized version

``` bash
# Build image
$ docker build -t nuxtjs-dashboard .

# Run image in detached mode
$ docker run -p 3000:3000 -d nuxtjs-dashboard

# Get container ID
$ docker ps

# Print application output (continuously)
$ docker logs <container id> -f

# Enter the container
$ docker exec -it <container id> /bin/bash

# Quit the container
$ docker stop <container id>
```


## NuxtJs
NuxtJs is a vue meta Framework to create complex, fast & universal web applications quickly.

## Vuetify
Vuetify is developed exactly according to Material Design spec. Every component is hand crafted to bring you the best possible UI tools to your next great app. The development doesn't stop at the core components outlined in Google's spec. Through the support of community members and sponsors, additional components will be designed and made available for everyone to enjoy.

#### Special thanks
- [NuxtJs](https://nuxtjs.org/) for the wonderful vue framework <3
- [Vuetify](https://vuetifyjs.com/en/) for the beautiful vue framework UI
- [Vuetify Material Admin](https://github.com/tookit/vue-material-admin) 

#### Your Challenge
[Big - Giant](https://dev.to/subs/big-giant-vue-apps-5048) - Vue Apps

