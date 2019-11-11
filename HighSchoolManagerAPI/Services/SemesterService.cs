using ApplicationCore.Entities;
using ApplicationCore.Interfaces;
using HighSchoolManagerAPI.Services.IServices;

namespace HighSchoolManagerAPI.Services
{
    public class SemesterService : ISemesterService
    {
        private readonly IUnitOfWork _unitOfWork;
        public SemesterService(IUnitOfWork unitOfWork)
        {
            _unitOfWork = unitOfWork;
        }

        public Semester GetSemester(int semesterId)
        {
            return _unitOfWork.Semester.GetBy(semesterId);
        }
    }
}