using Microsoft.EntityFrameworkCore;
using System.Linq;
using TheGenerics.Models;
using TheGenericsData.Context;

namespace TheGenerics.Services
{
    public class TicketsSessionService
    {
        private static IDictionary<string, List<int>> TicketBoughtIdsDictionary = new Dictionary<string, List<int>>();

        private readonly IHttpContextAccessor _httpContext;
        private readonly IDbContextFactory<GenericsDbContext> _genericsDbContextFactory;

        private List<int> _currentTicketIds { get => TicketBoughtIdsDictionary[_httpContext.HttpContext!.Session.Id]; }

        public IEnumerable<int> CurrentTicketIds { get => _currentTicketIds; }

        public TicketsSessionService(IHttpContextAccessor httpContext, IDbContextFactory<GenericsDbContext> genericsDbContextFactory)
        {
            _httpContext = httpContext;
            _genericsDbContextFactory = genericsDbContextFactory;

            if (!TicketBoughtIdsDictionary.TryGetValue(_httpContext.HttpContext!.Session.Id, out var tryValue))
            {
                TicketBoughtIdsDictionary.Add(_httpContext.HttpContext!.Session.Id, new List<int>());
            }

        }

        public async Task<bool> BuyTicket(int tourId)
        {
            if (!_currentTicketIds.Exists(x => x == tourId))
            {
                using (var dbContext = _genericsDbContextFactory.CreateDbContext())
                {
                    if(await dbContext.Tours.FindAsync(tourId) is not null)
                    {
                        _currentTicketIds.Add(tourId);

                        return true;
                    }
                }
            }
            return false;
        }

    }
}
