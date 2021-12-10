using System;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using CanBalance = FoundationPath.CanBalance;
namespace FoundationPath_UnitTests
{
    [TestClass]
    public class CanBalance_Test
    {

        [TestMethod]
        public void CanBalance_TestCase1()
        {
            bool actual = CanBalance.Solution(new int[] { 1, 1, 1, 2, 1 });
            bool expected = true;

            Assert.AreEqual(expected, actual);
        }

        [TestMethod]
        public void CanBalance_TestCase2()
        {
            bool actual = CanBalance.Solution(new int[] { 2, 1, 1, 2, 1 });
            bool expected = false;

            Assert.AreEqual(expected, actual);
        }

        [TestMethod]
        public void CanBalance_TestCase3()
        {
            bool actual = CanBalance.Solution(new int[] { 10, 10 });
            bool expected = true;

            Assert.AreEqual(expected, actual);
        }
    }
}
