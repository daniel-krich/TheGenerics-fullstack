using Microsoft.AspNetCore.Mvc;
using System.Linq;
using Microsoft.EntityFrameworkCore;
using TheGenerics.Models;
using TheGenerics.Services;
using TheGenericsData.Context;
using TheGenericsData.Entities;
using Microsoft.AspNetCore.Authorization;

namespace TheGenerics.Controllers
{
    [Route("[controller]")]
    [ApiController]
    public class ToursController : ControllerBase
    {
        private readonly IDbContextFactory<GenericsDbContext> _dbContextBuilder;
        private readonly TicketsSessionService _ticketsSession;
        public ToursController(IDbContextFactory<GenericsDbContext> dbContextBuilder, TicketsSessionService ticketsSession)
        {
            this._dbContextBuilder = dbContextBuilder;
            this._ticketsSession = ticketsSession;
        }

        [HttpGet]
        public async Task<IEnumerable<TourModel>> GetAllTours()
        {
            using (var dbContext = _dbContextBuilder.CreateDbContext())
            {
                
                return (await (from tour in dbContext.Tours
                               orderby tour.TourDate descending
                               select tour).ToListAsync()).Select(x => new TourModel(x, _ticketsSession.CurrentTicketIds.Any(y => y == x.Id)));
            }
        }

        [HttpPost("{tourId}/purchase")]
        [Authorize]
        public async Task<bool> BuyTour(int tourId)
        {
            return await _ticketsSession.BuyTicket(tourId);
        }
    }
}
