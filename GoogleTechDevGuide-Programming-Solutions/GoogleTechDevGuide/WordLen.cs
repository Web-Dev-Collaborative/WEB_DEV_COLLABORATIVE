using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace FoundationPath
{
    class WordLen
    {
        // https://techdevguide.withgoogle.com/resources/wordlen-problems-array-strings-medium/

        public static Dictionary<string, int> Solution(string[] words)
        {
            Dictionary<string, int> result = new Dictionary<string, int>();

            foreach(string word in words)
            {
                if (!result.ContainsKey(word))
                {
                    result[word] = word.Length;
                }
            }

            return result;
        }
        public static void Run()
        {
            Console.WriteLine("WordLen Problem - Output");

            var result1 = Solution(new string[] { "this", "and", "that", "and" });
            foreach (KeyValuePair<string, int> kvp in result1)
            {
                Console.WriteLine("Key = {0}, Value = {1}", kvp.Key, kvp.Value);
            }
        }
    }
}
