using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace FoundationPath
{
    class EvenlySpaced
    {
        // https://techdevguide.withgoogle.com/resources/evenlyspaced-problem-medium/

        public static bool Solution(int a, int b, int c)
        {
            List<int> numbers = new List<int> { a, b, c};
            numbers.Sort();
            return numbers[1] - numbers[0] == numbers[2] - numbers[1];
        }

        public static void Run()
        {
            Console.WriteLine("EvenlySpaced Problem - Output");
            Console.WriteLine(Solution(2, 4, 6));
            Console.WriteLine(Solution(4, 6, 2));
            Console.WriteLine(Solution(4, 6, 3));
        }
    }
}
