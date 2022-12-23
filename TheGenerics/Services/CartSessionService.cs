using Microsoft.EntityFrameworkCore;
using System.Linq;
using TheGenerics.Models;
using TheGenericsData.Context;

namespace TheGenerics.Services
{
    public class CartSessionService
    {
        private static IDictionary<string, List<CartProductModel>> CartDictionary = new Dictionary<string, List<CartProductModel>>();

        private readonly IHttpContextAccessor _httpContext;
        private readonly IDbContextFactory<GenericsDbContext> _genericsDbContextFactory;

        private List<CartProductModel> _currentCart { get => CartDictionary[_httpContext.HttpContext!.Session.Id]; }

        public IEnumerable<CartProductModel> CurrentCart { get => _currentCart; }

        public CartSessionService(IHttpContextAccessor httpContext, IDbContextFactory<GenericsDbContext> genericsDbContextFactory)
        {
            _httpContext = httpContext;
            _genericsDbContextFactory = genericsDbContextFactory;

            if (!CartDictionary.TryGetValue(_httpContext.HttpContext!.Session.Id, out var tryValue))
            {
                CartDictionary.Add(_httpContext.HttpContext!.Session.Id, new List<CartProductModel>());
            }

        }

        public async Task<bool> AddProduct(int product)
        {
            if (!_currentCart.Exists(x => x.ProductId == product))
            {
                using (var dbContext = _genericsDbContextFactory.CreateDbContext())
                {
                    if(await dbContext.Products.FindAsync(product) is not null)
                    {
                        _currentCart.Add(new CartProductModel
                        {
                            ProductId = product,
                            ProductQuantity = 1
                        });

                        return true;
                    }
                }
            }
            return false;
        }

        public bool UpdateProduct(int product, int quantity)
        {
            if(_currentCart.FirstOrDefault(x => x.ProductId == product) is CartProductModel cartProduct)
            {
                cartProduct.ProductQuantity = quantity;
                return true;
            }
            return false;
        }

        public void ClearCart()
        {
            _currentCart.Clear();
        }

        public bool RemoveProduct(int product)
        {
            return _currentCart.RemoveAll(x => x.ProductId == product) > 0;
        }

    }
}
