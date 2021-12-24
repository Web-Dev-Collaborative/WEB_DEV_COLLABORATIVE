using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace FoundationPath
{
    class WordCount
    {
        // https://techdevguide.withgoogle.com/resources/wordcount-problem-classic-algorithm-hard/

        public static Dictionary<string,int> Solution(string[] letters)
        {
            Dictionary<string, int> result = new Dictionary<string, int>();

            foreach(string l in letters)
            {
                if (result.ContainsKey(l))
                {
                    result[l] += 1;
                }
                else
                {
                    result[l] = 1;
                }
            }

            return result;
        }

        public static void Run()
        {
            Console.WriteLine("WordCount Problem - Output");

            var resultWordCount = Solution(new string[] { "a", "b", "a", "c", "b" });
            foreach (KeyValuePair<string, int> kvp in resultWordCount)
            {
                Console.WriteLine("Key = {0}, Value = {1}", kvp.Key, kvp.Value);
            }
        }
    }
}
