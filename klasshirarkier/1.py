RED = '\033[0;31m'
L_RED = '\033[1;31m'
NC = '\033[0m' # No Color
def _():
    print()
def ac(str, c = L_RED, r = NC):
    return f'{c + str + r}'

class Animal:
    def __init__(self, type = 'animal'):
        self.type = type
    def eat(self):
        print(f'The {ac(self.type)} Eats')
    def sleep(self):
        print(f'The {ac(self.type)} Sleeps')

animal = Animal()
animal.eat()
animal.sleep()
_()

class Fish(Animal):
    def swim(self):
        print(f'The {ac(self.type)} Swims')

fish = Fish('fish')
fish.eat()
fish.sleep()
fish.swim()
_()

class Shark(Fish):
    def eat(self, animal = 'animal'):
        print(f'The {ac(self.type)} Eats the {ac(animal, RED)}')

shark = Shark('shark')
shark.sleep()
shark.swim()
shark.eat()