import random


def random_number_generator_while(n, l):
    numberList = []
    while len(numberList) < n:
        number = random.randrange(10 ** (l - 1), 10 ** l - 1)
        if number not in numberList:
            numberList.append(number)
    print(numberList)


random_number_generator_while(21, 3)


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
