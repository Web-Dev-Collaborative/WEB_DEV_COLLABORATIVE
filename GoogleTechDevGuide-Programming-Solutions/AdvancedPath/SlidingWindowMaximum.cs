using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace AdvancedPath
{
    public class SlidingWindowMaximum
    {
        public static List<int> Solution(int[] numbers, int k)
        {
            List<int> result = new List<int>();

            List<int> deque = new List<int>();

            for (int i = 0; i < numbers.Length; i++)
            {
                if (deque.Count > 0 && deque[0] == i - k)
                {
                    deque.RemoveAt(0);
                }

                while (deque.Count > 0 && numbers[deque.Last()] < numbers[i])
                {
                    deque.RemoveAt(deque.Count - 1);
                }

                deque.Add(i);

                if (i >= k - 1)
                {
                    result.Add(numbers[deque[0]]);
                }
            }
            
            return result;
        }

        public static void Run()
        {
            int[] numbers = new int[] { 1, 3, -1, -3, 5, 3, 6, 7 };
            int k = 3;

            Console.WriteLine(string.Join(",", Solution(numbers, k)));
        }
    }

}
