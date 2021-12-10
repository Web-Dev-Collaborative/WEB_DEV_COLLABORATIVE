
print('Welcome to Hangman!')
word = str(input('What is the word to guess?: ').upper())
hangman = ["___", " |", " O", " |", "//", " |", "//"]
turn = 1


def blank_word(wrd):
    blanked = []
    for ind in range(len(word)):
        blanked.append("-")
    return blanked


def list_to_string(wrd):
    string = ""
    for ind in wrd:
        string += ind
    return string


def display_gallow(num):
    num -= 1
    for i in hangman[:num]:
        print(i)


blanked_word = blank_word(word)
play_word = list_to_string(blanked_word)
guessed_letters = []
letter = None

while True and letter != 'QUIT':
    correct_guess = False

    if guessed_letters:
        print("These are the letters you have guessed below:")
        print(guessed_letters)

    print(f'The secret word is: {play_word}')
    print(f'You are on turn {turn}')
    print("Gallow display:")
    display_gallow(turn)
    letter = str(input("Guess a letter or type 'quit' to exit: ").upper())

    if letter in guessed_letters:
        print("You have already guessed that letter!")
        print("You are now penalized!")
        turn += 1
        if turn == len(hangman) + 1: break
        continue
    else:
        for i in range(len(word)):
            if letter == word[i]:
                correct_guess = True
                blanked_word[i] = letter

        guessed_letters.append(letter)


    play_word = list_to_string(blanked_word)


    if play_word == word: break
    if correct_guess == False: turn += 1
    if turn == len(hangman) + 1: break



if play_word == word:
    print('YOU WIN!')
else:
    print("YOU LOSE!")
    display_gallow(len(hangman)+1)












