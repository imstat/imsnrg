var newsfeed=new gfeedfetcher("arXiv", "example3class", "_new")

{% include arxiv_feed_authors.js %}

newsfeed.displayoptions("label datetime author") //show the specified additional fields
newsfeed.setentrycontainer("li") //Display each entry as a paragraph
newsfeed.filterfeed(5, "date", "label") //Show 5 entries, sort by date
newsfeed.init() //Always call this last