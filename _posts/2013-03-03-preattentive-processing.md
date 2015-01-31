---
layout: post
title: Preattentive Processing
comments: false
category: papers
---

# Preattentive Processing

_Research and Application of the Gestalt Principles_

## Preattentive Processing

Preattentive processing plays an important role in human vision.  An understanding of the fundamental mechanism in which preattentive processing occurs allows designers to design displays with increased quality and quantity of information.  When patterns or groups are identified before conscious attention is directed, preattentive processing is said to have occurred.  This suggests that processing occurs in a rapid, parallel fashion across the visual field {% cite Treisman1985 %}.  Typically, the time it takes for a preattentive task to complete is within 200 to 250ms, and this is accomplished with minimal effort {% cite Healey1993 %}.  These features are said to have a ‘pop-out’ effect {% cite Ware2013 -l 153 %}.  Examples of preattentively processed features that exhibit said effect include shape, color, and proximity.

### The Importance of Preattentive Processing

Preattentive processing is important in many regards.  From a neural network perspective, the ability to decompose, group, and compress the physical signals received by the retina is driven by efficiency.  This is because human attention has only a meager capacity {% cite Zhaoping2006 %}.  From a design perspective, it is often useful to be able to show information ‘at a glance’.  If a mark on a map is required to be instantaneously identified of belonging to a certain type, it should be differentiated from all other marks in a preattentive manner {% cite Ware2013 -l 154 %}.
Furthermore, preattentive processing is crucial in organizing the information-dense field of vision as a whole.

## Gestalt Laws

Gestalt laws provide a clear description of many basic perceptual phenomena of pattern recognition.  According to Koffka, the laws explain how individual elements may be visually organized into structures {% cite Koffka1935 %}.  These psychological principles have influenced many research areas since 1924, including visual screen design {% cite Chang2002 %}.  However, the German psychologists behind the gestalt laws were simply observers; the laws relied heavily on phenomenology and did not sufficiently support their principles with objective data {% cite Kubovy1998 %}.  Although their neurological explanations for these laws have been debunked, the robust laws themselves have withstood the test of time.

### Proximity

One of the major gestalt laws of organizing the visual field is the grouping of stimuli on the basis of proximity.  The law simply states that objects that are close together are grouped together.  This is alternatively called the spatial concentration principle {% cite Slocum1983 %}.  By spatially grouping elements, less time is spent with eye movement and neural processing because information is picked up more readily in foveal vision {% cite Ware2013 -l 181 %}.  According to this law three rows of four black circles are seen in figure 1.

<figure>
	<img src="{{ site.url }}/assets/images/preattentive-dots.png">
	<figcaption>Figure 1: Three rows of four black circles are seen based on the law of proximity</figcaption>
</figure>

The gestalt psychologists never demonstrated whether it is the physical proximal stimuli on the retina, or the perceived proximity that governs this principle {% cite Rock1964 %}.  Later research effectively showed that proximal grouping can in fact be driven purely from a bottom-up, preattentive process, as demonstrated by Compton & Logan’s modifed version of the van Oeffelen and Vos’s code algorithm {% cite Compton1993 %}.
When proximity is the sole differentiating feature, the gestalt law of proximity stands; objects that are clustered together are grouped.  Making design decisions based simply on visual aesthetics or “what looks good” should never supersede this principle.  A common design practice therefore is to place symbols representing related information close together.

### Similarity

The gestalt law of similarity state that objects that are similar in features such as color, orientation, and shape, are grouped together.  Koffka demonstrated that grouping by shape is stronger than grouping by color by contrasting the effectiveness of each similarity feature to that of proximity.  Even when color and shape similarity is not in competition with proximity grouping, grouping by shape similarity had a stronger effect {% cite Koffka1935 %}.

It would of course be a mistake to conclude that one principle is invariably stronger than the other.  More recent research has demonstrated that grouping of common color is actually more powerful than grouping by common shape.  Examination of similarity and proximity showed persuasive evidence that under certain conditions, both common color and shape were shown to override grouping by proximity {% cite Quinlan1998 %}.  What this seems to suggest is that there is an intimate relationship between the features of similarity (color, shape) and proximity, and that it is important to consider the effects of each individual effect, and its conjoint effect when making design decisions.  This is especially the case when designing grid layouts of a data set; the use of low-level visual similarity channel properties such as color are recommended {% cite Ware2013 -l 182 %}.

### Similarity and Proximity

When the proximity feature is conjoined with other features, there are cases where the principle breaks down.  For example, in the figure 2, the proximity principle predicts grouping into columns, yet for some, rows of dots are seen; the row-column perception seems to fluctuate.  This is because the proximity and similarity principles are acting in opposition.

<figure>
	<img src="{{ site.url }}/assets/images/preattentive-proximity-color.png">
	<figcaption>Figure 2: Proximity and color similarity acting in opposition</figcaption>
</figure>

For simple dot lattice patterns, Kubovy & Holcombe has shown that the relationship is a decaying exponential function.  Additionally, they have found that the features have an additive property; the overall effect is the sum of each individual effect {% cite Kubovy2008 %}.  Unfortunately, to generalize their findings, strength functions for more complex feature patterns must be discovered {% cite Kubovy1998 %}.  This example has shown that specific types of redundant coding can lead to a decrease in visual search performance for certain elements {% cite Ware2013 -l 160 %}.

### Orientation

Another similarity feature that is worth discussing is the feature of orientation.  Orientation is one of the basic features processed at the first, parallel processing stage.  When exploring the manner in which orientation controls perceptual grouping, Beck found that “differences in line orientation could be as effective as differences in brightness in segregating two groups of elements” {% cite Beck1967 %}.  Furthermore, Beck has shown that line orientations are more readily grouped if the direction of the component lines is 45 or 135 degrees, and that vertical and horizontal lines do not readily facilitate grouping.

This seems to correlate with the visual system’s physical structure; according to the Gabor model of V1 receptive fields, V1 neurons have an orientation tuning of at least 30 degrees {% cite Ware2013 -l 204 %}.  Thus symbol and glyph element orientations should be separated by at least 30 degrees (and optimally, 45 degrees) for a texture field to be distinct from an adjacent texture field.

### Closure and Common Region

A common region is a terminology used by Palmer to describe the region within an enclosed contour, and is a stronger organizing principle than proximity {% cite Palmer1992 %}.  Ware explains, “when a closed contour is seen, there is a strong perceptual tendency to divide regions of space into inside or outside the contour” {% cite Ware2013 -l 186 %}.  Essentially, elements within a common region or a closure are grouped together.  This occurs regardless of the number of elements contained within it {% cite Donnelly1991 %} and can be “dominated by the smallest background area” {% cite Palmer1992 %}.

## Redundant Coding

Redundant coding, that is, adding visual redundancy to elements, can lead to a decrease in visual search performance for certain elements {% cite Ware2013 -l 160 %}, as seen above in figure 2.  This is because conjunction searches are generally not preattentive, although some combinations of features have been proven to be preattentive, such as luminance and shape {% cite Ware2013 -l 161 %}.   Feature Integration Theory explains the difference between disjunctive and conjunctive search {% cite Treisman1980 %}.

## Feature Integration Theory

Feature Integration Theory (FIT) is a theory that seeks to explain the phenomena of preattentive processing {% cite Treisman1980 %}.  According to the theory, the perceptual system is divided into separate maps, each of which records the presence of different visual features and the location of the features it represents.  Looking for a target that differs from its distractors by a single factor, such as shape, requires consulting of a single feature map.  However for conjunctive search, focal attention must be give to combine and compare multiple features maps.  This joint search is what causes conjunctive search to be inefficient {% cite Smith2007 -l 132 %}.  Observers may also report illusory conjunctions when the brain fails to combine and compare maps, perhaps due to attentional overload {% cite Treisman1982 %}.

## Application of Research: [Rio 2016](rio2016.com)

The Rio 2016 Olympic website was analyzed and reviewed based on the principles of proximity, similarity, and common region.  The site is not a time-sensitive site, but is nevertheless densely packed with information.  The site’s aim to excite, inspire, and spread the knowledge of Rio is done through a mixture of text and graphics, all organized using vibrant colors, lines, white space, and shapes.  It is critical for the website to display these information in proper structure.

### Proximity

The sections of the homepage under the main banner are grouped together using proximity.  In general, photo images that are spatially close to corresponding text are clustered as a whole.  An example of this is the “News”, “Interview”, and “Rio de Janeiro” section.  The numbered list under the “Most Viewed” section is also identified as a block due to close proximity and alignment.  In fact, the border between each list item can be removed to reduce redundancy (Figure 3).

<figure>
	<img src="{{ site.url }}/assets/images/preattentive-proximity.png">
	<figcaption>Figure 3: Removing the bottom border of each item list still yields the same grouping effect due to close proximity</figcaption>
</figure>

Each individual section is grouped using white space, albeit not in an optimal fashion.  Take for example, the goalball player under the “Paralympic Sports” section.  Based on proximity, the player is falsely associated with the “Time Brasil” section, especially considering similarity in skin tone and the orange color-coding of the “Time Brasil” section.  The “Learn More” call to action button is equidistant from the goalball player and the “Rio de Janeiro” section tag, yet the button is related to the latter, again, due to similarities in color.  This supports Quinlan & Wilton’s stance that color similarity overrides proximity.  An adjustment in the distance between each section is recommended to clearly separate out blocks of elements.  Alternatively, a different color, or a common background can be used, although redundant coding should be avoided.

<figure>
	<img src="{{ site.url }}/assets/images/preattentive-comparison.png">
	<figcaption>Figure 4: Alternative designs are compared against the original design (A) using different principles B) Increased distance between sections C) alternate color (purple) D) common background (gray)</figcaption>
</figure>

### Similarity

Each individual section on the homepage is color coded in hues of orange, green, or blue.  It is easy to differentiate between the “Olympic Sports” section in green and the “Time Brasil” section in orange.  Shape similarity is also used to group section headings, although its strength is weakened by color similarity and lack of proximity.

The countdown days can spark confusion.  The law of proximity states that the two countdown numbers go together, yet color similarity yields different groupings; the Paralympic countdown is correctly bucketed with the “Time Brasil” section below, but the Olympic countdown is perhaps grouped with “Interviews” because of matching text color (blue).  This is similar to the fluctuation problem seen in figure 2.  A solution would be to color code both countdowns to be the same (orange).

<figure>
	<img src="{{ site.url }}/assets/images/preattentive-countdown.png">
	<figcaption>Figure 5: By making the countdown colors the same, it is much easier to differentiate the two sections</figcaption>
</figure>

### Closure and Common Region

The site takes use of closure and common region to group elements on the page.  The “Photos” and “News” sections are separated out from the rest of the sections because it has a common background of gray.  Proximity would state that the “Photos” header and headline are separated from the group of photos near it, yet they are perceptually labeled as a single group.  This supports the notion that common region is a much more powerful feature than proximity or similarity as demonstrated by Palmer {% cite Palmer1992 %}.  The “Rio 2016 and You” footer section at the bottom of the homepage exhibits the same grouping mechanism.  Sections within the footer section are split based on closure, although the enclosing line itself is only part present.

## Conclusion

Preattentive processing is an important component of the visual system.  As illustrated with Rio 2016 Olympic website, the gestalt principles of proximity, similarity, closure and common region can be used to easily capture information ‘at a glance’.  Confusion can ensue, if the improper feature, or a combination of features, is applied.  Designers should be aware of these principles to help organize the visual field without directed, conscious attention.

## References

{% bibliography --cited %}
