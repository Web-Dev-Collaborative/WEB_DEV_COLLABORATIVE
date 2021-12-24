using System;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using FoundationPath;
namespace FoundationPath_UnitTests
{
    [TestClass]
    public class InterpreterProblem_Test
    {

        [TestMethod]
        public void InterpreterProblem_TestCase1()
        {
            int actual = InterpreterProblem.Solution(1, new char[] { '+' }, new int[] { 1 });
            int expected = 2;

            Assert.AreEqual(expected, actual);
        }

        [TestMethod]
        public void InterpreterProblem_TestCase2()
        {
            int actual = InterpreterProblem.Solution(4, new char[] { '-' }, new int[] { 2 });
            int expected = 2;

            Assert.AreEqual(expected, actual);
        }

        [TestMethod]
        public void InterpreterProblem_TestCase3()
        {
            int actual = InterpreterProblem.Solution(1, new char[] { '+', '*' }, new int[] { 1, 3 });
            int expected = 6;

            Assert.AreEqual(expected, actual);
        }

        [TestMethod]
        public void InterpreterProblem_TestCase4()
        {
            int actual = InterpreterProblem.Solution(3, new char[] { '*' }, new int[] { 4 });
            int expected = 12;

            Assert.AreEqual(expected, actual);
        }

        [TestMethod]
        public void InterpreterProblem_TestCase5()
        {
            int actual = InterpreterProblem.Solution(0, new char[] { '?' }, new int[] { 4 });
            int expected = -1;

            Assert.AreEqual(expected, actual);
        }

        [TestMethod]
        public void InterpreterProblem_TestCase6()
        {
            int actual = InterpreterProblem.Solution(1, new char[] { '+', '*', '-' }, new int[] { 1, 3, 2 });
            int expected = 4;

            Assert.AreEqual(expected, actual);
        }
    }
}
