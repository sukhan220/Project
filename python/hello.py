def f(x):
    try:
        if x == 1 :
            return 1
        return x*f(x-1)
    except RecursionError:
        print("maximum recursion depth exceeded")
print(f(4))