---
layout: post
title: Selenium - Unable to add cookie to page
comments: true
---

# Selenium - Unable to add cookie to page

Selenium can be a pain in the butt sometimes.  If you are having trouble running Selenium tests on IE9 because of an `Unable to add cookie to page` error, try the following:

1. Go open Internet Explorer
2. Open internet options
3. Go to the Programs tab
4. Amass all the courage you have to set IE as default browser

That should hopefully fix it.

The root cause is most likely related to this [closed bug](https://code.google.com/p/selenium/issues/detail?id=4307). Essentially, selenium looks for a registry key to determine if the page is in HTML.  If it fails to find the registry key (for some reason), selenium will spit out the error above.

Note, I'm running selenium server 2.32 with IEDriver 2.33.

FWIW.