class Telephone {
    constructor() {
        this.phoneNumbers = [];
        this.observers = []; 
    }

    
    addPhoneNumber(number) {
        this.phoneNumbers.push(number);
        console.log(`Added ${number} to the list of phone numbers.`);
        this.notifyObservers('add', number);
    }

    
    removePhoneNumber(number) {
        const index = this.phoneNumbers.indexOf(number);
        if (index !== -1) {
            this.phoneNumbers.splice(index, 1);
            console.log(`Removed ${number} from the list of phone numbers.`);
            this.notifyObservers('remove', number);
        } else {
            console.log(`${number} is not in the list of phone numbers.`);
        }
    }

    
    dialPhoneNumber(number) {
        if (this.phoneNumbers.includes(number)) {
            console.log(`Now Dialing ${number}...`);
            
        } else {
            console.log(`Cannot dial ${number}. Number not found in the list of phone numbers.`);
        }
    }

    
    addObserver(observer) {
        this.observers.push(observer);
    }

    
    notifyObservers(action, number) {
        this.observers.forEach(observer => observer(action, number));
    }
}


const telephone = new Telephone();


function phoneListObserver(action, number) {
    console.log(`Observer: Phone number ${number} was ${action}d.`);
}


telephone.addObserver(phoneListObserver);


telephone.addPhoneNumber("08069442635");
telephone.addPhoneNumber("09126488097");


telephone.removePhoneNumber("09126488097");


telephone.removePhoneNumber("08066442635");


telephone.dialPhoneNumber("08069442635");