using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace FoundationPath
{
    class LongestWord
    {
        // https://techdevguide.withgoogle.com/resources/find-longest-word-in-dictionary-that-subsequence-of-given-string/

        public static string Solution(string s, string[] words)
        {
            // Preprocess the given string 's'

            Dictionary<char, List<int>> d = new Dictionary<char, List<int>>();

            for(int i = 0; i<s.Length; i++)
            {
                if (d.ContainsKey(s[i]))
                {
                    d[s[i]].Add(i);
                }
                else
                {
                    d[s[i]] = new List<int> { i };
                }
            }

            string curr = "";
            bool breaking = false;

            foreach (string word in words)
            {
                int temp = 0;

                foreach (char c in word)
                {
                    if (d.ContainsKey(c))
                    {
                        IEnumerable<int> searchResult = d[c].Where(i => i >= temp);

                        if (searchResult.Count() > 0)
                        {
                            temp = searchResult.First();
                        }
                        else
                        {
                            breaking = true;
                            break;
                        }
                    }
                    else
                    {
                        breaking = true;
                        break;
                    }
                }

                if ((!breaking) && word.Length > curr.Length)
                {
                    curr = word;
                }
            }

            return curr;
        }


        public static void Run()
        {
            Console.WriteLine("LongestWord Problem - Output");

            Console.WriteLine(Solution("abppplee", new string[] { "able", "ale", "apple", "bale", "kangaroo" }));
        }
    }
}
