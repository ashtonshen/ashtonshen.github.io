from cs50 import get_int
import random
import time


def main():

    # print welcome message, offer tutorial
    introduction()

    # ask user for wager
    wager = get_int("Please enter your ante (wager): ")

    # create dicitonary with numerical values for each card
    key = {
        "2": 2,
        "3": 3,
        "4": 4,
        "5": 5,
        "6": 6,
        "7": 7,
        "8": 8,
        "9": 9,
        "10": 10,
        "J": 11,
        "Q": 12,
        "K": 13,
        "A": 14,
    }

    # create the 52 card deck and shuffle/randomize it
    deck = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", "A"] * 4
    random.shuffle(deck)

    # draw two cards and store the values, thus removing them from the deck
    card1 = deck.pop()
    card2 = deck.pop()
    # store the numerical values of each drawn card
    num1 = key[card1]
    num2 = key[card2]

    # print out drawn cards to the user
    print("{} | {}".format(card1, card2))
    time.sleep(1.5)

    # store the spread (the amount of cards between two cards exclusive)
    spread = abs(num1 - num2) - 1

    # check for special circumstances: pair and consecutives
    # if drawn cards are a pair, payout is 11:1 if next card is also the same, else wager is returned
    if card1 == card2:

        print("Tie! Payout is 11:1. Otherwise your hand will be pushed. Dealing now", end="")
        print_ellipsis()

        payout = 11

    # if cards drawn are consecutive, wager is returned and game is over
    elif spread == 0:

        print("Consecutives! Your hand is pushed. Total return: {}. Thank you for playing Red Dog.".format(
            wager))

        return

    # if none of the special circumstances above are true...
    else:

        # calculate and print out spread and payout ratio
        # store payout multipler
        payout = calculate_payout(num1, num2, spread)

        # offer player the opportunity to double their wager
        # if accepted, wager is doubled, else wager equals origianl wager
        wager = double_wager(wager)

    # draw a third card and store it and its numerical value
    card3 = deck.pop()
    num3 = key[card3]

    # print all three drawn cards
    print("\n{} | {} | {}".format(card1, card2, card3))

    time.sleep(1.5)

    # if third card is between the first two or all three are equal, player has won, return wager plus payout
    if num1 > num3 > num2 or num1 < num3 < num2 or num1 == num2 == num3:

        print("We have a winner! Total money returned: ${}. Thank you for playing Red Dog.".format(
            (payout + 1) * wager))

        return

    # if third card is not equal to the first two and payout was 11 (meaning first two were a pair), return wager only
    elif payout == 11:

        print("Your hand is pushed. Total money returned: ${}. Thank you for playing Red Dog.".format(wager))

    # if third card is not between the first two and the first two were not a pair, player loses their wager
    else:

        print("You lose! Total money returned: $0. Thank you for playing Red Dog.")

    return

# function that prints and calculates the spread and payout
# returns payout multiplier
def calculate_payout(num1: int, num2: int, spread: int) -> int:

    # if the spread is 1, payout is 5:1
    if spread == 1:

        print("The spread is 1. Payout is 5:1.")

        return 5

    # if the spread is 2, payout is 4:1
    elif spread == 2:

        print("The spread is 2. Payout is 4:1.")

        return 4

    # if the spread is 3, payout is 2:1
    elif spread == 3:

        print("The spread is 3. Payout is 2:1.")

        return 2

    # if the spread is 4 to 11 (max), payout is 1:1
    else:

        print("The spread is 4-11. Payout is 1:1.")

        return 1

# function that offers players the opportunity to double their bet
# only called if neither a tie nor a consecutive is drawn
def double_wager(wager):

    # store players response, either "y" or "n"
    double = input(
        "You may double your wager now if you so please. Would you like to do so (y/n)? ")
    # keep asking until the player gives one of two choices
    while True:

        if double == "y":

            wager = wager * 2

            print("Your wager is now ${}. Dealing now".format(wager), end="")
            print_ellipsis()

            break

        elif double == "n":

            print("Your wager is still ${}. Dealing now".format(wager), end="")
            print_ellipsis()

            break

        double = input("""Please type "y" for yes or "n" for no: """)

    return wager

# function that welcomes player and offers a tutorial of Red Dog
def introduction():

    # offer tutorial
    need_tutorial = input("Welcome to Red Dog! Would you like a tutorial (y/n)? ")
    while True:

        # if tutorial not needed, go straight to asking for a wager
        if need_tutorial == "n":

            return

        # if tutorial is needed, give tutorial
        elif need_tutorial == "y":

            print("The rules are simple. \nThe house will draw two cards plus a third depending on the outcome. To win money, the third card must land between the first two (exclusive). \nIf the first two cards are a pair, you will be given the opportunity to draw a third identical card for an 11:1 payout ratio and risk nothing. \nIf the first two card are consecutive, your hand will be pushed immediately. \nOtherwise, the payout ratio will depend on the spread. \nIf neither a consecutive nor idnetical are drawn, the player will be givent the opportunity to double their wagers.")

            # keep prompting player to tell program when they're ready to move on
            ready = input("""When ready, please type "y": """)
            while ready != "y":

                ready = input("""When ready, please type "y": """)

            return

        need_tutorial = input("""Please type "y" for yes or "n" for no: """)

# function that prints a delayed ellipsis
# betters the game's pacing
def print_ellipsis():

    time.sleep(.5)

    for i in range(3):

        time.sleep(.5)
        print(".", end="")
        time.sleep(.5)


main()
