using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace FoundationPath
{
    class sumNumbers
    {
        // https://techdevguide.withgoogle.com/resources/subnumbers-problem-string-return-sum/

        public static int Solution(string str)
        {
            List<int> numbers = new List<int>();

            string temp = "";

            int index = 0;

            while (index < str.Length-1)
            {
                if (Char.IsNumber(str[index]))
                {
                    temp += str[index];

                    if (!Char.IsNumber(str[index + 1]))
                    {
                        numbers.Add(int.Parse(temp));
                        temp = "";
                    }
                }
                index++;
            }

            if (Char.IsNumber(str[index]))
            {
                temp += str[index];
                numbers.Add(int.Parse(temp));
            }

            return numbers.Sum();
        }

        public static void Run()
        {
            Console.WriteLine("sumNumbers Problem - Output");

            Console.WriteLine(Solution("abc123xyz"));
            Console.WriteLine(Solution("aa11b33"));
            Console.WriteLine(Solution("7 11"));
        }
    }
}
