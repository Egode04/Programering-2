try:
    list = []
    n = int(input("n = "))
    for i in range(1, n+1):
        nbr = int(input(f"number {i}: "))
        list.append(nbr)
    newList = []
    for i in list:
        newList.insert(0, i)
    for item in newList:
        print(item)

except:
    print("Something went wrong!")