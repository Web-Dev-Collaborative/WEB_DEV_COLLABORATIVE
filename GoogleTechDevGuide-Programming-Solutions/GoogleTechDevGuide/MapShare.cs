using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace FoundationPath
{
    class MapShare
    {
        // https://techdevguide.withgoogle.com/paths/foundational/mapshare-problem-return-given-map/

        public static Dictionary<string,string> Solution(Dictionary<string,string> map)
        {
            Dictionary<string, string> result = new Dictionary<string, string>(map);
            if (map.ContainsKey("a"))
            {
                result["b"] = map["a"];
            }
            if (map.ContainsKey("c"))
            {
                result.Remove("c");
            }

            return result;
        }

        public static void Run()
        {
            Console.WriteLine("MapShare Problem - Output");

            Dictionary<string, string> d = new Dictionary<string, string>
            {
                { "a", "aaa" },
                { "b", "bbb" },
                { "c", "ccc" },
                { "d", "ddd" }
            };

            var resultPairs = MapShare.Solution(d);
            foreach (KeyValuePair<string, string> kvp in resultPairs)
            {
                Console.WriteLine("Key = {0}, Value = {1}", kvp.Key, kvp.Value);
            }

        }
    }
}
