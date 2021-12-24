using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace FoundationPath
{
    class Hangman
    {
        // https://techdevguide.withgoogle.com/paths/foundational/hangman-challenge-archetypal/

        public static void Run()
        {
            string secretWord = "pinnacle"; // deal with upper and lower case

            // Pre-process the word

            Dictionary<char, List<int>> d = new Dictionary<char, List<int>>();

            for (int i=0; i<secretWord.Length; i++)
            {
                if (d.ContainsKey(secretWord[i]))
                {
                    d[secretWord[i]].Add(i);
                }
                else
                {
                    d[secretWord[i]] = new List<int> { i };
                }
            }

            // Start the game

            StringBuilder wordBoard = new StringBuilder(secretWord.Length);

            wordBoard.Insert(0, "-", secretWord.Length);

            int gameCount = 0;

            bool resultFail = true;

            while (gameCount < secretWord.Length)
            {
                Console.WriteLine(wordBoard);
                char input = Console.ReadKey().KeyChar;
                Console.WriteLine();
                if (d.ContainsKey(input))
                {
                    d[input].ForEach(i => wordBoard[i] = input);
                    d.Remove(input);

                    if (wordBoard.ToString() == secretWord)
                    {
                        Console.WriteLine("You Won!");
                        resultFail = false;
                        Console.WriteLine(secretWord);
                        break;
                    }
                }
                else
                {
                    gameCount++; // Draw the hangman here
                }

                Console.WriteLine("You have {0} chances left..", secretWord.Length-gameCount);
            }

            if (resultFail)
            {
                Console.WriteLine("The word is: {0}", secretWord);
                Console.WriteLine("Better Luck Next Time!");
            }
        }
    }
}
