# CLASS DECLARATION
"""
Declare a class named "Developer" with the following features:

A constructor that takes two values, a name and stress_level

A property named "study" that reduces the stress_level by 1
    Calling this method over and over should never result in a negative number

A method named "assessment" that increases stress_level by an amount passed in

A property named "passed_assessment" that changes the stress_level back to 0

A "__repr__" method that will format the data like
    "<{name} ({stres_level})>"

Test data at the bottom.
"""

# WRITE YOUR CODE HERE


# Test calls
student = Developer("Mylo", 3)
print(student)  # > "<Mylo (3)>"

student.study
print(student)  # > "<Mylo (2)>"

student.study
student.study
student.study
student.assessment(5)
print(student)  # > "<Mylo (5)>"

student.passed_assessment
print(student)  # > "<Mylo (0)>"
