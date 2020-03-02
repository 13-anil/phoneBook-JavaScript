/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
class Person {

    constructor(lastname, firstname, phone, birthyear) {
        this._lastname = lastname;
        this._firstname = firstname;
        this._phone = phone;
        this._birthyear = birthyear;
    }

    printAge() {
      //  this._birthyear = Number(document.getElementById("birth_year").value);
        let today = new Date();
        let current = today.getFullYear();
        let age = current - this._birthyear;
        return age;

    }

    printPerson() {
        return this._lastname + ", " + this._firstname;
    }

    set lastname(lname) {
        this._lastname = lname;
    }

    set firstname(fname) {
        this._firstname = fname;
    }

    set phone(phone) {
        this._phone = phone;
    }

    set birthyear(byear) {
        this._birthyear = byear;
    }

    get lastname() {
        return this._lastname;
    }

    get firstname() {
        return this._firstname;
    }

    get phone() {
        return this._phone;
    }

    get birthyear() {
        return this._birthyear;
    }
}

/*function age() {
 
 this._birthyear = Number(document.getElementById("birth_year").value);
 let today = new Date();
 let current = today.getFullYear();
 age = current - this._birthyear;
 return age;
 }*/

let allFriends = {
    allPersons: new Array(),

    savePerson: function (person) {
        this.allPersons.push(person);
    },

    removePerson: function (index) {
        this.allPersons.splice(index, 1);
    },

    totalPerson: function () {
//        let i = 0;
//        for (let p in this) {
//            if ('function' < typeof this[p])
//                continue;
//            i++;
//        }
//        return i;
    return this.allPersons.length;
    },
    averageAge: function () {
        let sum = 0;
           for (let i=0; i < this.allPersons.length; i++) {
               let friend = this.allPersons[i];
               sum += friend.printAge();
           }
           let ave = sum / this.allPersons.length;
           return ave;
    }
    
};

//..........startDATA........
function startData() {

    let friend = new Person("Aaltonen", "Kalle", "012345678", 1977);
    allFriends.savePerson(friend);

    friend = new Person("Virtanen", "Leena", "457896549", 1966);
    allFriends.savePerson(friend);

    friend = new Person("Lehtonen", "Matti", "449762097", 1991);
    allFriends.savePerson(friend);

    print();
}

function print() {

    let output = document.getElementById("allFriends");
    output.innerHTML = "";

    document.getElementById("total").innerHTML = "";

    for (let i = 0; i < allFriends.allPersons.length; i++) {
        let oneFriend = allFriends.allPersons[i];
        output.innerHTML += "<label class='output' onclick='printOne(" + i + ")'>"
                + oneFriend.printPerson() + "</label>";
    }
    document.getElementById("total").innerHTML = "Average age: " + allFriends.averageAge()
    +"<br>" +
            "Number of friends: " + allFriends.totalPerson();

    document.getElementById("oneFriend").innerHTML = "";
}

function printOne(index) {

    let friend = allFriends.allPersons[index];
    document.getElementById("oneFriend").innerHTML = friend.printPerson() + "<br>"
            + "Phone: " + friend.phone + "<br>" + "Birth Year: " + friend.birthyear
            + "<br>" + "Age: " + friend.printAge() + "<br>" +
            "<button onclick='remove(" + index + ")'>Remove</button>" +
            "<button onclick='edit(" + index + ")'>Edit</button>";
}

function remove(ind) {

    allFriends.removePerson(ind);
    print();
}

function edit(ind) {

    let oneFriend = allFriends.allPersons[ind];
    document.getElementById("lname").value = oneFriend.lastname;
    document.getElementById("fname").value = oneFriend.firstname;
    document.getElementById("phone").value = oneFriend.phone;
    document.getElementById("birth_year").value = oneFriend.birthyear;
    document.getElementById("index").value = ind;
}

function save() {

    if (document.getElementById("index").value === "") {
        let person = new Person(
                document.getElementById("lname").value,
                document.getElementById("fname").value,
                document.getElementById("phone").value,
                Number(document.getElementById("birth_year").value)
                );
        allFriends.savePerson(person);

    } else {

        let i = Number(document.getElementById("index").value);
        let oneFriend = allFriends.allPersons[i];

        oneFriend.lastname = document.getElementById("lname").value;
        oneFriend.firstname = document.getElementById("fname").value;
        oneFriend.phone = document.getElementById("phone").value;
        oneFriend.birthyear = Number(document.getElementById("birth_year").value);
    }

    print();
    cancel();
}

function cancel() {

    document.getElementById("lname").value = "";
    document.getElementById("fname").value = "";
    document.getElementById("phone").value = "";
    document.getElementById("birth_year").value = "";
    document.getElementById("index").value = "";
}