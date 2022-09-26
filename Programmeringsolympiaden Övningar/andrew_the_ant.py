# Import
import sys
import os

# Variables


wood_length = int(input("Length: "))
initial_ants = int(input("Ants: "))
ants = []

# Adjust Variables
if ( wood_length < 1 ):
    wood_length = 1
elif (wood_length > 99999):
    wood_length = 99999

if ( initial_ants < 1 ):
    initial_ants = 1
elif( initial_ants > wood_length + 1 ):
    initial_ants = wood_length + 1

# Classes
class Ant( object ):
    def __init__( this, position, direction ):
        this.position = position
        this.direction = direction

# Add Ants
current_ant = 1

while ( current_ant <= initial_ants ):
    os.system('cls')

    position = int(input(f"Possition of Ant {current_ant}: "))
    direction = input(f"Direction of Ant {current_ant}: ")

    ants.append(Ant(
        position = position,
        direction = direction
    ))

    current_ant += 1

# Print Ants
for ant in ants:
    print(f"{ant.position} {ant.direction}")