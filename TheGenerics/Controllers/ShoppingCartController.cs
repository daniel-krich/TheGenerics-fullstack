using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using TheGenerics.DTOs;
using TheGenerics.Models;
using TheGenerics.Services;

namespace TheGenerics.Controllers
{
    [Route("[controller]")]
    [ApiController]
    public class ShoppingCartController : ControllerBase
    {
        private readonly CartSessionService _cartSessionService;
        public ShoppingCartController(CartSessionService cartSessionService)
        {
            _cartSessionService = cartSessionService;
            
        }

        [HttpGet]
        public IEnumerable<CartProductModel> GetCart()
        {
            return _cartSessionService.CurrentCart;
        }

        [HttpGet("clearcart")]
        [Authorize]
        public void ClearCart()
        {
            _cartSessionService.ClearCart();
        }

        [HttpPost]
        [Authorize]
        public async Task<bool> AddItemToCart([FromBody] CartProductDTO cartProd)
        {
            return await _cartSessionService.AddProduct(cartProd.ProductId);
        }

        [HttpPut]
        [Authorize]
        public bool UpdateItemFromCart([FromBody] CartProductDTO cartProd)
        {
            return _cartSessionService.UpdateProduct(cartProd.ProductId, cartProd.ProductQuantity);
        }

        [HttpDelete("{productId}/remove")]
        [Authorize]
        public bool RemoveItemFromCart(int productId)
        {
            return _cartSessionService.RemoveProduct(productId);
        }
    }
}
