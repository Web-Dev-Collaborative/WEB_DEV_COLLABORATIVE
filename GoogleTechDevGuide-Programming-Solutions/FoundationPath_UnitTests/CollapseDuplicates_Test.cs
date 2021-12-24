using System;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using CollapseDuplicates = FoundationPath.CollapseDuplicates;

namespace FoundationPath_UnitTests
{
    [TestClass]
    public class CollapseDuplicates_Test
    {
        [TestMethod]
        public void CollapseDuplicates_TestCase1()
        {
            string actual = CollapseDuplicates.Solution("abbbcaaaccc");
            string expected = "abcac";

            Assert.AreEqual(expected, actual);
        }

        [TestMethod]
        public void CollapseDuplicates_TestCase2()
        {
            string actual = CollapseDuplicates.Solution("abbbcaaa");
            string expected = "abca";

            Assert.AreEqual(expected, actual);
        }

        [TestMethod]
        public void CollapseDuplicates_TestCase3()
        {
            string actual = CollapseDuplicates.Solution("abbbc");
            string expected = "abc";

            Assert.AreEqual(expected, actual);
        }

        [TestMethod]
        public void CollapseDuplicates_TestCase4()
        {
            string actual = CollapseDuplicates.Solution("abc");
            string expected = "abc";

            Assert.AreEqual(expected, actual);
        }

        [TestMethod]
        public void CollapseDuplicates_TestCase5()
        {
            string actual = CollapseDuplicates.Solution("aa");
            string expected = "a";

            Assert.AreEqual(expected, actual);
        }

        [TestMethod]
        public void CollapseDuplicates_TestCase6()
        {
            string actual = CollapseDuplicates.Solution("a");
            string expected = "a";

            Assert.AreEqual(expected, actual);
        }


    }
}
