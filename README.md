# It's zhongjzsb-blog

[![Netlify Status](https://api.netlify.com/api/v1/badges/f0111f58-fcf4-451f-9a3d-4062b9ab619d/deploy-status)](https://app.netlify.com/sites/zhongjzsb/deploys)

## TODO

- [x] Add mail-to option, instead of email icon. Learned from [here](https://github.com/Track3/hermit/issues/30)
- [x] Fixed section by add _index.md in the posts/baobao-posts/ folder. Learned from [here](https://gohugo.io/content-management/sections/)
- [x] Change the theme color [potential solution](https://discourse.gohugo.io/t/change-highlight-color-in-hermit-theme/20564/10) and [github](https://github.com/Track3/hermit/issues/58)
  > I switched to [hello-friend-ng](https://github.com/rhazdon/hugo-theme-hello-friend-ng) theme with [hello-friend](https://github.com/panr/hugo-theme-hello-friend) formatting style. The reason is that hello-friend provides a more readable table styple. Simply copy the `styple.css` file to `static/assets/` folder and add `customCSS = ["/assets/style.css"]` into `config.toml`.
- [x] Center the images by
    ```markdown
    <center>
    ![](/images/img.jpg){width=400px height=300px}
    </center>
    ```
    Other options are in [StackOverflow](https://stackoverflow.com/questions/24677642/centering-image-and-text-in-r-markdown-for-a-pdf-report/38074465).
- [ ] Fix author missing.
- [x] Fix markdown column width. You can use following to reference links. Learned from [here](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet)
    ```
    the website is: [zhongjzsb]

    [zhongjzsb]: https://www.zhongjzsb.com
    ```
    the website is: [zhongjzsb].

    Use `&nbsp;&nbsp;&nbsp;&nbsp;` as inline white space in the table and `Table Formatter` extension in vs code.

    [zhongjzsb]: https://www.zhongjzsb.com

- [ ] math formula does not work in mobile browser.

## Site Management

- [Google Search Console](https://search.google.com/search-console/about)
- [Google Analytics](https://analytics.google.com/analytics/)

## References

- [hugo](https://www.gohugo.org/theme/casper/)
- [hugo doc](https://gohugo.io/getting-started/)
- [bookdown](https://rachaellappan.github.io/bookdown/)
- [workflow](https://rstats.wtf/project-oriented-workflow.html)
- tidyverse glue
- [github emoji](https://gist.github.com/rxaviers/7360908)
- [hugo best practice](https://github.com/spech66/hugo-best-practices)

Free images:
- [pexels](https://www.pexels.com/)
- [unsplash](https://unsplash.com/)
- [stocksnap](https://stocksnap.io/)

## Acknowledgement

The blog theme is a combination of [hermit](https://github.com/Track3/hermit), [hello-friend-ng](https://github.com/rhazdon/hugo-theme-hello-friend-ng) and [hello-friend](https://github.com/panr/hugo-theme-hello-friend).
