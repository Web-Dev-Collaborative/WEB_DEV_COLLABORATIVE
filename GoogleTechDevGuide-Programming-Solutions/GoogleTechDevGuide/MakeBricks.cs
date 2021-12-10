using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace FoundationPath
{
    class MakeBricks
    {
        // https://techdevguide.withgoogle.com/paths/foundational/makebricks-problem/

        public static bool Solution(int small, int big, int goal)
        {
            if (goal > (big * 5) + small) return false;
            if (goal % 5 > small) return false;
            return true;
        }

        public static void Run()
        {
            Console.WriteLine("MakeBricks Problem - Output");
            Console.WriteLine(Solution(3, 1, 8));
            Console.WriteLine(Solution(3, 1, 9));
            Console.WriteLine(Solution(3, 2, 10));
            Console.WriteLine(Solution(20, 0, 21));
        }
    }
}
