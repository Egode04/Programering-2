class array(object):
    def __init__(self, *arg):
        self.array = []
        for i in arg:
            self.array.append(i)

import random as rand

overlyComplicatedPassword = ""
for i in range(9):
    overlyComplicatedPassword += str(
        array(
            array(1, 2, 3).array,
            array(4, 5, 6).array,
            array(7, 8, 9).array
        ).array[rand.randint(0, 2)][rand.randint(0, 2)]
    )
print(overlyComplicatedPassword)