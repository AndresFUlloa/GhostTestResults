describe('Los estudiantes under monkeys', function() {
    it('visits los estudiantes and survives monkeys', function() {
        cy.visit('https://losestudiantes.co');
        cy.wait(1000);
        randomEvent(10);
    })
})
//
var events = ['click', 'text'];

function getRandomInt(min, max) {
	min = Math.ceil(min);
	max = Math.floor(max);
	return Math.floor(Math.random() * (max - min)) + min;
}

function getRandomString(){
	var letters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789áéíóúÁÉÍÓÚüÜñÑ';
	var value = '';
	for(var i = 0; i < 10; i++){
		value += letters.charAt(getRandomInt(0, letters.length));
	}
	return value;
}

function getTag(eventType){
	if(eventType == "click") return "a, button";
	if(eventType == "text") return "input, textarea";
	if(eventType == "combo") return "select";
}

function randomClick(monkeysLeft) {
    var monkeysLeft = monkeysLeft;
    if(monkeysLeft > 0) {
        cy.get('a').then($links => {
            var randomLink = $links.get(getRandomInt(0, $links.length));
            if(!Cypress.dom.isHidden(randomLink)) {
                cy.wrap(randomLink).click({force: true});
                monkeysLeft = monkeysLeft - 1;
            }
            cy.wait(1000);
            randomClick(monkeysLeft);
        });
    }   
}

function randomEvent(monkeysLeft){
	var eventType = events[getRandomInt(0, events.length)]
	var isTagPresent = true;
	
	if(monkeysLeft > 0 && isTagPresent){
		try{
			cy.get(getTag(eventType)).then($tags =>{
				var randEv = $tags.get(getRandomInt(0, $tags.length));
				if(!Cypress.dom.isHidden(randEv)){
					if(eventType == 'click')
						cy.wrap(randEv).click({force: true});
					else if(eventType == 'text')
						cy.wrap(randEv).type(getRandomString(), {force:true});
					monkeysLeft = monkeysLeft - 1;
				}
				cy.wait(1000);
				randomEvent(monkeysLeft);
			});
		}
		catch(err) {
		  cy.log(err.message);
		}
	}
}


