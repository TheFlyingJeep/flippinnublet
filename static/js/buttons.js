// Since this is the main js file, this is where 
jQuery(document).ready(function( $ ) {
    class Buttons {
        constructor() {

            // Storing the buttons and the border objects separately allows me to individually alter each one if I want separate effects in the future

            this.projBut = $("#projects");
            this.gameBut = $("#games");
            this.animBut = $("#animations");
            this.abmeBut = $("#about");
            this.projBord = $("#projB");
            this.gameBord = $("#gameB");
            this.animBord = $("#animB");
            this.abmeBord = $("#abmeB");
            this.currentBord = this.projBord;
            this.currentButton = this.projBut;

            // Project list should only ever be altered when a button stored here is pressed, hence the List object with the AJAX requests is stored here for use.

            this.listObj = new List();
            this.update();
            this.projBut.on("click", () => {
                this.currentBord = this.projBord;
                this.currentButton = this.projBut;
                this.update();
            });
            this.gameBut.on("click", () => {
                this.currentBord = this.gameBord;
                this.currentButton = this.gameBut;
                this.update();
                
            });
            this.animBut.on("click", () => {
                this.currentBord = this.animBord;
                this.currentButton = this.animBut;
                this.update();
                
            });
            this.abmeBut.click("click", () => {
                this.currentBord = this.abmeBord;
                this.currentButton = this.abmeBut;
                this.update();
                
            });
        }

        update() {

            // Set all borders to default, then set the one currently saved as actually visible via width

            this.listObj.setCurrentButton(this.currentButton);
            // Bottom border width is used since the buttons are in container divs to separate them top and bottom so the vertical alignment does not change when the border does
            this.projBord.css("border-bottom-width", "0px");
            this.gameBord.css("border-bottom-width", "0px");
            this.animBord.css("border-bottom-width", "0px");
            this.abmeBord.css("border-bottom-width", "0px");
            this.currentBord.css("border-bottom-width", "4px");
        }
    }
    var buttons = new Buttons();
});