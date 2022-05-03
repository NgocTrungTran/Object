function Mobile(pin, storageArea_1, storageArea_2, storageArea_3) {
    this.pin = pin;
    this.storageArea_1 = storageArea_1;
    this.storageArea_2 = storageArea_2;
    this.storageArea_3 = storageArea_3;

    this.checkOnOrOFF = function () {
        if (pin > 0) {
            return true;
        } else {
            return false;
        }
    }

    this.turnOn = function () {
        alert('The Phone is ON!');
    }
    this.turnOff = function () {
        alert('The Phone is OFF!')
    }
    this.charge = function () {
        while (pin >= 0 && pin < 100) {
            alert(`Charging ${pin}`)
            pin++;
            if (pin == 100) {
                alert('Full battery!');
            }
        }
    }
    this.texting = function () {
        prompt('Import content: ')
    }
    this.sentMassage = function() {
        alert('Sent!')
    }
    this.afterUse = function() {
        return this.pin--;
    }
}