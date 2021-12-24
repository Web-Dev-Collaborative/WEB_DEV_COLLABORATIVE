using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace FoundationPath
{
    class WithoutString
    {
        // https://techdevguide.withgoogle.com/paths/foundational/withoutstring-problem-strings-base-remove-return/

        public static string Solution(string baseStr, string removeStr)
        {
            int removeLen = removeStr.Length;
            int baseLen = baseStr.Length;
            string result = "";
            
            for(int i =0; i<baseLen;)
            {
                if(!(i + removeLen > baseLen) && baseStr.Substring(i,removeLen).Equals(removeStr, StringComparison.OrdinalIgnoreCase))
                {

                    i += removeLen;
                    continue;
                }

                result += baseStr.ElementAt(i);
                i++;
            }

            return result;
        }

        public static void Run()
        {
            Console.WriteLine("WithoutString Problem - Output");
            Console.WriteLine(Solution("Hello there", "llo"));
            Console.WriteLine(Solution("Hello there", "x"));
            Console.WriteLine(Solution("xxx", "x"));
            Console.WriteLine(Solution("xyzzy", "Y"));
            Console.WriteLine(Solution("1111", "11"));
            Console.WriteLine(Solution("Hi HoHo", "Ho"));

        }
    }
}
