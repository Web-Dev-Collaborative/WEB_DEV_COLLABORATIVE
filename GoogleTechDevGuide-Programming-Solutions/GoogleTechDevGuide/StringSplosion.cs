using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace FoundationPath
{
    class StringSplosion
    {
        // https://techdevguide.withgoogle.com/resources/stringsplosion-problem-ccocodcode/

        public static string Solution(string str)
        {
            string result = "";

            for(int i=1; i<=str.Length; i++)
            {
                result += str.Substring(0,i);
            }
            return result;
        }

        public static void Run()
        {
            Console.WriteLine("StringSplosion Problem - Output");
            Console.WriteLine(Solution("Code"));
            Console.WriteLine(Solution("abc"));
            Console.WriteLine(Solution("ab"));
        }
    }
}
