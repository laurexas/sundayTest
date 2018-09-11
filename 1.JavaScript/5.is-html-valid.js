// Write a function that takes a string of html, and determines if the order of the html tags is valid.
// It should return true if the string is valid, and false if it's invalid.
// All input strings will be nonempty, and will only consist of these html tags: <div><span><h1>.
//
// What is considered Valid? A string of html tags is considered valid if all tags are closed with the correct tag.
//
// Examples
// "<div></div>"   =>  True
// "<div><span></span></div>"   =>  True
// "<div></span>"       =>  False
// "<div>"     =>  False
// "<div><div><span></span></div></h1>" =>  False

function isHTMLValid(html) {
    var openingTags, closingTags;
    html = html.replace(/<[^>]*\/\s?>/g, '');      // Remove all self closing tags
    html = html.replace(/<(br|hr|img).*?>/g, '');  // Remove all <br>, <hr>, and <img> tags
    openingTags = html.match(/<[^\/].*?>/g) || [];        // Get remaining opening tags
    closingTags = html.match(/<\/.+?>/g) || [];           // Get remaining closing tags
  
    if(openingTags.length === closingTags.length){
        var openingTagsStr = openingTags.toString();
        var closingTagsStr = closingTags.reverse().toString().replace(/\//g, "");
        if(openingTagsStr === closingTagsStr) {
            return true;
        } else {
            return false;
        }
    } else {
        return false;
    }
}
