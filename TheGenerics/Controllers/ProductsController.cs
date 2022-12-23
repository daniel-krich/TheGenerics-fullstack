using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using TheGenericsData.Context;
using TheGenericsData.Entities;

namespace TheGenerics.Controllers
{
    [Route("[controller]")]
    [ApiController]
    public class ProductsController : ControllerBase
    {
        private readonly IDbContextFactory<GenericsDbContext> _dbContextBuilder;
        public ProductsController(IDbContextFactory<GenericsDbContext> dbContextBuilder)
        {
            this._dbContextBuilder = dbContextBuilder;
        }

        [HttpGet]
        public async Task<IEnumerable<ProductEntity>> GetAllProducts()
        {
            using (var dbContext = _dbContextBuilder.CreateDbContext())
            {
                return await (from product in dbContext.Products
                              select product).ToListAsync();
            }
        }
    }
}
