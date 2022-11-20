s = str(input("> "))
v = []
n = ''

def is_vowel(char):
    vowels = ('a', 'e', 'i', 'o', 'u')
    return (char in vowels)

for i in range(len(s)):
    v.append(is_vowel(s[i]))

for i in range(len(v)):
    try:
        if v[i] and v[i+1] is False and s[i+1] != ' ' and v[i+2] is False and s[i+2] != ' ':
            pass
        n += s[i]
    except:
        pass

print(n[::-1])