var newsfeed=new gfeedfetcher("arXiv", "example2class", "_new")

{% include arxiv_feed_authors.js %}

newsfeed.displayoptions("label datetime author") //show the specified additional fields
newsfeed.setentrycontainer("li") //Display each entry as a paragraph
newsfeed.filterfeed(100, "date", "label") //Show 9 entries, sort by date
// newsfeed.init() //Always call this last

// var newsfeed=new gfeedfetcher("example2", "example2class", "_new")
// newsfeed.addFeed("Slashdot", "http://rss.slashdot.org/Slashdot/slashdot") //Specify "label" plus URL to RSS feed
// newsfeed.addFeed("Digg", "http://digg.com/rss/index.xml") //Specify "label" plus URL to RSS feed
// newsfeed.displayoptions("label datetime snippet") //show the specified additional fields
// newsfeed.setentrycontainer("div") //Display each entry as a DIV
// newsfeed.filterfeed(6, "label") //Show 6 entries, sort by label
newsfeed.init() //Always call this last
