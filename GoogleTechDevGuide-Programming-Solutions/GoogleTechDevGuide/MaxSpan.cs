using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace FoundationPath
{
    class MaxSpan
    {
        // https://techdevguide.withgoogle.com/resources/maxspan-problem-return-largest-span-array/

        public static int Solution(int[] numbers)
        {
            int result = 0;
            int temp;
            List<int> numbers1 = new List<int>(numbers);

            for(int i =0; i<numbers.Length; i++)
            {
                temp = (numbers1.LastIndexOf(numbers[i]) - i) + 1;

                if (temp > result)
                {
                    result = temp; 
                }
            }

            return result;
        }

        public static void Run()
        {
            Console.WriteLine("MaxSpan Problem - Output");
            Console.WriteLine(Solution(new int[] { 1, 2, 1, 1, 3 }));
            Console.WriteLine(Solution(new int[] { 1, 4, 2, 1, 4, 1, 4 }));
            Console.WriteLine(Solution(new int[] { 1, 4, 2, 1, 4, 4, 4 }));
        }
    }
}
