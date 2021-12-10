using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace FoundationPath
{
    public class InterpreterProblem
    {
        // https://techdevguide.withgoogle.com/paths/foundational/interpreter-problem-for-java/

        public static int Interpret(int val1, int val2, char operation)
        {
            return operation == '+' ? val1 + val2 : operation == '-' ? val1 - val2 : operation == '*' ? val1 * val2 : int.MinValue;
        }

        public static int Solution(int value, char[] commands, int[] args)
        {
            Stack<int> numberStack = new Stack<int>(args.Reverse());
            numberStack.Push(value);
            
            foreach(char operation in commands)
            {
                if ("+*-".Contains(operation))
                {
                    int val1 = numberStack.Pop();
                    int val2 = numberStack.Pop();
                    numberStack.Push(Interpret(val1, val2, operation));
                }
                else
                {
                    return -1;
                }
            }
            
            return numberStack.Pop();
        }

        public static void Run()
        {
            Console.WriteLine("Interpreter Problem - Output");
            Console.WriteLine(Solution(1, new char[] { '+' }, new int[] { 1 }));
            Console.WriteLine(Solution(4, new char[] { '-' }, new int[] { 2 }));
            Console.WriteLine(Solution(1, new char[] { '+','*' }, new int[] { 1,3 }));
            Console.WriteLine(Solution(3, new char[] { '*' }, new int[] { 4 }));
            Console.WriteLine(Solution(0, new char[] { '?' }, new int[] { 4 }));
            Console.WriteLine(Solution(1, new char[] { '+', '*', '-' }, new int[] { 1, 3, 2 }));
        }
    }
}
