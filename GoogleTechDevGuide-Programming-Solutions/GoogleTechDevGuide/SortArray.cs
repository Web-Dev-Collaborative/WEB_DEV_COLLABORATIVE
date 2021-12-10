using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace FoundationPath
{
    class SortArray
    {
        // https://techdevguide.withgoogle.com/resources/array-sort-problem-sorted-values/

        public static List<int> Solution(int[] numbers)
        {
            HashSet<int> set1 = new HashSet<int>(numbers);
            
            set1.OrderBy(i => i);

            List<int> result = new List<int>(set1);

            // Can Sort Result list directly also
            //result.Sort();

            return result;
        }

        public static void Run()
        {
            Console.WriteLine("Sort Array Problem - Output");
            var result = Solution(new int[] { 1, 1, 3, 4, 5, 5, 6 });

            foreach (int i in result) { Console.WriteLine(i); }
        }
    }
}
