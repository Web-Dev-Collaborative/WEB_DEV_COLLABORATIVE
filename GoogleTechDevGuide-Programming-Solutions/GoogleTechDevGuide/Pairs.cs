using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace FoundationPath
{
    class Pairs
    {
        // https://techdevguide.withgoogle.com/resources/pairs-problem-classic-algorithm-hard/

        public static Dictionary<char,char> Solution(string[] words)
        {
            Dictionary<char, char> result = new Dictionary<char, char>();

            foreach(string word in words)
            {
                if (!result.ContainsKey(word[0]))
                {
                    result[word[0]] = word.Last(); //or word[word.Length - 1]
                }
            }

            return result;
        }

        public static void Run()
        {
            Console.WriteLine("Pairs Problem - Output");

            var resultPairs = Pairs.Solution(new string[] { "man", "moon", "good", "night" });
            foreach (KeyValuePair<char, char> kvp in resultPairs)
            {
                Console.WriteLine("Key = {0}, Value = {1}", kvp.Key, kvp.Value);
            }
        }
    }
}
