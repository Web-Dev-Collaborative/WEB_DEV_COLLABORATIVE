using System;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using FoundationPath;
using System.Collections.Generic;

namespace FoundationPath_UnitTests
{
    [TestClass]
    public class EncoderProblem_Test
    {
        [TestMethod]
        public void EncoderProblem_TestCase1()
        {
            List<String> actual = EncoderProblem.Solution(new String[] { "a" }, new String[] { "1", "2", "3", "4" });
            List<String> expected = new List<string> { "1" };

            CollectionAssert.AreEqual(expected, actual);
        }

        [TestMethod]
        public void EncoderProblem_TestCase2()
        {
            List<String> actual = EncoderProblem.Solution(new String[] { "a", "b" }, new String[] { "1", "2", "3", "4" });
            List<String> expected = new List<string> { "1", "2" };

            CollectionAssert.AreEqual(expected, actual);
        }

        [TestMethod]
        public void EncoderProblem_TestCase3()
        {
            List<String> actual = EncoderProblem.Solution(new String[] { "a", "b", "a" }, new String[] { "1", "2", "3", "4" });
            List<String> expected = new List<string> { "1", "2", "1"};

            CollectionAssert.AreEqual(expected, actual);
        }
    }
}
