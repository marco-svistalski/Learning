// console.log ('ahoy');
//Comment: HTML source correct, used as a test.

//function sayHi() {
//    console.log ('Hi')
//}

//sayHi()
//Comment: it worked. Used as a remember.

function sayHiTo(someone) {
    if (!someone) {
        console.log (someone + ' is false')
    } else {
        console.log ('Hi ' + someone)
    }
}

sayHiTo('Marco')
sayHiTo(false)
sayHiTo()
sayHiTo(18)
sayHiTo('huehhue')
sayHiTo('Onelio')

//Comment: it worked apparently. not sure how to test it in an embracing way.

const pets = [
    {
        name: 'Negrita',
        gender: 'FEMALE',
        specie: 'feline',
    },
    {
        name: 'Sosso',
        gender: 'FEMALE',
        specie: 'feline',
    },
    {
        name: 'Baunilha',
        gender: 'FEMALE',
        specie: 'feline',
    },
    {
        name: 'Giga',
        gender: 'MALE',
        specie: 'feline',
    },
    {
        name: 'Petus',
        gender: 'MALE',
        specie: 'feline',
    },
    {
        name: 'Melinha',
        gender: 'FEMALE',
        specie: 'feline',
    },
    {
        name: 'Morinha',
        gender: 'FEMALE',
        specie: 'feline',
    },
    {
        name: 'Mia',
        gender: 'FEMALE',
        specie: 'feline',
    },
    {
        name: 'Fumaça',
        gender: 'MALE',
        specie: 'feline',
    },
    {
        name: 'Malu',
        gender: 'FEMALE',
        specie: 'canine',
    },
    {
        name: 'Paçoca',
        gender: 'FEMALE',
        specie: 'canine',
    },
    {
        name: 'Mike',
        gender: 'MALE',
        specie: 'feline',
    },
    {
        name: 'Lilica',
        gender: 'FEMALE',
        specie: 'feline',
    },
    {
        name: 'Jujuba',
        gender: 'FEMALE',
        specie: 'canine',
    },
    {
        name: 'Tobias',
        gender: 'MALE',
        specie: 'canine',
    },
    {
        name: 'Tinoco',
        gender: 'MALE',
        specie: 'feline',
    },
    {
        name: 'Tonico',
        gender: 'MALE',
        specie: 'feline',
    },
    {
        name: 'Charles',
        gender: 'MALE',
        specie: 'canine',
    },
]

//function describePet() {
//    pets.forEach(pet => {
//        if (pet.gender === 'MALE' && pet.specie === 'canine') {
//            console.log (pet.name + ' is a male dog')
//        }
//        if (pet.gender === 'FEMALE' && pet.specie === 'canine') {
//            console.log (pet.name + ' is a female dog')
//        }
//        if (pet.gender === 'MALE' && pet.specie === 'feline') {
//            console.log (pet.name + ' is a male cat')
//        }
//        if (pet.gender === 'FEMALE' && pet.specie === 'feline') {
//            console.log (pet.name + ' is a female cat')
//    }
//    })    
//}
//
//describePet();
//comment: it worked! but too many ifs.

function describePet() {
    pets.forEach(pet => {
        if (pet.specie === 'feline') {
            var specie = pet.specie.replace (/feline/gi, 'cat'); //don't know what //gi means, found it on the web.
        } else if (pet.specie === 'canine') {
            var specie = pet.specie.replace (/canine/gi, 'dog'); //figured I could use only else, but thought in case I've added one more specie this else if would be more accurate.
        }
        let text = (`${pet.name} is a ${pet.gender} ${specie}.`); //didn't remember how to use the $, found it on the web as well.
        console.log (text[0].toUpperCase () + text.slice(1).toLowerCase());
    })
}

describePet();

//comment: it worked, same result, but shorter code.
//don't know how exactly the UpperCase, slice and LowerCase work, as the numbers between ().
//I imagine it means something like I set uppercase from the beginning [0], then from the next character position (1) on, I set lowercase.

