using Microsoft.AspNetCore.Authentication;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System.Security.Claims;
using TheGenerics.DTOs;

namespace TheGenerics.Controllers
{
    [Route("[controller]")]
    [ApiController]
    public class AuthController : ControllerBase
    {
        private readonly IHttpContextAccessor _httpAccessor;

        public AuthController(IHttpContextAccessor httpAccessor)
        {
            _httpAccessor = httpAccessor;
        }

        [HttpGet]
        [Authorize]
        public UserInfoDTO AuthCheckUser()
        {
            var username = _httpAccessor.HttpContext?.User.FindFirst(x => x.Type == "username");
            if (username is not null)
            {
                return new UserInfoDTO(username.Value);
            }
            else
            {
                _httpAccessor.HttpContext!.Response.StatusCode = StatusCodes.Status401Unauthorized;
                return new UserInfoDTO("", error: true);
            }
            /// cookie check with claims...
        }

        [HttpPost]
        public async Task<UserInfoDTO> AuthLogin([FromBody] AuthLoginDTO loginDto)
        {
            // check if bla bla
            List<Claim> claims = new List<Claim>();
            claims.Add(new Claim("username", loginDto.Username ?? "was_null"));
            var identity = new ClaimsIdentity(claims, "thegenerics");
            var user = new ClaimsPrincipal(identity);
            await _httpAccessor.HttpContext!.SignInAsync("thegenerics", user);
            return new UserInfoDTO(loginDto.Username ?? "was_null");
        }

        [HttpDelete]
        [Authorize]
        public async Task AuthLogout()
        {
            await _httpAccessor.HttpContext!.SignOutAsync("thegenerics");
        }

    }
}
