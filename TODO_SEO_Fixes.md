# SEO Improvements Task List

## Objective: Fix 2 SEO problems
1. Add common keywords to title tags, meta descriptions, and heading tags
2. Add sitemap.xml for better search engine indexing

## Tasks

### Phase 1: SEO Keywords Optimization

- [x] 1.1 Update index.html title tag with more specific keywords
- [x] 1.2 Update index.html meta description with targeted keywords
- [x] 1.3 Update talks.html title tag with AI/RAG keywords
- [x] 1.4 Add meta description to talks.html
- [x] 1.5 Update services.html title tag with AI training keywords
- [x] 1.6 Add meta description to services.html

### Phase 2: Create Sitemap

- [x] 2.1 Create sitemap.xml with all pages
- [x] 2.2 Add robots.txt (optional, but recommended)

### Phase 3: Verification

- [x] 3.1 Verify all changes are correctly implemented
- [x] 3.2 Test sitemap.xml format

---

## Keyword Research Summary

**Target Keywords:**
- Senior Backend Engineer
- Full Stack Developer
- Python Developer
- AWS Developer
- AI/ML Engineer
- Machine Learning
- Generative AI
- LLM Expert
- RAG Technology
- Docker & Kubernetes
- Node.js Developer
- Portfolio

**Page-Specific Keywords:**
- index.html: Portfolio, projects, experience, skills
- talks.html: AI talks, RAG, LLM, Generative AI, technical presentations
- services.html: AI training, machine learning courses, skills development

---

## Files to Modify:
1. `/Users/manish/dev/Portfolio/index.html`
2. `/Users/manish/dev/Portfolio/talks.html`
3. `/Users/manish/dev/Portfolio/services.html`

## Files to Create:
1. `/Users/manish/dev/Portfolio/sitemap.xml`

## Status: ✅ COMPLETED
Last Updated: 2025-01-17

---

## SEO Link Text Fix - 2025-01-17

### Issue Fixed
Links on blog.manishd.in had non-descriptive "Read more" anchor text, which reduces accessibility and SEO effectiveness.

### Files Modified
- `/Users/manish/dev/blog/src/pages/index.astro`

### Changes Made
- Updated line 69: Changed `Read more` to `Read "{post.data.title}"` to create descriptive link text
- This creates unique, descriptive anchor text for each blog post link

### Results
Before:
- `/blog/fb-utis-engagement/` → "Read more"
- `/blog/fastapi-backend/` → "Read more"
- `/blog/rag-basics/` → "Read more"

After:
- `/blog/fb-utis-engagement/` → "Read 'Why Facebook is Finally Asking What You Actually Want to See'"
- `/blog/fastapi-backend/` → "Read 'Building Scalable Backend Systems with Python and FastAPI'"
- `/blog/rag-basics/` → "Read 'Understanding Retrieval-Augmented Generation (RAG)'"

### Benefits
1. ✅ Improved accessibility for screen readers
2. ✅ Better SEO by providing context to search engines
3. ✅ Clearer user understanding of link destination
4. ✅ Descriptive anchor text follows web accessibility best practices

