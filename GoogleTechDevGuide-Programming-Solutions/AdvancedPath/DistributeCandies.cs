using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace AdvancedPath
{
    public class DistributeCandies
    {

        // https://techdevguide.withgoogle.com/paths/advanced/working-in-multiple-languages-distributing-candies-problem/#!

        public static int Solution(int[] candies)
        {
            HashSet<int> uniqueCandies = new HashSet<int>(candies);
            return Math.Min(candies.Length/2, uniqueCandies.Count);
        }
    }
}
