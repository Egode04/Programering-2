grid = [
    "..S.",
    "VVSV",
    "..S.",
    "..S."
]

string = ""
for key, value in enumerate(grid):
    string += grid[key]

joined = string
print(joined)
counted = [ joined.count("S"), joined.count("V"), joined.count(".") ]

priority = counted[0]
if counted[0] < counted[1]:
    priority = counted[1]
passed = False
for key, value in enumerate(grid):
    if counted[2] == 0:
        passed = True
if passed:
    print("Passed")
# def cnt(arr, str):
#     pass