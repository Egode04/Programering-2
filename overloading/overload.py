class array(object):
    def __init__(self, *arg):
        self.array = []
        for i in arg:
            self.array.append(i)

import random as rand

def overlyComplicatedPassword(passwordLength, password = ""):
    for i in range(passwordLength):
        password += str(
            array(
                array(1, 2, 3).array,
                array(4, 5, 6).array,
                array(7, 8, 9).array,
                array("a", "b", "c").array,
                array("d", "e", "f").array,
                array("g", "h", "i").array,
                array("j", "k", "l").array,
                array("m", "n", "o").array,
                array("p", "q", "r").array,
                array("s", "t", "u").array,
                array("v", "w", "x").array,
                array("y", "z", "A").array,
                array("B", "C", "D").array,
                array("E", "F", "G").array,
                array("H", "I", "J").array,
                array("K", "L", "M").array,
                array("N", "O", "P").array,
                array("Q", "R", "S").array,
                array("T", "U", "V").array,
                array("W", "X", "Y").array,
                array("Z", "-", "_").array
            ).array[rand.randint(0, 20)][rand.randint(0, 2)]
        )
    
    return password

print(overlyComplicatedPassword(50))