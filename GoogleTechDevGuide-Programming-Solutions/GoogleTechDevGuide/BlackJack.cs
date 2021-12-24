using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace FoundationPath
{
    public class BlackJack
    {
        //https://techdevguide.withgoogle.com/paths/foundational/software-debugging-warmup/

        public static int Solution(int a, int b)
        {
            int f = a > 21 ? 0 : a;
            int s = b > 21 ? 0 : b;
            return Math.Max(f, s);
        }

        public static void Run()
        {
            Console.WriteLine("BlackJack Problem - Output");
            Console.WriteLine(Solution(19, 21));
            Console.WriteLine(Solution(21, 19));
            Console.WriteLine(Solution(19, 22));
            Console.WriteLine(Solution(23, 23));
            Console.WriteLine(Solution(3, 4));
        }
    }
}
