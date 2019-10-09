using System.Collections.Generic;

namespace HighSchoolManagerAPI.Models
{
    public class Result
    {
        public int ResultID { get; set; }

        public int StudentID { get; set; }

        public int SemesterID { get; set; }

        public int SubjectID { get; set; }

        public double Average { get; set; }

        public virtual Semester Semester { get; set; }

        public virtual Student Student { get; set; }

        public virtual Subject Subject { get; set; }

        public virtual List<ResultDetail> ResultDetails { get; set; }
    }
}