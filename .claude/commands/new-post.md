---
description: Create a new blog post or content page
allowed-tools: [Write, Edit, LS]
---

# Create New Post

Create a new MDX content file in the appropriate location.

**Usage:** `/new-post <title> [folder]`

**Arguments:**
- `title`: The title of the post (will be slugified for filename)
- `folder`: Optional folder under app/content/ (defaults to root)

**Examples:**
- `/new-post "My New Article"` → Creates `app/content/my-new-article.mdx`
- `/new-post "Deep Dive" going-deep` → Creates `app/content/going-deep/deep-dive.mdx`

Create a new MDX file with the title "$ARGUMENTS" and set up the basic structure with frontmatter and heading.