// Store this class outside the standard jQuery(document) function so it can be accessed by my other js file
var jq = $.noConflict();
class List {
    constructor() {
        // Pretty unnessecary constructor as both these values always get reinitialized later
        this.list = jq("ul#list");
        this.currentButton = null;
    }

    setCurrentButton(currentButton) {
        this.currentButton = currentButton;
        this.updateList();
    }

    updateList() {
        // Use GET request with one query to specify WHERE the php file needs to look to get current projects stored
        jq.get("https://flippinnublet.com/main_nspace/src/api/get_directories.php", {
            type: this.currentButton.attr("id")
        },
        function(data, status) {
            this.list = jq("ul#list");
            if (status == "success") {
                // Clear all existing <li> tags in the <ul> tag
                this.list.empty();
                let dataParse = JSON.parse(data);
                for (const [key, value] of Object.entries(dataParse)) {
                    var text = "<li class=\"l-item\""
                    // For every directory returned, check if the file stored name was obtainable. If not, do the directory name
                    // Directory names are saved as ID's for when descriptions need to be fetched from txt files
                    if (value == "noname") {
                        text += "id=\"" + key + "\">" + key + "</li>";
                    } else {
                        text += "id=\"" + key + "\">" + value + "</li>";
                    }
                    this.list.append(text);
                }
                /* Each list item is given it's own click event listener for the descriptions. This is where the directory name as ID is so important
                it allows me to renavigate through the big directories to find my description files super easily*/

                // Self reminder to add individual span elements into the <li> tags for better clicking hitboxes

                jq("li.l-item").click(function() {
                    console.log(jq(this).attr("id"));
                })
            } else {

                // Self reminder to add a system that auto reruns the HTTP request with some delay if this is triggered to potentially account for apache getting overloader
                // Any other errors related to either php or my directory system will be handled by php and the code above

                alert("Failure");
            }
        });
    }
}