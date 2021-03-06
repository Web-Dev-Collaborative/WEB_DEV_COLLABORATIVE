using System.IO;
using NPOI.XWPF.UserModel;

namespace NPOI_HWPF_and_XWPF
{
    class Program
    {
        static void Main(string[] args)
        {
            XWPFDocument doc = new XWPFDocument();
            XWPFParagraph para = doc.CreateParagraph();
            XWPFRun r0 = para.CreateRun();
            r0.SetText("Title1");
            para.BorderTop = Borders.Thick;
            para.FillBackgroundColor = "EEEEEE";
            para.FillPattern = NPOI.OpenXmlFormats.Wordprocessing.ST_Shd.diagStripe;

            XWPFTable table = doc.CreateTable(3, 3);

            table.GetRow(1).GetCell(1).SetText("EXAMPLE OF TABLE");

            XWPFTableCell c1 = table.GetRow(0).GetCell(0);
            XWPFParagraph p1 = c1.AddParagraph();   // Use this instead of doc.CreateParagraph.
            XWPFRun r1 = p1.CreateRun();
            r1.SetText("The quick brown fox");
            r1.IsBold = true;

            r1.FontFamily = "Courier";
            r1.SetUnderline(UnderlinePatterns.DotDotDash);
            r1.TextPosition = 100;
            c1.SetColor("FF0000");

            table.GetRow(2).GetCell(2).SetText("only text");

            FileStream out1 = new FileStream("SimpleTableNPOI.docx", FileMode.Create);
            doc.Write(out1);
            out1.Close();
        }
    }
}
