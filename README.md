# Brightbyte - Tech Company Website

A simple multi-page website for a tech company, built with plain **HTML, CSS and JavaScript**. No frameworks, no build tools, no installation. Every file is commented so bugs are easy to find and fix.

## Pages

| Page | File | What it has |
|------|------|-------------|
| Home | `index.html` | Hero section, services and courses preview, call to action |
| About | `about.html` | Company story, beliefs, team |
| Services | `services.html` | Six service cards |
| Courses | `courses.html` | Course cards with category filter buttons |
| Blog | `blog.html` | Blog post cards with live search |
| Contact Us | `contact.html` | Contact form with validation, contact details |

## Features

- Responsive layout (works on phone, tablet and desktop)
- Mobile menu button
- Current page is highlighted in the menu automatically
- Course filter (All / Web / Programming / Security)
- Blog search that filters as you type
- Contact form validation (name, email, message) with error messages
- Footer year updates automatically
- Keyboard-friendly focus outlines

## Folder structure

```
techsite/
├── index.html
├── about.html
├── services.html
├── courses.html
├── blog.html
├── contact.html
├── css/
│   └── style.css      <- all styling
├── js/
│   └── script.js      <- all JavaScript
└── README.md
```

## How to run

1. Unzip the project folder.
2. Double-click `index.html` (or right-click and choose "Open with" your browser).

That is all. No server is needed.

## How to customize

### Change the company name
Search for `Brightbyte` in all `.html` files and replace it with your company name. Do the same for the email, phone and address in `contact.html`.

### Change colors and fonts
Open `css/style.css` and edit the `:root` block at the top:

```css
:root {
  --ink: #10233f;      /* dark navy: text, header, footer */
  --accent: #00a896;   /* teal: buttons and links */
  --highlight: #ffb000;/* amber: small highlights */
}
```

### Add a service, course or blog post
Copy one existing card block and edit the text:

```html
<div class="card">
  <h3>Service name</h3>
  <p>Short description.</p>
</div>
```

- **Course:** keep the classes `card course-card` and set `data-category` to `web`, `programming` or `security` (or add your own and add a matching filter button).
- **Blog post:** keep the classes `card blog-post` so the search works.

### Add a new page
1. Copy any existing `.html` file and rename it, for example `careers.html`.
2. Change the `<title>` and the page content.
3. Add a link to it in the header menu and footer of **every** page.

## Where to look when something breaks

| Problem | Check this |
|---------|------------|
| Layout or colors look wrong | `css/style.css` (sections are numbered at the top of the file) |
| Menu, filter, search or form not working | `js/script.js` (sections are numbered at the top of the file) |
| Wrong text or missing section | The matching `.html` file (look for the comment above that section) |
| Nothing happens at all | Press **F12**, open the **Console** tab, and read the error. It shows the file name and line number. |

Common causes:
- A file name or folder is misspelled (`css/style.css` and `js/script.js` must stay in those folders).
- An `id` or `class` name in the HTML does not match the one used in the CSS or JS.
- A missing closing tag such as `</div>`.

## Known limits

- The contact form only validates and shows a success message. It does **not** send an email. To send real messages, connect it to a backend or a form service (the place to add this is marked in section 6 of `js/script.js`).
- The header and footer are copied into every page. If you change the menu, change it in all six files.
- Team names, blog posts, courses and contact details are sample content.

## Built with

- HTML5
- CSS3 (variables, grid, flexbox, media queries)
- Vanilla JavaScript
- Google Fonts (Inter and Space Grotesk, with fallback fonts if offline)

## License

Free to use and modify for your own projects.
