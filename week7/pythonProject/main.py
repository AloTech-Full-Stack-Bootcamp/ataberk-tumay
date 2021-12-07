import random


def random_number_generator_while(n, l):
    numberList = []
    limit = n
    if n < (10**l-(10 ** (l - 1))+1):
        while len(numberList) < limit:
            number = random.randrange(10 ** (l - 1), 10 ** l)
            if number not in numberList:
                numberList.append(number)
                yield number
    else:
        yield "Error"

print(list(random_number_generator_while(90, 2)))


# second assignment. increase input by 1 and reverse the return value
def my_awesome_decorator(fun):
    def wrapped(*args):
        newList = []
        for i in args:
            newList.append(i + 1)
        newReturn = not fun(*newList)
        return newReturn

    return wrapped


@my_awesome_decorator
def mod_batch(*numbers):
    for i in numbers:
        if i % 3 != 0:
            return False
    return True


print(mod_batch(3, 2, 5))
