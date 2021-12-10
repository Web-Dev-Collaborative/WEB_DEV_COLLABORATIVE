
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace FoundationPath
{
    public class CollapseDuplicates
    {
        //https://techdevguide.withgoogle.com/paths/foundational/collapseduplicates-problem-fix/

        public static String Solution(String a)
        {
            int i = 0;
            String result = "";
            while (i < a.Length)
            {
                char ch = a.ElementAt(i);
                while (i + 1 < a.Length && a.ElementAt(i + 1) == ch)
                {
                    i++;
                }
                result += ch;
                i++;
            }
            return result;
        }

        public static void Run()
        {
            Console.WriteLine("CollapseDuplicates Problem - Output");
            Console.WriteLine("String = {0}, Output = {1}", "abbbcaaaccc", Solution("abbbcaaaccc"));
            Console.WriteLine("String = {0}, Output = {1}", "abbbcaaa", Solution("abbbcaaa"));
            Console.WriteLine("String = {0}, Output = {1}", "abbbc", Solution("abbbc"));
            Console.WriteLine("String = {0}, Output = {1}", "abc", Solution("abc"));
            Console.WriteLine("String = {0}, Output = {1}", "aa", Solution("aa"));
            Console.WriteLine("String = {0}, Output = {1}", "a", Solution("a"));
        }

    }
}
