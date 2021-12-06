import random


def random_number_generator_while(n, l):
    numberList = []
    counter = 0
    while len(numberList) < n:
        if counter == 0:
            number = random.randrange(10 ** (l - 1), 10 ** l - 1)
            counter += 1
        else:
            number = random.randrange(10 ** (l - 1), 10 ** l - 1)
            counter += 1

        if number in numberList:
            counter = 0
        else:
            numberList.append(number)
            counter = 0

    print(numberList)


random_number_generator_while(10, 3)


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
