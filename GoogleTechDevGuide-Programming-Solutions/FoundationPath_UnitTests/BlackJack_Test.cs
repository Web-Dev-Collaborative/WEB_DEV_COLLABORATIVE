using Microsoft.VisualStudio.TestTools.UnitTesting;
using BlackJack = FoundationPath.BlackJack;

namespace FoundationPath_UnitTests
{
    [TestClass]
    public class BlackJack_Test
    {
        [TestMethod]
        public void BlackJack_TestCase_19_21()
        {
            int actual = BlackJack.Solution(19, 21);
            int expected = 21;

            Assert.AreEqual(expected, actual);
        }

        [TestMethod]
        public void BlackJack_TestCase_21_19()
        {
            int actual = BlackJack.Solution(21, 19);
            int expected = 21;

            Assert.AreEqual(expected, actual);
        }

        [TestMethod]
        public void BlackJack_TestCase_19_22()
        {
            int actual = BlackJack.Solution(19, 22);
            int expected = 19;

            Assert.AreEqual(expected, actual);
        }

        [TestMethod]
        public void BlackJack_TestCase_23_23()
        {
            int actual = BlackJack.Solution(23, 23);
            int expected = 0;

            Assert.AreEqual(expected, actual);
        }

        [TestMethod]
        public void BlackJack_TestCase_3_4()
        {
            int actual = BlackJack.Solution(3, 4);
            int expected = 4;

            Assert.AreEqual(expected, actual);
        }
    }
}
