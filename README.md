# Frontend Mentor - Coding bootcamp testimonials slider solution

This is a solution to the [Coding bootcamp testimonials slider challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/coding-bootcamp-testimonials-slider-4FNyLA8JL). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the component depending on their device's screen size
- Navigate the slider using either their mouse/trackpad or keyboard

### Screenshot

![screenshot](./design/desktop-preview.jpg)

### Links

- Solution URL: [Add solution URL here](https://your-solution-url.com)
- Live Site URL: [Add live site URL here](https://your-live-site-url.com)

## My process

### Built with

- Semantic HTML5 markup
- Flexbox
- Mobile-first workflow
- [TailwindCSS](https://tailwindcss.com/) - CSS library
- Vanilla JS

### What I learned

I have learnt to use Tailwind CSS to set background position and background size. To achieve that, I had to extend default theme options, Which is easy to do.

```js
  theme: {
    extend: {
      backgroundPosition: {
        'top-left': 'top left 22%'
      },
      backgroundSize: {
        '75': '75%',
        '45': '45%',
        'quotes-sm': '3.125rem',
      }
    }
  }
```

I also learnt to proportionally increase padding to keep the image container grow out of control at larger screen sizes.

```css
.carousel {
  padding-right: calc((100vw - 1440px) * 0.55 + 94px) !important;
}
```

### Continued development

The implementation of image slider is not up to the standard. Also there is only a little bit of animations. On my next iteration I'll be focusing on two of them.

## Author

- Frontend Mentor - [@Mesbah214](https://www.frontendmentor.io/profile/mesbah214)
