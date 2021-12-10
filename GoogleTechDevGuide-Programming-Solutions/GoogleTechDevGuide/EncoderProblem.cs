using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace FoundationPath
{
    public class EncoderProblem
    {
        // https://techdevguide.withgoogle.com/resources/encoder-problem-hard/

        public static List<String> Solution(String[] raw, String[] code_words)
        {
            // Preprocess the input data

            Dictionary<string, string> d = new Dictionary<string, string>();
            int curr = 0;

            foreach (String r in raw)
            {
                if (!(d.ContainsKey(r)))
                {
                    d[r] = code_words[curr];
                    curr += 1;
                }
            }

            // Use the values in dictionary to encode raw

            List<String> result = new List<String>();

            foreach (String r in raw)
            {
                result.Add(d[r]);
            }

            return result;
        }

        public static void Run()
        {
            Console.WriteLine("Encoder Problem - Output");

            List<String> resultEP1 = Solution(new String[] { "a" }, new String[] { "1", "2", "3", "4" });
            List<String> resultEP2 = Solution(new String[] { "a", "b" }, new String[] { "1", "2", "3", "4" });
            List<String> resultEP3 = Solution(new String[] { "a", "b", "a" }, new String[] { "1", "2", "3", "4" });

            foreach (string r in resultEP3) { Console.WriteLine(r); }
        }

    }
}
