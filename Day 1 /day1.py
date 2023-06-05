# Getting data
# The 'with'statement in python is used to simplify the management of resources, such as files, network connections, or locks. It ensures that
# the certain operations are properly performed, such as opening and closing a file, even if an exception occurs.
# The general syntax of the 'with' statement is as follow:
# with expression [as variable]:
# code block
with open('day1.in') as file:
    data = [i for i in file.read().strip().split("\n")]
    # data = file.read()
    print(data)

    # Traversing every STRING in our DATA
    # We are doing this because we want to stop suming after there is white space and again sum the data after the white space and repeat it until all data is traversed
    max = 0
    count = 0
    for items in data:
        #         base case
        if items == '':
            count = 0
        else:
            num = int(items) #so i am here type casting because the data is currently in string and to sum the number it has to be in number
            count += num
            # ctrl shift alt l to format the code

    if count > max:
        max = count


    print('Anser to part 1:', max)

# Part-2 Find the top three Elves carrying the most calories. How many calories  are those elves carrying in total?

    max = 0
    max2 = 0
    max3 = 0
    count = 0
    for items in data:
        #         base case
        if items == '':
            count = 0
        else:
            num = int(items) #so i am here type casting because the data is currently in string and to sum the number it has to be in number
            count += num
            # ctrl shift alt l to format the code

    if count > max:
        max = count
    elif count > max2:
        max2 = count
    elif count > max3:
        max3 = count


    print('Anser to part 2:', max+max2+max3)