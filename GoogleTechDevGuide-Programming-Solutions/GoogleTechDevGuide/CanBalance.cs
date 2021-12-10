using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace FoundationPath
{
    public class CanBalance
    {
        // https://techdevguide.withgoogle.com/resources/canbalance-problem-arrays-non-empty/

        public static bool Solution(int[] numbers)
        {
            for (int i=1; i<numbers.Length; i++)
            {
                if (numbers.Take(i).Sum() == numbers.Skip(i).Sum())
                {
                    return true;
                }
            }
            return false;
        }

        public static void Run()
        {
            Console.WriteLine("CanBalance Problem - Output");

            var result1 = Solution(new int[] { 1, 1, 1, 2, 1 });
            var result2 = Solution(new int[] { 2, 1, 1, 2, 1 });
            var result3 = Solution(new int[] { 10, 10 });

            Console.WriteLine(result1);
            Console.WriteLine(result2);
            Console.WriteLine(result3);

        }
    }
}
