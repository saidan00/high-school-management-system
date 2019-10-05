using System.Collections.Generic;

namespace HighSchoolManagerAPI.Models
{
    public class Grade
    {
        public int GradeID { get; set; }
        public string Name { get; set; }

        public virtual List<Class> Classes { get; set; }
    }
}