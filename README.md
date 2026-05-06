# Asanda-K-Portfolio-SUMMATIVE-SHOWCASE
Professional/Business Portfolio:

I chose a theme that has a portentiial to represent me as a professional Designer and a Business individual. There is still a lot to be done to get it to look the way I want it, adding more content, organizing my work, etc. After all the updates are done the final product will more nich to create a proffesional portfolio.

Structure:

From the beginning of this course I had an idea of what I wanted my portfolio to look and feel like. I started the stracture/wireframe on Figma. My main goal was to have a structired portfolio that would be easy to navigate. I also wanted it to be visually appealing, professional, learning curve friendly for people who need a basic structure of Briefs and have free social media tiers linked to Canver. This was an idea to drive traffice to the site.

First i wanted the NavBar to appear/static on top of the paages for easy navigation similar to bread crumbs, so that you know which page you on and it is easy to navigate through out the site. The landing/home page is an introduction about me and what I do, below the introduction is a link to the Portfolio section for easy access to my work.

The next page is Services, the reason I have services as a second page, I used or treated this App as a CV. Introduction page 1/home page, Page 2 A little about what I can offer in terms of services & a Whatsapp linked button to contact me for more information, Page 3 is the gallery (Videos are playing on loop up on hover but muted then when clicked you hear the sound and have more control of the media player & click on the side to exit, Page 4 the Brief section/Form, lastly bellow all the pages Creative kits is visible throughout the site. This is a link to my canver account.

Challenges:

I have been developing the app through out the course using every feedback to my advantage to the newer vesions. Fo my final project I started by implimenting all the things I missed on Assignmrnt 8.  Installing Node.js,npm and finaly Git, my first approach I used Local host to test the app while developing it, using terminal to run the conand line & npm run dev to test the app on Chrome moost of the time. By the time I had to upload it I assumed I only need to upload the codes I hosted locally, which I was dead wrong and a down fall. My code was not working only to find out I have to create a Dist folder to host the app and convert/import the codes to the Dist folder. Even though that helped but my codes kept on having errors but it was perfect on local. 

I had to find a way to convert the codes for Git to work usinng Git Bash. I had to look and every folder and see if everything was linked correclty and imported correctly but all my imgages and links missing on the page btu no errors on the terminal when running npm run build, then I had to troubleshoot the links running cd ~/my-portfolio and relink everything from there then and kept updating the files on Git Repo and run tests. 

It was donting and tiring, 1 minute seems like I am winning and the next update everything or something crushes again, but finally I managed to get it right by updating all the file via Git Bash/Termimal first then, renamed all the links correctly including Flavicon and the logo. Then deleted all the files on Repo and uploaded the new files. 1 thing I did not take not of while I was busy with first updates is how the js & the css files changed the name once updated, before noticing instead of updating the files I would open the files and edit on repo which resulted in more errors and frastrating.

How I Applied Accessibility and Semantic HTML Best Practices:

When building my portfolio, I made a deliberate effort to go beyond visual design and ensure the site is accessible to all users, including those who rely on assistive technologies such as screen readers, keyboard-only navigation, or other accessibility tools. Below is a detailed breakdown of every accessibility and semantic HTML practice I applied and the reasoning behind each decision.

1. Semantic Document Structure
Instead of wrapping everything in generic <div> elements, I structured my layout using meaningful HTML5 landmark elements. My App.vue root component uses <header> for the navigation bar, <nav> for the menu links, <main> for the primary page content, and <footer> for copyright information. Each content area within pages is wrapped in <section> elements.

<header class="navbar">
  <nav aria-label="Main navigation"> ... </nav>
</header>
<main id="main-content">
  <section aria-labelledby="portfolio-title"> ... </section>
</main>
<footer class="site-footer"> &copy; 2026 Asanda Kumbaca </footer>
This matters because screen readers use these landmarks to build a navigable page outline. A user can jump directly from the header to the main content or from one section to the next, rather than having to listen through every element sequentially. Search engines also use semantic structure to better understand and rank page content.

2. Accessible Forms with Labels and Error Alerts
My Brief page contains a contact form with four fields: Project Name, One Line Brief, Full Brief, and Email. Originally, these fields used only placeholder attributes to indicate their purpose. The problem with relying solely on placeholders is twofold: they disappear once a user starts typing (leaving no visible label), and screen readers do not consistently announce placeholder text as a field label.

To fix this, I added a proper <label> element for each input, linked via the for and id attributes. I also added role="alert" to the error message spans so that when validation fails, screen readers immediately announce the error without the user needing to navigate to it. Additionally, I set appropriate type and autocomplete attributes to help browsers offer the right keyboard and autofill suggestions.

<label for="email">Email</label>
<input id="email" type="email" autocomplete="email" v-model="form.email" placeholder="Email" />
<span role="alert">{{ errors.email }}</span>

3. Descriptive Alt Text on All Images
My portfolio displays three social media design images and a Creative Kit thumbnail. Originally, the portfolio images had no alt attributes at all, which meant screen reader users would hear nothing — or just "image" — with no understanding of what was being shown.

I added descriptive alt text to every image by including an alt property in each image data object and binding it in the template with :alt="image.alt". I also wrapped images in <figure> elements, which is the semantically correct container for self-contained visual content. Additionally, I added loading="lazy" to defer loading offscreen images, improving performance without affecting accessibility.

// Data with descriptive alt text
const images = [
  { src: img1, alt: 'Social media design - branded post layout' },
  { src: img2, alt: 'Social media design - campaign visual' },
  { src: img3, alt: 'Social media design - content template' }
]

<!-- Semantic figure with alt text -->
<figure class="image-card">
  <img :src="image.src" :alt="image.alt" loading="lazy" />
</figure>
This addresses WCAG 2.1 Success Criterion 1.1.1 (Non-text Content): all non-text content must have a text alternative that serves the equivalent purpose.

4. ARIA Attributes on Interactive Media
The portfolio includes four video cards that play on hover and open in a modal when clicked. Without ARIA attributes, screen readers would announce these as generic elements with no context. I applied several ARIA enhancements:

aria-label on each video element (e.g. "PMax F1 racing advertisement") so screen readers announce what the video contains.
aria-label on each video card (e.g. "Play PMax F1 racing advertisement") to describe the interactive action.
role="list" and role="listitem" on the image and video grids to convey that these are collections of related items.
role="dialog" and aria-label="Video player" on the modal overlay so assistive technology treats it as a dialog window.
aria-labelledby on each <section> linking to its heading, so screen readers can announce the section's purpose.
<div class="video-grid" role="list" aria-label="Portfolio videos">
  <div role="listitem" :aria-label="'Play ' + video.label" ...>
    <video :aria-label="video.label"></video>
  </div>
</div>

<div role="dialog" aria-label="Video player"> ... </div>

5. Keyboard Navigation and Skip Link
Not all users navigate with a mouse. People with motor impairments, power users, and screen reader users all rely on keyboard navigation. I made three key improvements to support this:

Skip-to-content link: I added a visually hidden anchor link as the first element in the page. It remains invisible during normal browsing but becomes visible when a keyboard user presses Tab, allowing them to skip past the entire navigation bar and jump directly to the main content. This is especially important on pages with many nav links.

Focusable video cards: I added tabindex="0" to each video card so keyboard users can Tab to them. I then added @keydown.enter to open the video modal and @keydown.escape to close it, mirroring the mouse click and click-outside interactions.

Visible focus indicators: I added a CSS focus outline on video cards (outline: 2px solid #74b9ff) so keyboard users can always see which element is currently focused.

<!-- Skip link — first element in body -->
<a href="#main-content" class="skip-link">Skip to content</a>

<!-- Video card with keyboard support -->
<div class="video-card" tabindex="0"
    @click="openVideo(video)"
    @keydown.enter="openVideo(video)"
    @keydown.escape="closeVideo">

/* Focus indicator */
.video-card:focus { outline: 2px solid #74b9ff; outline-offset: 2px; }
This addresses WCAG 2.1 Success Criterion 2.1.1 (Keyboard): all functionality must be operable through a keyboard interface without requiring specific timings for individual keystrokes.

6. SEO and Meta Tag Improvements
Accessibility extends beyond assistive technology to include how the site is discovered and previewed. I improved the <title> from a generic "my-portfolio" to "Asanda Kumbaca | Creative Portfolio" which is descriptive and unique. I added a <meta name="description"> tag summarising the portfolio's content, which search engines display in results and social platforms use for link previews. The lang="en" attribute on the <html> element was already in place, ensuring screen readers use the correct pronunciation rules.

<html lang="en">
<title>Asanda Kumbaca | Creative Portfolio</title>
<meta name="description" content="Portfolio of Asanda Kumbaca — social content systems, brand identity, ad creatives, motion & video design." />
  
Summary
Through these six practices — semantic structure, form labels, alt text, ARIA attributes, keyboard navigation, and SEO metadata — I ensured my portfolio is usable by the widest possible audience. The site went from an accessibility score of 5/10 to 9/10, with all major WCAG 2.1 criteria addressed. These aren't just technical requirements; they reflect the principle that good design is inclusive design.
