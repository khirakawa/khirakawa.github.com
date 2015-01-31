---
layout: post
title: Load Disqus on localhost
comments: true
category: posts
---

# Load Disqus on localhost

Do you get a `We were unable to load Disqus` error when loading Disqus on localhost?  The [top Google results](https://www.google.com/search?q=load+disqus+on+localhost) will tell you that you need to enable the following flag in `<head>`:

{% highlight javascript %}

var disqus_developer = 1; // this would set it to developer mode

{% endhighlight %}

Unfortunately, I had no luck with such flag.  I can't find it in any of Disqus's documentation either, so my bet is that the flag was deprecated.

You can instead set the `disqus_url` config param to point to the correct site URL.

{% highlight javascript %}

{% raw %}
// jekyll syntax.
// This evaluates to http://kenhirakawa.com/load-disqus-on-localhost
// for this page
var disqus_url = '{{ site.url }}{{ page.url }}';
{% endraw %}

{% endhighlight %}

Now when you load your site via localhost, Disqus will match the `disqus_url` param with your registered site URL.  If they match, Disqus will load. If you leave the parameter undefined, the script will use `window.location.href` instead, which evaluates to 'localhost'.  Obviously, 'localhost' does not match your site URL, which explains why Disqus didn't load on localhost in the first place.

One more thing that made me trip was the website URL format under the Site Identity settings.  I had it set to `http://www.kenhirakawa.com`, when it should have been just `http://kenhirakawa.com`.  The syntax is documented [here](http://help.disqus.com/customer/portal/articles/472007-i-m-receiving-the-message-%22we-were-unable-to-load-disqus-%22), but I'd wish they'd just client-side validate the field.

Hope this helps anyone having trouble loading Disqus on localhost!
