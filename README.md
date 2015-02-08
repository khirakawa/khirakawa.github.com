Blog
====

This is Ken's blog.  It is built using [Jekyll](http://jekyllrb.com/).


### Installation

To get started, first install Jekyll.

`gem install jekyll`

Then clone this blog repo and install dependencies.

```
git clone https://github.com/khirakawa/khirakawa.github.com.git
cd khirakawa.github.com
bundle install
npm install
```

### Development

If changing styles, watch for sass changes:

`sass --watch assets/css/style.scss`

Finally, build and serve the blog:

`jekyll serve`

### Deployment

To deploy the site, run gulp:

`gulp deploy`
