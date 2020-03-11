# It's zhongjzsb-blog

[![Netlify Status](https://api.netlify.com/api/v1/badges/f0111f58-fcf4-451f-9a3d-4062b9ab619d/deploy-status)](https://app.netlify.com/sites/zhongjzsb/deploys)

## Usage

- To create new **Rmarkdown** file.

  ```shell
  hugo new -k rmd /posts/baobao-posts/xx.rmd
  ```

  This is based on the archetypes.

  ```yaml
  ---
  title: "{{ replace .Name "-" " " | title }}"
  date: {{ .Date }}
  author: Jingyu Bao
  slug: some-slug
  draft: true
  tags:
      - test
  output:
      blogdown::html_page:
          highlight: zenburn
  ---
  ```

- To create new **markdown** file.

  ```shell
  hugo new -k post /posts/baobao-posts/xx.md
  ```

- To render single **Rmarkdown** file in **R**, use

  ```r
  blogdown:::build_rmds('content/posts/path/filename.Rmd')
  ```

## TODO

- [x] Add mail-to option, instead of email icon. Learned from [here](https://github.com/Track3/hermit/issues/30)
- [x] Fixed section by add \_index.md in the posts/baobao-posts/ folder. Learned from [here](https://gohugo.io/content-management/sections/)
- [x] Change the theme color [potential solution](https://discourse.gohugo.io/t/change-highlight-color-in-hermit-theme/20564/10) and [github](https://github.com/Track3/hermit/issues/58)
  > I switched to [hello-friend-ng](https://github.com/rhazdon/hugo-theme-hello-friend-ng) theme with [hello-friend](https://github.com/panr/hugo-theme-hello-friend) formatting style. The reason is that hello-friend provides a more readable table style. Simply copy the `style.css` file to `static/assets/` folder and add `customCSS = ["/assets/style.css"]` into `config.toml`.
- [x] Center the images by

  ```markdown
  <center>
  ![](/images/img.jpg){width=400px height=300px}
  </center>
  ```

  Other options are in [StackOverflow](https://stackoverflow.com/questions/24677642/centering-image-and-text-in-r-markdown-for-a-pdf-report/38074465).

- [x] Fix author missing. Add following into `/layouts/posts/single.html`. The code is copied from `hermit` theme.

  ```html
  {{- with $.Param "author" }}
  <p>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
      class="feather feather-feather"
    >
      <path d="M20.24 12.24a6 6 0 0 0-8.49-8.49L5 10.5V19h8.5z"></path>
      <line x1="16" y1="8" x2="2" y2="22"></line>
      <line x1="17.5" y1="15" x2="9" y2="15"></line></svg
    >{{ . }}
  </p>
  {{- end }}
  ```

- [x] Fix markdown column width. You can use following to reference links. Learned from [here](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet)

  ```markdown
  the website is: [zhongjzsb]

  [zhongjzsb]: https://www.zhongjzsb.com
  ```

  the website is: [zhongjzsb].

  Use `&nbsp;&nbsp;&nbsp;&nbsp;` as inline white space in the table and `Table Formatter` extension in vs code.

  [zhongjzsb]: https://www.zhongjzsb.com

- [x] Math formula does not work in mobile browser. First tried [GoHugo Doc](https://www.gohugo.org/doc/tutorials/mathjax_en/) without luck. Then googled [this site](https://divadnojnarg.github.io/blog/mathjax/) and used the second method to fix this problem.

- [x] Change the post `max-width` to `1000px` in `static/assets/style.css`.

  ```css
  .post {
    width: 100%;
    max-width: 1000px;
    text-align: left;
    padding: 20px;
    margin: 20px auto;
  }
  ```

- [x] Syntax highlight in Rmarkdown YAML.

  ```yaml
  output:
    blogdown::html_page:
      highlight: zenburn
  ```

- [ ] Add Hugo shortcodes from [book theme](https://themes.gohugo.io/hugo-book/) to current site.

  [scss-to-css](https://jsonformatter.org/scss-to-css)

  ```css
  .flex {
    display: flex;
  }
  .flex-auto {
    flex: 1 1 auto;
  }
  .flex-even {
    flex: 1 1;
  }
  .flex-wrap {
    flex-wrap: wrap;
  }
  .justify-start {
    justify-content: flex-start;
  }
  .justify-end {
    justify-content: flex-end;
  }
  .justify-center {
    justify-content: center;
  }
  .justify-between {
    justify-content: space-between;
  }
  .align-center {
    align-items: center;
  }
  .mx-auto {
    margin: 0 auto;
  }
  .text-center {
    text-align: center;
  }
  .hidden {
    display: none;
  }
  .clearfix::after {
    content: "";
    display: table;
    clear: both;
  }

  .markdown-inner > :first-child {
    margin-top: 0;
  }
  .markdown-inner > :last-child {
    margin-bottom: 0;
  }
  .book-expand {
    margin-top: 1rem;
    margin-bottom: 1rem;
    border: 1px solid #e9ecef;
    border-radius: 0.25rem;
    overflow: hidden;
  }
  .book-expand .book-expand-head {
    background: #f8f9fa;
    padding: 0.5rem 1rem;
    cursor: pointer;
  }
  .book-expand .book-expand-content {
    display: none;
    padding: 1rem;
  }
  .book-expand input[type="checkbox"]:checked + .book-expand-content {
    display: block;
  }
  .book-tabs {
    margin-top: 1rem;
    margin-bottom: 1rem;
    border: 1px solid #e9ecef;
    border-radius: 0.25rem;
    overflow: hidden;
    display: flex;
    flex-wrap: wrap;
  }
  .book-tabs label {
    display: inline-block;
    padding: 0.5rem 1rem;
    border-bottom: 1px transparent;
    cursor: pointer;
  }
  .book-tabs .book-tabs-content {
    order: 999;
    width: 100%;
    border-top: 1px solid #f8f9fa;
    padding: 1rem;
    display: none;
  }
  .book-tabs input[type="radio"]:checked + label {
    border-bottom: 1px solid #05b;
  }
  .book-tabs input[type="radio"]:checked + label + .book-tabs-content {
    display: block;
  }
  .book-columns {
    margin-left: -1rem;
    margin-right: -1rem;
  }
  .book-columns > div {
    margin: 1rem 0;
    min-width: 10rem;
    padding: 0 1rem;
  }
  a.book-btn {
    display: inline-block;
    font-size: 0.875rem;
    color: #05b;
    line-height: 2rem;
    padding: 0 1rem;
    border: 1px solid #05b;
    border-radius: 0.25rem;
    cursor: pointer;
  }
  a.book-btn:hover {
    text-decoration: none;
  }
  .book-hint.info {
    border-left-color: #6bf;
    background-color: rgba(102, 187, 255, 0.1);
  }
  .book-hint.warning {
    border-left-color: #fd6;
    background-color: rgba(255, 221, 102, 0.1);
  }
  .book-hint.danger {
    border-left-color: #f66;
    background-color: rgba(255, 102, 102, 0.1);
  }
  ```

## Site Management

- [Google Search Console](https://search.google.com/search-console/about)
- [Google Analytics](https://analytics.google.com/analytics/)

## References

**Official Websites**:

- [hugo](https://www.gohugo.org/theme/casper/)
- [hugo doc](https://gohugo.io/getting-started/)
- [bookdown](https://rachaellappan.github.io/bookdown/)

**Practice**:

- [Alison Hill](https://alison.rbind.io/)
- [github emoji](https://gist.github.com/rxaviers/7360908)
- [hugo best practice](https://github.com/spech66/hugo-best-practices)
- [build hugo theme](https://www.zeolearn.com/magazine/develop-a-theme-for-hugo)

**Free images**:

- [pexels](https://www.pexels.com/)
- [unsplash](https://unsplash.com/)
- [stocksnap](https://stocksnap.io/)

**R**:

- [Rmarkdown-reference](https://rstudio.com/wp-content/uploads/2015/03/rmarkdown-reference.pdf)

**HTML5 and CSS3**:

- [freeCodeCamp](https://www.youtube.com/watch?v=mU6anWqZJcc&t=6748s)

**Styles**:

- [Color schemes generator](https://coolors.co/)

## Acknowledgement

The blog theme is a combination of [hermit](https://github.com/Track3/hermit), [hello-friend-ng](https://github.com/rhazdon/hugo-theme-hello-friend-ng) and [hello-friend](https://github.com/panr/hugo-theme-hello-friend).
