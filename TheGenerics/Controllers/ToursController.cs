using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using TheGenerics.Models;
using TheGenerics.Services;
using TheGenericsData.Context;
using TheGenericsData.Entities;

namespace TheGenerics.Controllers
{
    [Route("[controller]")]
    [ApiController]
    public class ToursController : ControllerBase
    {
        private readonly IDbContextFactory<GenericsDbContext> _dbContextBuilder;
        public ToursController(IDbContextFactory<GenericsDbContext> dbContextBuilder)
        {
            this._dbContextBuilder = dbContextBuilder;
        }

        [HttpGet]
        public async Task<IEnumerable<TourEntity>> GetAllTours()
        {
            using (var dbContext = _dbContextBuilder.CreateDbContext())
            {
                return await (from tour in dbContext.Tours
                              orderby tour.TourDate descending
                              select tour).ToListAsync();
            }
        }
    }
}
