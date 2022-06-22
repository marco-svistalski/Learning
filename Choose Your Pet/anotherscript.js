// console.log ('ahoy');

//function sayHi() {
//    console.log ('Hi')
//}

//sayHi()

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

function describePet() {
    pets.forEach(pet => {
        if (pet.gender === 'MALE' && pet.specie === 'canine') {
            console.log (pet.name + ' is a male dog')
        }
        if (pet.gender === 'FEMALE' && pet.specie === 'canine') {
            console.log (pet.name + ' is a female dog')
        }
        if (pet.gender === 'MALE' && pet.specie === 'feline') {
            console.log (pet.name + ' is a male cat')
        }
        if (pet.gender === 'FEMALE' && pet.specie === 'feline') {
            console.log (pet.name + ' is a female cat')
    }
    })    
}

describePet();
